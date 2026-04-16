import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  Maximize,
  Captions,
  ListVideo,
  Settings
} from "lucide-react";

export const TOTAL_DURATION_SECONDS = 5780; // kept for external imports (SegmentEditor validation)

export const parseTimeToSeconds = (timeStr: string) => {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
};

const formatSecondsToTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export interface Segment {
  id: number;
  time: string;
  title: string;
}

export interface Comment {
  id: number;
  time: string; // Video timestamp where comment was made
  author: string;
  content: string;
  isAnonymous: boolean;
  timestamp: string; // When the comment was posted
}

const DEFAULT_VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export interface VideoPlayerProps {
  segments?: Segment[];
  comments?: Comment[];
  currentTime?: number;
  onTimeChange?: (time: number) => void;
  videoUrl?: string;
  /**
   * 'default': Includes outer border, padding, and info box (used in Editor).
   * 'clean': Only the video player and controls (used in Player Page).
   */
  variant?: 'default' | 'clean';
}

export function VideoPlayer({
  segments = [],
  comments = [],
  currentTime: externalTime,
  onTimeChange,
  videoUrl = DEFAULT_VIDEO_URL,
  variant = 'default'
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [internalTime, setInternalTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const isControlled = externalTime !== undefined;
  const currentTime = isControlled ? externalTime : internalTime;
  const isClean = variant === 'clean';
  // Use real duration once loaded, fall back to constant so chapter markers don't break before load
  const effectiveDuration = duration > 0 ? duration : TOTAL_DURATION_SECONDS;

  const handleTimeChange = (newTime: number) => {
    const clamped = Math.max(0, Math.min(effectiveDuration, newTime));
    if (isControlled && onTimeChange) {
      onTimeChange(clamped);
    }
    if (!isControlled) {
      setInternalTime(clamped);
    }
  };

  // Attach native video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => setDuration(video.duration);
    const onTimeUpdate = () => handleTimeChange(video.currentTime);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []); // mount/unmount only — handleTimeChange is stable via closure over refs

  // Sync external currentTime → video element (e.g. clicking a chapter in SegmentEditor)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || externalTime === undefined) return;
    if (Math.abs(video.currentTime - externalTime) > 0.5) {
      video.currentTime = externalTime;
    }
  }, [externalTime]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  const seekTo = (newTime: number) => {
    const clamped = Math.max(0, Math.min(effectiveDuration, newTime));
    if (videoRef.current) {
      videoRef.current.currentTime = clamped;
    }
    handleTimeChange(clamped);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max(x / rect.width, 0), 1);
    seekTo(Math.floor(percent * effectiveDuration));
  };

  const handleTimelineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max(x / rect.width, 0), 1);
    setHoverTime(Math.floor(percent * effectiveDuration));
  };

  const handleTimelineMouseLeave = () => {
    setHoverTime(null);
  };

  // Calculate segments with range for the chapter visualization
  const sortedSegments = [...segments].sort((a, b) => parseTimeToSeconds(a.time) - parseTimeToSeconds(b.time));
  const segmentsWithRange = sortedSegments.map((seg, index) => {
    const start = parseTimeToSeconds(seg.time);
    const nextSeg = sortedSegments[index + 1];
    const end = nextSeg ? parseTimeToSeconds(nextSeg.time) : effectiveDuration;
    return { ...seg, start, end };
  });

  // Find the segment for hover time
  const getSegmentAtTime = (time: number) => {
    for (let i = segmentsWithRange.length - 1; i >= 0; i--) {
      if (time >= segmentsWithRange[i].start) {
        return segmentsWithRange[i];
      }
    }
    return null;
  };

  return (
    <div className={`${isClean ? 'w-full flex flex-col' : 'bg-white p-4 rounded-lg border border-black/12 flex flex-col h-full'}`}>
      <div className={`flex flex-col ${isClean ? 'gap-0' : 'gap-4'}`}>
        {/* Video Area */}
        <div className="w-full relative aspect-video bg-black rounded overflow-hidden group flex flex-col">
             <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-contain"
                  preload="metadata"
                />
                
                {/* Comment Banner - Bottom Right */}
                {selectedComment && (
                  <div className="absolute bottom-16 right-4 bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl p-4 max-w-[400px] z-50 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0099CC] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {selectedComment.isAnonymous ? '匿' : selectedComment.author.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[13px] font-bold text-white">
                            {selectedComment.isAnonymous ? '匿名' : selectedComment.author}
                          </span>
                          <span className="text-[11px] text-white/60">
                            {selectedComment.time}
                          </span>
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
                          <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Play/Pause Overlay Button (Center) */}
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/10 transition-colors"
                >
                    {!isPlaying && (
                        <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform">
                            <Play size={32} fill="white" className="text-white ml-1" />
                        </div>
                    )}
                </button>
             </div>

             {/* Controls Bar - timeline row on top, buttons row below */}
             <div className="bg-gradient-to-t from-black/90 to-black/50 shrink-0 z-20">

                {/* Timeline Row */}
                <div
                    className="w-full h-4 cursor-pointer relative group/timeline"
                    onClick={handleSeek}
                    onMouseMove={handleTimelineMouseMove}
                    onMouseLeave={handleTimelineMouseLeave}
                >
                    {/* Visual track — grows on hover, clips played/buffered bars */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] group-hover/timeline:h-[5px] transition-[height] duration-150 bg-white/30 overflow-hidden pointer-events-none">
                        {/* Buffered bar (simulated) */}
                        <div className="absolute top-0 left-0 h-full bg-white/20 w-[60%]"></div>
                        {/* Played bar */}
                        <div
                            className="absolute top-0 left-0 h-full bg-[#2B85D8]"
                            style={{ width: `${(currentTime / effectiveDuration) * 100}%` }}
                        ></div>
                    </div>

                    {/* Chapter Separators — slightly taller than track, white, vertically centred */}
                    {sortedSegments.map((segment) => {
                      if (segment.time === "00:00:00") return null;
                      const seconds = parseTimeToSeconds(segment.time);
                      const percent = (seconds / effectiveDuration) * 100;
                      if (percent > 100) return null;
                      return (
                        <div
                          key={`sep-${segment.id}`}
                          className="absolute w-[2px] h-[5px] group-hover/timeline:h-[7px] bg-white z-20 pointer-events-none transition-[height] duration-150"
                          style={{ left: `${percent}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                      );
                    })}

                    {/* Comment Markers */}
                    {comments.map((comment) => {
                      const seconds = parseTimeToSeconds(comment.time);
                      const percent = (seconds / effectiveDuration) * 100;
                      if (percent > 100) return null;
                      return (
                        <button
                          key={`comment-${comment.id}`}
                          className="absolute top-1/2 w-2 h-2 bg-[#3C9EEA] rounded-full -translate-y-1/2 -translate-x-1/2 shadow-md z-40 hover:scale-150 transition-transform cursor-pointer border border-white"
                          style={{ left: `${percent}%` }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedComment(comment);
                          }}
                          title="查看留言"
                        />
                      );
                    })}

                    {/* Hover Time Tooltip */}
                    {hoverTime !== null && (() => {
                      const segment = getSegmentAtTime(hoverTime);
                      return (
                        <div
                          className="absolute bottom-full mb-2 bg-black/90 text-white text-[11px] px-2 py-1.5 rounded whitespace-nowrap shadow-lg z-50 pointer-events-none"
                          style={{ left: `${(hoverTime / effectiveDuration) * 100}%`, transform: 'translateX(-50%)' }}
                        >
                          <div className="font-bold text-[#3C9EEA] mb-0.5">{formatSecondsToTime(hoverTime)}</div>
                          {segment && <div>{segment.title || "未命名段落"}</div>}
                        </div>
                      );
                    })()}

                    {/* Handle — hidden by default, appears on timeline hover */}
                    <div
                        className="absolute top-1/2 h-3 w-3 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow opacity-0 group-hover/timeline:opacity-100 transition-opacity z-30"
                        style={{ left: `${(currentTime / effectiveDuration) * 100}%` }}
                    ></div>
                </div>

                {/* Buttons Row */}
                <div className="h-10 flex items-center px-3 gap-4">
                    {/* Left Controls */}
                    <div className="flex items-center gap-4 text-white">
                        <button onClick={togglePlay} className="hover:text-[#0099CC] transition-colors">
                            {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
                        </button>
                        <button onClick={() => seekTo(currentTime - 10)} className="hover:text-[#0099CC] transition-colors group/tooltip relative">
                            <RotateCcw size={18} />
                        </button>
                        <button onClick={() => seekTo(currentTime + 10)} className="hover:text-[#0099CC] transition-colors group/tooltip relative">
                            <RotateCw size={18} />
                        </button>
                        <div className="text-xs font-medium tracking-wide">
                            {formatSecondsToTime(currentTime)} / {formatSecondsToTime(effectiveDuration)}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Right Controls */}
                    <div className="flex gap-4 text-white items-center">
                        <div className="flex items-center gap-2 group/vol">
                            <Volume2 size={20} className="cursor-pointer hover:text-[#0099CC]" />
                        </div>
                        <span className="text-xs font-bold cursor-pointer hover:text-[#0099CC]">1x</span>
                        <Captions size={20} className="cursor-pointer hover:text-[#0099CC]" />
                        <ListVideo size={20} className="cursor-pointer hover:text-[#0099CC]" />
                        <Settings size={20} className="cursor-pointer hover:text-[#0099CC]" />
                        <Maximize size={20} className="cursor-pointer hover:text-[#0099CC]" />
                    </div>
                </div>
             </div>
        </div>

        {/* Video Info - Only render if not in clean mode */}
        {!isClean && (
          <div className="bg-[#f5f5f5] rounded p-4 flex flex-col gap-4">
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
    </div>
  );
}