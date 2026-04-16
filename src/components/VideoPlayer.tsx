import React, { useState, useEffect } from "react";
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
import imgVideo from "figma:asset/40d6516d8419860fd036d8ee2c01b6d8ebce5bf4.png";

export const TOTAL_DURATION_SECONDS = 5780; // 1:36:20

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

export interface VideoPlayerProps {
  segments?: Segment[];
  comments?: Comment[];
  currentTime?: number;
  onTimeChange?: (time: number) => void;
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
  variant = 'default'
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [internalTime, setInternalTime] = useState(333); // Start at 5:33 roughly
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const isControlled = externalTime !== undefined;
  const currentTime = isControlled ? externalTime : internalTime;
  const isClean = variant === 'clean';

  const handleTimeChange = (newTime: number) => {
    // Clamp between 0 and TOTAL_DURATION_SECONDS
    const clamped = Math.max(0, Math.min(TOTAL_DURATION_SECONDS, newTime));
    
    if (isControlled && onTimeChange) {
      onTimeChange(clamped);
    }
    if (!isControlled) {
      setInternalTime(clamped);
    }
  };

  // Simulate video playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        handleTimeChange(currentTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime]); // Depend on currentTime to increment from it

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max(x / rect.width, 0), 1);
    handleTimeChange(Math.floor(percent * TOTAL_DURATION_SECONDS));
  };

  const handleTimelineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max(x / rect.width, 0), 1);
    setHoverTime(Math.floor(percent * TOTAL_DURATION_SECONDS));
  };

  const handleTimelineMouseLeave = () => {
    setHoverTime(null);
  };

  const handleSegmentClick = (timeStr: string) => {
    handleTimeChange(parseTimeToSeconds(timeStr));
    setIsPlaying(true);
  };

  // Calculate segments with range for the chapter visualization
  const sortedSegments = [...segments].sort((a, b) => parseTimeToSeconds(a.time) - parseTimeToSeconds(b.time));
  const segmentsWithRange = sortedSegments.map((seg, index) => {
    const start = parseTimeToSeconds(seg.time);
    const nextSeg = sortedSegments[index + 1];
    const end = nextSeg ? parseTimeToSeconds(nextSeg.time) : TOTAL_DURATION_SECONDS;
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
                <img src={imgVideo} alt="Video Player" className="w-full h-full object-contain opacity-90" />
                
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
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/10 transition-colors"
                >
                    {!isPlaying && (
                        <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform">
                            <Play size={32} fill="white" className="text-white ml-1" />
                        </div>
                    )}
                </button>
             </div>

             {/* Controls Bar */}
             <div className="h-14 bg-[#1a1a1a] flex items-center px-4 gap-4 z-20 shrink-0">
                {/* Left Controls */}
                <div className="flex items-center gap-4 text-white">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#0099CC] transition-colors">
                        {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
                    </button>
                    <button onClick={() => handleTimeChange(currentTime - 10)} className="hover:text-[#0099CC] transition-colors group/tooltip relative">
                        <RotateCcw size={18} />
                    </button>
                    <button onClick={() => handleTimeChange(currentTime + 10)} className="hover:text-[#0099CC] transition-colors group/tooltip relative">
                        <RotateCw size={18} />
                    </button>
                    <div className="text-xs font-medium tracking-wide">
                        {formatSecondsToTime(currentTime)} / {formatSecondsToTime(TOTAL_DURATION_SECONDS)}
                    </div>
                </div>

                {/* Timeline */}
                <div 
                    className="flex-1 h-1.5 bg-gray-600 rounded-full cursor-pointer relative group/timeline mx-2"
                    onClick={handleSeek}
                    onMouseMove={handleTimelineMouseMove}
                    onMouseLeave={handleTimelineMouseLeave}
                >
                    {/* Buffered bar (simulated) */}
                    <div className="absolute top-0 left-0 h-full bg-gray-500 rounded-full w-[60%] pointer-events-none"></div>
                    
                    {/* Played bar */}
                    <div 
                        className="absolute top-0 left-0 h-full bg-[#3C9EEA] rounded-full pointer-events-none"
                        style={{ width: `${(currentTime / TOTAL_DURATION_SECONDS) * 100}%` }}
                    ></div>

                    {/* Chapter Separators */}
                    {sortedSegments.map((segment) => {
                      if (segment.time === "00:00:00") return null;
                      const seconds = parseTimeToSeconds(segment.time);
                      const percent = (seconds / TOTAL_DURATION_SECONDS) * 100;
                      return (
                        <div 
                          key={`sep-${segment.id}`}
                          className="absolute top-0 bottom-0 w-[2px] bg-[#1a1a1a] z-20 pointer-events-none"
                          style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}
                        />
                      );
                    })}

                    {/* Comment Markers */}
                    {comments.map((comment) => {
                      const seconds = parseTimeToSeconds(comment.time);
                      const percent = (seconds / TOTAL_DURATION_SECONDS) * 100;
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
                          className="absolute bottom-full mb-3 bg-black/90 text-white text-[11px] px-2 py-1.5 rounded whitespace-nowrap shadow-lg z-50 pointer-events-none"
                          style={{ left: `${(hoverTime / TOTAL_DURATION_SECONDS) * 100}%`, transform: 'translateX(-50%)' }}
                        >
                          <div className="font-bold text-[#3C9EEA] mb-0.5">{formatSecondsToTime(hoverTime)}</div>
                          {segment && <div>{segment.title || "未命名段落"}</div>}
                        </div>
                      );
                    })()}

                    {/* Handle */}
                    <div 
                        className="absolute top-1/2 h-3.5 w-3.5 bg-[#3C9EEA] rounded-full -translate-y-1/2 -translate-x-1/2 shadow transition-transform group-hover/timeline:scale-125 z-30"
                        style={{ left: `${(currentTime / TOTAL_DURATION_SECONDS) * 100}%` }}
                    ></div>
                </div>

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