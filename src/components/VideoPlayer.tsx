import React, { useState, useEffect, useRef, useCallback } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { Popper, Paper, Typography, Fade } from "@mui/material";
import { RotateCcw, RotateCw, Volume2, VolumeX, Settings, Maximize2, Minimize2 } from "lucide-react";

export const TOTAL_DURATION_SECONDS = 5780;

export const parseTimeToSeconds = (timeStr: string): number => {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
};

const formatTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
};

const DEFAULT_VIDEO_URL = "https://vjs.zencdn.net/v/oceans.mp4";
const PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5, 2];

// ── Icons ─────────────────────────────────────────────────────────────────────

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface Segment {
  id: number;
  time: string;
  title: string;
}

export interface Comment {
  id: number;
  time: string;
  author: string;
  content: string;
  isAnonymous: boolean;
  timestamp: string;
}

export interface VideoPlayerProps {
  segments?: Segment[];
  comments?: Comment[];
  currentTime?: number;
  onTimeChange?: (time: number) => void;
  onDurationChange?: (duration: number) => void;
  videoUrl?: string;
  variant?: 'default' | 'clean';
}

// ── Component ─────────────────────────────────────────────────────────────────

export function VideoPlayer({
  segments = [],
  comments = [],
  currentTime: externalTime,
  onTimeChange,
  onDurationChange,
  videoUrl = DEFAULT_VIDEO_URL,
  variant = 'default',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Layer 1 (progress bar background) — used for accurate horizontal seek calculation
  const trackRef = useRef<HTMLDivElement>(null);

  const isClean = variant === 'clean';
  const isControlled = externalTime !== undefined;

  // ── Player state ──────────────────────────────────────────────────────────────
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSecs, setCurrentTimeSecs] = useState(0);
  const [durationSecs, setDurationSecs] = useState(0);
  const [bufferedPct, setBufferedPct] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  // ── Seekbar hover / drag state ────────────────────────────────────────────────
  const [hoverPct, setHoverPct] = useState<number | null>(null);
  const [hoverTime, setHoverTime] = useState(0);
  const [hoverSegment, setHoverSegment] = useState<Segment | null>(null);
  const [anchorEl, setAnchorEl] = useState<{ getBoundingClientRect: () => DOMRect } | null>(null);
  const [hoveredChapterIdx, setHoveredChapterIdx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // ── Stable refs ────────────────────────────────────────────────────────────────
  const onTimeChangeRef = useRef(onTimeChange);
  useEffect(() => { onTimeChangeRef.current = onTimeChange; }, [onTimeChange]);

  const isControlledRef = useRef(isControlled);
  useEffect(() => { isControlledRef.current = isControlled; }, [isControlled]);

  const segmentsRef = useRef(segments);
  useEffect(() => { segmentsRef.current = segments; }, [segments]);

  const durationRef = useRef(durationSecs);
  useEffect(() => { durationRef.current = durationSecs; }, [durationSecs]);

  // ── Effect 1: Player lifecycle ────────────────────────────────────────────────
  useEffect(() => {
    if (!videoRef.current) return;
    console.log('[VideoPlayer] initializing with src:', videoUrl);

    const player = videojs(videoRef.current, {
      controls: false,
      fluid: isClean,
      fill: !isClean,
      preload: 'metadata',
      sources: [{ src: videoUrl, type: 'video/mp4' }],
    });

    playerRef.current = player;

    player.ready(() => {
      setIsPlayerReady(true);
      player.on('loadedmetadata', () => {
        const d = player.duration() || 0;
        setDurationSecs(d);
        onDurationChange?.(d);
      });
      player.on('timeupdate', () => {
        const t = player.currentTime() ?? 0;
        setCurrentTimeSecs(t);
        if (isControlledRef.current && onTimeChangeRef.current) onTimeChangeRef.current(t);
      });
      player.on('play', () => setIsPlaying(true));
      player.on('pause', () => setIsPlaying(false));
      player.on('volumechange', () => setIsMuted(player.muted() || false));
      player.on('ratechange', () => setPlaybackRate(player.playbackRate() || 1));
      player.on('progress', () => setBufferedPct((player.bufferedPercent() || 0) * 100));
    });

    return () => {
      player.dispose();
      playerRef.current = null;
      setIsPlayerReady(false);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Effect 2: externalTime → player sync ─────────────────────────────────────
  useEffect(() => {
    if (!playerRef.current || externalTime === undefined || !isPlayerReady) return;
    const current = playerRef.current.currentTime() ?? 0;
    if (Math.abs(current - externalTime) > 0.5) playerRef.current.currentTime(externalTime);
  }, [externalTime, isPlayerReady]);

  // ── Effect 3: fullscreen change ───────────────────────────────────────────────
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // ── Seekbar helpers ───────────────────────────────────────────────────────────
  const computeSeekPct = useCallback((clientX: number): number => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  }, []);

  const updateHover = useCallback((clientX: number) => {
    const pct = computeSeekPct(clientX);
    const t = pct * durationRef.current;
    setHoverPct(pct * 100);
    setHoverTime(t);

    const sorted = [...segmentsRef.current].sort(
      (a, b) => parseTimeToSeconds(a.time) - parseTimeToSeconds(b.time)
    );
    let found: Segment | null = null;
    let foundIdx = -1;
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (t >= parseTimeToSeconds(sorted[i].time)) { found = sorted[i]; foundIdx = i; break; }
    }
    setHoverSegment(found);
    setHoveredChapterIdx(foundIdx >= 0 ? foundIdx : null);

    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      setAnchorEl({
        getBoundingClientRect: () => ({
          width: 0, height: 0,
          top: rect.top, bottom: rect.top,
          left: clientX, right: clientX,
          x: clientX, y: rect.top,
          toJSON: () => {},
        } as DOMRect),
      });
    }
  }, [computeSeekPct]);

  const clearHover = useCallback(() => {
    setHoverPct(null);
    setHoverSegment(null);
    setAnchorEl(null);
    setHoveredChapterIdx(null);
  }, []);

  const handleSeekMouseMove = useCallback((e: React.MouseEvent) => {
    updateHover(e.clientX);
    if (isDragging) playerRef.current?.currentTime(computeSeekPct(e.clientX) * durationRef.current);
  }, [isDragging, updateHover, computeSeekPct]);

  const handleSeekMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    playerRef.current?.currentTime(computeSeekPct(e.clientX) * durationRef.current);
    updateHover(e.clientX);
  }, [computeSeekPct, updateHover]);

  const handleSeekMouseLeave = useCallback(() => {
    if (!isDragging) clearHover();
  }, [isDragging, clearHover]);

  // Global drag tracking
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => {
      updateHover(e.clientX);
      playerRef.current?.currentTime(computeSeekPct(e.clientX) * durationRef.current);
    };
    const onUp = () => { setIsDragging(false); clearHover(); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isDragging, updateHover, computeSeekPct, clearHover]);

  // ── Player controls ───────────────────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    if (isPlaying) playerRef.current?.pause();
    else playerRef.current?.play();
  }, [isPlaying]);

  const skipBack = () => playerRef.current?.currentTime(Math.max(0, currentTimeSecs - 10));
  const skipFwd = () => playerRef.current?.currentTime(Math.min(durationSecs, currentTimeSecs + 10));
  const toggleMute = () => playerRef.current?.muted(!isMuted);

  const cycleSpeed = () => {
    const idx = PLAYBACK_RATES.indexOf(playbackRate);
    playerRef.current?.playbackRate(PLAYBACK_RATES[(idx + 1) % PLAYBACK_RATES.length]);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) containerRef.current.requestFullscreen();
    else document.exitFullscreen();
  };

  // ── Derived values ────────────────────────────────────────────────────────────
  const progressPct = durationSecs > 0 ? (currentTimeSecs / durationSecs) * 100 : 0;
  const sortedSegs = [...segments].sort((a, b) => parseTimeToSeconds(a.time) - parseTimeToSeconds(b.time));
  const isHovering = hoverPct !== null;

  const btn = "flex items-center justify-center rounded text-white/75 hover:text-white hover:bg-white/10 transition-colors";

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <div className={isClean
      ? 'w-full flex flex-col'
      : 'bg-white p-4 rounded-lg border border-black/12 flex flex-col h-full'
    }>
      <div
        ref={containerRef}
        className={isClean
          ? 'relative w-full cursor-pointer'
          : 'flex-1 min-h-0 relative rounded-lg overflow-hidden bg-black cursor-pointer'
        }
        onClick={togglePlay}
      >
        {/* Video.js player */}
        <div data-vjs-player className={isClean ? '' : 'h-full'}>
          <video ref={videoRef} className="video-js vjs-default-skin" />
        </div>

        {/* Big play overlay */}
        {!isPlaying && isPlayerReady && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Comment Banner */}
        {selectedComment && (
          <div
            className="absolute bottom-16 right-4 bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl p-4 max-w-[400px] z-20 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0099CC] flex items-center justify-center text-white font-bold text-sm shrink-0">
                {selectedComment.isAnonymous ? '匿' : selectedComment.author.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[13px] font-bold text-white">
                    {selectedComment.isAnonymous ? '匿名' : selectedComment.author}
                  </span>
                  <span className="text-[11px] text-white/60">{selectedComment.time}</span>
                </div>
                <p className="text-[13px] text-white/90 leading-[1.5] line-clamp-3">
                  {selectedComment.content}
                </p>
              </div>
              <button
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors shrink-0"
                onClick={() => setSelectedComment(null)}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ── Custom Control Bar ─────────────────────────────────────────────
            Fixed height, two stacked layers:
              Layer 1 (z-0): full-height progress bar visualization
              Layer 2 (z-10): control buttons floating on top
        ──────────────────────────────────────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 flex"
          style={{ height: 30, background: 'rgba(0,0,0,0.65)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left group */}
          <div
            className="flex items-center gap-0.5 shrink-0 h-full px-1"
            style={{ zIndex: 2 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button onClick={togglePlay} className={`${btn} w-7 h-full`} title={isPlaying ? '暫停' : '播放'}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={skipBack} className={`${btn} w-7 h-full`} title="倒退 10 秒">
              <RotateCcw size={13} />
            </button>
            <button onClick={skipFwd} className={`${btn} w-7 h-full`} title="快進 10 秒">
              <RotateCw size={13} />
            </button>
            <span className="text-white/70 text-[11px] ml-1 tabular-nums whitespace-nowrap">
              {formatTime(currentTimeSecs)} / {formatTime(durationSecs)}
            </span>
          </div>

          {/* ── Progress bar — flex-1, trackRef here; all seek/hover events only here ── */}
          <div
            ref={trackRef}
            className="flex-1 relative mr-2"
            style={{ zIndex: 1 }}
            onMouseMove={handleSeekMouseMove}
            onMouseLeave={handleSeekMouseLeave}
            onMouseDown={handleSeekMouseDown}
          >
            {/* Thin visual track — 4px normal, 6px on hover, centered vertically */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                height: isHovering ? 6 : 4,
                transition: 'height 0.15s ease',
                borderRadius: 2,
              }}
            >
              {/* Unplayed background — slightly lighter than #1a1a1a to provide subtle groove */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
              {/* Buffered */}
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${bufferedPct}%`, background: 'rgba(255,255,255,0.4)', borderRadius: 2 }} />
              {/* Played */}
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${progressPct}%`, background: '#2B85D8', borderRadius: 2 }} />

              {/* Chapter cut marks — same color as control bar bg, creates physical-gap illusion */}
              {sortedSegs.map((seg) => {
                if (!durationSecs) return null;
                const pct = (parseTimeToSeconds(seg.time) / durationSecs) * 100;
                if (pct <= 0 || pct > 100) return null;
                return (
                  <div
                    key={seg.id}
                    style={{
                      position: 'absolute',
                      left: `${pct}%`,
                      width: 3,
                      height: '100%',
                      top: 0,
                      transform: 'translateX(-50%)',
                      background: 'rgba(0,0,0,0.75)',
                      zIndex: 4,
                      pointerEvents: 'none',
                    }}
                  />
                );
              })}

              {/* Hover position line */}
              {hoverPct !== null && (
                <div
                  style={{
                    position: 'absolute',
                    left: `${hoverPct}%`,
                    width: 1,
                    height: '100%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,255,255,0.7)',
                    zIndex: 6,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Playhead handle — only on hover */}
              {isHovering && (
                <div
                  style={{
                    position: 'absolute',
                    left: `${progressPct}%`,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'white',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 7,
                    pointerEvents: 'none',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
                  }}
                />
              )}
            </div>

            {/* Comment markers — full-height parent so they're centered in control bar */}
            {comments.map((comment) => {
              if (!durationSecs) return null;
              const pct = (parseTimeToSeconds(comment.time) / durationSecs) * 100;
              if (pct > 100) return null;
              return (
                <button
                  key={comment.id}
                  className="absolute rounded-full border border-white"
                  style={{
                    left: `${pct}%`,
                    top: '50%',
                    width: 8,
                    height: 8,
                    background: '#3C9EEA',
                    zIndex: 5,
                    padding: 0,
                    cursor: 'pointer',
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => { e.stopPropagation(); setSelectedComment(comment); }}
                  title="查看留言"
                />
              );
            })}
          </div>

          {/* Right group */}
          <div
            className="flex items-center gap-0.5 shrink-0 h-full px-1"
            style={{ zIndex: 2 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button onClick={toggleMute} className={`${btn} w-7 h-full`} title={isMuted ? '取消靜音' : '靜音'}>
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
            <button onClick={cycleSpeed} className={`${btn} h-full px-1.5 text-[11px] font-medium min-w-[30px]`} title="播放速度">
              {playbackRate}×
            </button>
            <button className={`${btn} h-full px-1.5 text-[10px] font-bold tracking-wide`} title="字幕">
              CC
            </button>
            <button className={`${btn} w-7 h-full`} title="設定">
              <Settings size={13} />
            </button>
            <button onClick={toggleFullscreen} className={`${btn} w-7 h-full`} title={isFullscreen ? '退出全螢幕' : '全螢幕'}>
              {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </div>

        {/* MUI Popper: chapter hover tooltip — dark bg, white text, arrow */}
        <Popper
          open={!!hoverSegment && !!anchorEl}
          anchorEl={anchorEl as any}
          placement="top"
          modifiers={[{ name: 'offset', options: { offset: [0, 10] } }]}
          style={{ zIndex: 9999 }}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={150}>
              <div style={{ position: 'relative', pointerEvents: 'none' }}>
                <Paper
                  elevation={0}
                  sx={{
                    px: 1.5,
                    py: 1,
                    pointerEvents: 'none',
                    minWidth: 100,
                    background: 'rgba(15,15,15,0.93)',
                    borderRadius: '6px',
                  }}
                >
                  <Typography variant="body2" fontWeight="bold" fontSize={13} lineHeight={1.4} sx={{ color: '#fff' }}>
                    {hoverSegment?.title || '未命名段落'}
                  </Typography>
                  <Typography variant="caption" display="block" fontWeight={500} lineHeight={1.6} sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {formatTime(hoverTime)}
                  </Typography>
                </Paper>
                {/* Arrow pointing down toward progress bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -5,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '5px solid transparent',
                    borderRight: '5px solid transparent',
                    borderTop: '5px solid rgba(15,15,15,0.93)',
                  }}
                />
              </div>
            </Fade>
          )}
        </Popper>
      </div>

      {/* Video Info — default variant only */}
      {!isClean && (
        <div className="shrink-0 bg-[#f5f5f5] rounded p-4 flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-[#333]/60 tracking-[0.4px]">影片課程</span>
            <span className="text-[14px] text-[#333] tracking-[0.17px]">專題研究 (CSIE7990-60)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-[#333]/60 tracking-[0.4px]">影片名稱</span>
            <span className="text-[14px] text-[#333] tracking-[0.17px]">Week 1: 電影的聲音</span>
          </div>
        </div>
      )}
    </div>
  );
}
