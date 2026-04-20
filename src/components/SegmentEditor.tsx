import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Icon } from "./Icon";
import { SaveSuccessAlert } from "./SaveSuccessAlert";
import { ImportSuccessAlert } from "./ImportSuccessAlert";
import { AiImportDialog } from "./AiImportDialog";
import { AiImportConflictDialog } from "./AiImportConflictDialog";
import { AiSegmentSelectionDialog } from "./AiSegmentSelectionDialog";
import { AiFeedbackDialog } from "./AiFeedbackDialog";
import { AiFeedbackSuccessAlert } from "./AiFeedbackSuccessAlert";
import { UnsavedChangesDialog } from "./UnsavedChangesDialog";
import { PublishSuccessDialog } from "./PublishSuccessDialog";
import { UnpublishDialog } from "./UnpublishDialog";
import { PublishedSaveSuccessDialog } from "./PublishedSaveSuccessDialog";
import { parseTimeToSeconds, TOTAL_DURATION_SECONDS } from "./VideoPlayer";

export interface Segment {
  id: number;
  time: string;
  title: string;
  source?: 'manual' | 'ai';
}

export function SegmentEditor({
  onCancel,
  segments,
  setSegments,
  currentTime,
  videoDuration = 0,
}: {
  onCancel?: () => void;
  segments: Segment[];
  setSegments: (segments: Segment[]) => void;
  currentTime?: number;
  videoDuration?: number;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSaveAlert, setShowSaveAlert] = useState(false);
  const [showImportAlert, setShowImportAlert] = useState(false);
  const [showAiImportDialog, setShowAiImportDialog] = useState(false);
  const [showAiConflictDialog, setShowAiConflictDialog] = useState(false);
  const [aiSegmentSelectionOpen, setAiSegmentSelectionOpen] = useState(false);
  const [aiFeedbackOpen, setAiFeedbackOpen] = useState(false);
  const [showAiFeedbackSuccess, setShowAiFeedbackSuccess] = useState(false);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const [showPublishDialog, setShowPublishDialog] = useState(false);
  const [showUnpublishDialog, setShowUnpublishDialog] = useState(false);
  const [showPublishedSaveDialog, setShowPublishedSaveDialog] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  
  const [isDirty, setIsDirty] = useState(false);
  
  const [hoverThumbUp, setHoverThumbUp] = useState(false);
  const [hoverThumbDown, setHoverThumbDown] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target as Node)) {
        setIsStatusDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll && listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth'
      });
      setShouldScroll(false);
    }
  }, [segments, shouldScroll]);

  // ── Validation helpers ────────────────────────────────────────────────────────
  const isFullTimeFormat = (t: string) => /^\d{2}:\d{2}:\d{2}$/.test(t);

  const formatDuration = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  // First segment = sorted-by-time index 0; its time is locked to 00:00:00
  const segsSorted = [...segments].sort((a, b) => a.time.localeCompare(b.time));
  const firstSegId = segsSorted[0]?.id;

  // Duplicate time check (ignores 00:00:00)
  const timeCounts = segments.reduce((acc, segment) => {
    if (segment.time === "00:00:00") return acc;
    acc[segment.time] = (acc[segment.time] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Per-segment error getters
  const getTimeError = (s: Segment): string | null => {
    if (s.id === firstSegId) return null; // locked field — always valid
    if (s.time === '') return '必填';
    if (!isFullTimeFormat(s.time)) return '時間格式錯誤';
    if (videoDuration > 0 && parseTimeToSeconds(s.time) > videoDuration)
      return `時間超過影片總長 (${formatDuration(videoDuration)})`;
    if (s.time !== "00:00:00" && timeCounts[s.time] > 1) return '時間重複';
    return null;
  };

  const getTitleError = (s: Segment): string | null => {
    if (s.title.trim() === '') return '必填';
    if (s.title.length > 50) return '字數上限為 50 個字';
    return null;
  };

  // Blocking errors (disable save)
  const hasBlockingError = segments.some(s => getTimeError(s) !== null || getTitleError(s) !== null);

  // Legacy alias used by existing save/publish guards
  const hasError = hasBlockingError;
  
  const [candidateSegments, setCandidateSegments] = useState<{time: string, title: string}[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showFirstResetAlert, setShowFirstResetAlert] = useState(false);

  const handleDelete = (id: number) => {
    const remaining = segments.filter(s => s.id !== id);
    const wasFirst = id === firstSegId;

    if (wasFirst && remaining.length > 0) {
      // promote the new first segment → lock its time to 00:00:00
      const newSorted = [...remaining].sort((a, b) => a.time.localeCompare(b.time));
      const newFirstId = newSorted[0].id;
      const normalized = remaining.map(s =>
        s.id === newFirstId ? { ...s, time: '00:00:00' } : s
      );
      normalized.sort((a, b) => a.time.localeCompare(b.time));
      setSegments(normalized);
      setShowFirstResetAlert(true);
      setTimeout(() => setShowFirstResetAlert(false), 3000);
    } else {
      setSegments(remaining);
    }
    setIsDirty(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...segments.map(s => s.id), 0) + 1;

    let timeStr = "00:00:00";
    if (segments.length > 0) {
      // Non-first segment: use current playback position
      if (currentTime !== undefined) {
        const h = Math.floor(currentTime / 3600);
        const m = Math.floor((currentTime % 3600) / 60);
        const s = Math.floor(currentTime % 60);
        timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      }
    }
    // If segments.length === 0: first segment → stays "00:00:00"

    const newSegments = [...segments, { id: newId, time: timeStr, title: "", source: 'manual' as const }];
    newSegments.sort((a, b) => a.time.localeCompare(b.time));
    setSegments(newSegments);
    setIsDirty(true);

    if (newSegments.length > 0 && newSegments[newSegments.length - 1].id === newId) {
      setShouldScroll(true);
    }
  };

  const handleTimeBlur = (id: number, value: string) => {
    // Remove non-digits
    let digits = value.replace(/\D/g, '');
    
    // Cap at 8 digits (allow HH:MM:SS format properly)
    if (digits.length > 8) digits = digits.slice(-8);
    
    // If empty, reset to 00:00:00
    if (digits.length === 0) {
      const newSegments = segments.map(s => s.id === id ? { ...s, time: "00:00:00" } : s);
      newSegments.sort((a, b) => a.time.localeCompare(b.time));
      setSegments(newSegments);
      return;
    }
    
    let padded = digits;
    if (digits.length <= 6) {
        padded = digits.padStart(6, '0');
    } else {
        padded = digits.padStart(6, '0'); // Just ensures minimum length
    }
    
    if (digits.length > 6) digits = digits.slice(-6); // Cap at 6 as per standard HH:MM:SS
    padded = digits.padStart(6, '0');

    const formatted = `${padded.slice(0, 2)}:${padded.slice(2, 4)}:${padded.slice(4, 6)}`;
    
    // Always sort on blur to ensure correct order even if value technically didn't change from onChange
    const newSegments = segments.map(s => s.id === id ? { ...s, time: formatted } : s);
    newSegments.sort((a, b) => a.time.localeCompare(b.time));
    setSegments(newSegments);
    
    if (segments.find(s => s.id === id)?.time !== formatted) {
        setIsDirty(true);
    }
  };

  const handleSave = () => {
    if (hasError) return;
    if (isPublished) {
      setShowPublishedSaveDialog(true);
      setIsDirty(false);
    } else {
      setShowSaveAlert(true);
      setIsDirty(false);
      // Optional: Auto-hide after 3 seconds
      setTimeout(() => {
        setShowSaveAlert(false);
      }, 3000);
    }
  };

  const getMockSegments = (id: string) => {
    if (id === "auto-original") {
      return [
        { time: "00:00:00", title: "課程簡介與目標" },
        { time: "00:00:10", title: "電影聲音的歷史演變" },
        { time: "00:00:18", title: "聲音與畫面的互動關係" },
        { time: "00:00:25", title: "經典案例分析：教父" },
        { time: "00:00:32", title: "現場錄音的挑戰" },
        { time: "00:00:40", title: "後期配音與音效製作" },
      ];
    } else if (id === "auto-english") {
      return [
        { time: "00:00:00", title: "Course Introduction" },
        { time: "00:00:10", title: "History of Film Sound" },
        { time: "00:00:18", title: "Audio-Visual Interaction" },
        { time: "00:00:25", title: "Case Study: The Godfather" },
        { time: "00:00:32", title: "Location Recording Challenges" },
        { time: "00:00:40", title: "Post-Production Sound Design" },
      ];
    } else if (id === "auto-bilingual") {
      return [
        { time: "00:00:00", title: "課程簡介與目標 | Course Introduction" },
        { time: "00:00:10", title: "電影聲音的歷史演變 | History of Film Sound" },
        { time: "00:00:18", title: "聲音與畫面的互動關係 | Audio-Visual Interaction" },
        { time: "00:00:25", title: "經典案例分析：教父 | Case Study: The Godfather" },
        { time: "00:00:32", title: "現場錄音的挑戰 | Location Recording Challenges" },
        { time: "00:00:40", title: "後期配音與音效製作 | Post-Production Sound Design" },
      ];
    }
    return [];
  };

  const handleAiSelectionConfirm = (selectedSegments: {time: string, title: string}[]) => {
    setAiSegmentSelectionOpen(false);

    // Show import success alert
    setShowImportAlert(true);
    setTimeout(() => setShowImportAlert(false), 3000);
    setShowFeedback(true);

    // Separate manual segments from AI segments
    const manualSegments = segments.filter(s => s.source === 'manual' && (s.title.trim() !== "" || s.time !== "00:00:00"));
    const nextIdStart = Math.max(...segments.map(s => s.id), 0) + 1;
    
    const newSegmentsToAdd = selectedSegments.map((s, i) => ({
      id: nextIdStart + i,
      time: s.time,
      title: s.title,
      source: 'ai' as const
    }));
    
    // If there are no manual segments, replace all (including old AI segments)
    // If there are manual segments, keep them and append new AI segments
    if (manualSegments.length === 0) {
        setSegments(newSegmentsToAdd);
    } else {
        const combined = [...manualSegments, ...newSegmentsToAdd];
        // Sort by time
        combined.sort((a, b) => {
           // Simple string comparison for HH:MM:SS works
           return a.time.localeCompare(b.time);
        });
        setSegments(combined);
    }
    setIsDirty(true);
  };
  
  const handleFeedback = () => {
    setShowFeedback(false);
  };

  const handleCancel = () => {
    if (isDirty) {
      setShowUnsavedDialog(true);
    } else {
      if (onCancel) onCancel();
    }
  };
  
  const handleSaveAndPublish = () => {
    if (hasError) return;
    // Save logic first (if any)
    setShowPublishDialog(true);
  };
  
  const handlePublishConfirm = () => {
    setShowPublishDialog(false);
    setIsPublished(true);
    setIsDirty(false);
  };
  
  const handleUnpublishConfirm = () => {
    setShowUnpublishDialog(false);
    setIsPublished(false);
  };

  const confirmLeave = () => {
      setShowUnsavedDialog(false);
      setIsDirty(false); 
      if (onCancel) onCancel();
  };

  const handleAiImportClick = () => {
    // Check if there are any existing segments (manual or AI)
    const hasExistingSegments = segments.length > 0 && segments.some(s => 
      s.title.trim() !== "" || s.time !== "00:00:00"
    );
    
    if (hasExistingSegments) {
      setShowAiConflictDialog(true);
    } else {
      setShowAiImportDialog(true);
    }
  };

  const handleConflictConfirm = () => {
    setShowAiConflictDialog(false);
    setShowAiImportDialog(true);
  };

  return (
    <div className="bg-white rounded-lg border border-black/12 flex flex-col p-4 h-full relative">
      <SaveSuccessAlert 
        visible={showSaveAlert} 
        onClose={() => setShowSaveAlert(false)} 
      />
      <ImportSuccessAlert
        visible={showImportAlert}
        onClose={() => setShowImportAlert(false)}
      />
      {showFirstResetAlert && (
        <div className="fixed top-[96px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#fff8e1] border border-[#ffe082] px-4 py-[6px] rounded-[4px] shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <span className="text-[14px] text-[#78350f]">第一個段落時間自動設為 00:00:00</span>
        </div>
      )}
      <UnsavedChangesDialog
        open={showUnsavedDialog}
        onClose={() => setShowUnsavedDialog(false)}
        onConfirm={confirmLeave}
      />
      <PublishSuccessDialog
        open={showPublishDialog}
        onClose={() => setShowPublishDialog(false)}
        onConfirm={handlePublishConfirm}
      />
      
      <UnpublishDialog
        open={showUnpublishDialog}
        onClose={() => setShowUnpublishDialog(false)}
        onConfirm={handleUnpublishConfirm}
      />
      <PublishedSaveSuccessDialog 
        open={showPublishedSaveDialog}
        onClose={() => setShowPublishedSaveDialog(false)}
        onConfirm={() => setShowPublishedSaveDialog(false)}
      />
      
      <AiFeedbackSuccessAlert 
        visible={showAiFeedbackSuccess} 
        onClose={() => setShowAiFeedbackSuccess(false)} 
      />

      <AiImportConflictDialog
        open={showAiConflictDialog}
        onClose={() => setShowAiConflictDialog(false)}
        onConfirm={handleConflictConfirm}
      />

      <AiSegmentSelectionDialog
        open={aiSegmentSelectionOpen}
        onClose={() => setAiSegmentSelectionOpen(false)}
        candidateSegments={candidateSegments}
        onConfirm={handleAiSelectionConfirm}
      />
      
      <AiFeedbackDialog
        open={aiFeedbackOpen}
        onClose={() => setAiFeedbackOpen(false)}
        onConfirm={() => {
          setAiFeedbackOpen(false);
          setShowAiFeedbackSuccess(true);
          handleFeedback();
        }}
      />

      <AiImportDialog
        open={showAiImportDialog}
        onClose={() => setShowAiImportDialog(false)}
        onConfirm={(selectedId) => {
          setShowAiImportDialog(false);
          const mocks = getMockSegments(selectedId);
          handleAiSelectionConfirm(mocks);
        }}
      />
      {/* Top Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Import AI Button */}
          <button 
            onClick={handleAiImportClick}
            className="bg-[#0099CC] text-white px-3 py-1 rounded shadow flex items-center gap-2 hover:bg-[#0088bb] transition-colors"
          >
            <Icon name="p3ab96d00" size={16} fill="white" />
            <span className="text-[15px] font-medium tracking-[0.46px]">新增 AI 分段</span>
          </button>
          
          {/* Info Icon */}
          <div 
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="p-1 text-[#006699] cursor-pointer">
              <Icon name="p19ecbc00" size={24} fill="#006699" />
            </div>

            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[298px] bg-white rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] p-2 z-50 border border-black/5">
                <p className="text-[#333] text-[14px] leading-[1.43] mb-1 font-normal">
                  AI 分段 (Beta) 說明
                </p>
                <ul className="list-disc pl-5 text-[#333] text-[14px] leading-[1.43] space-y-0 marker:text-[#333]">
                  <li>目前僅支援中、英文分段</li>
                  <li>AI 分段是根據字幕生成，若無字幕或尚未生成，將無法匯入</li>
                  <li>AI 生成內容僅供參考，可能含有語意誤差</li>
                  <li>AI 分段由 NTU COOL 團隊於校內機房運算生成，未使用雲端 AI 服務</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Unpublished/Published Status */}
        <div className="relative" ref={statusDropdownRef}>
          <button 
            onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
            className={`flex items-center gap-2 px-2 py-1 rounded transition-colors ${
              isPublished 
                ? "hover:bg-gray-50 text-[#008A00]" 
                : "bg-gray-100 hover:bg-gray-200 text-black/38"
            }`}
          >
            <Icon 
              name={isPublished ? "pdbf8c80" : "p3500b800"} 
              size={16} 
              fill={isPublished ? "#008A00" : "rgba(0,0,0,0.38)"} 
            />
            <span className="text-[15px] font-medium">
              {isPublished ? "已發佈" : "未發佈"}
            </span>
            <ChevronDown size={16} className={isPublished ? "text-[#008A00]" : "text-black/38"} />
          </button>

          {isStatusDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-[120px] bg-white rounded-[4px] shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)] py-1 z-50">
              {/* Option: Publish */}
              <button
                onClick={() => {
                  setIsStatusDropdownOpen(false);
                  if (!isPublished) handleSaveAndPublish();
                }}
                className="w-full flex items-center px-3 py-2 hover:bg-gray-50 text-left gap-2"
              >
                <div className="w-4 flex justify-center items-center">
                  {isPublished && <Check size={16} className="text-[#008A00]" />}
                </div>
                <span className={`text-[15px] ${isPublished ? "text-[#008A00]" : "text-[#333]"}`}>已發佈</span>
              </button>

              {/* Option: Unpublish */}
              <button
                onClick={() => {
                  setIsStatusDropdownOpen(false);
                  if (isPublished) setShowUnpublishDialog(true);
                }}
                className="w-full flex items-center px-3 py-2 hover:bg-gray-50 text-left gap-2"
              >
                <div className="w-4 flex justify-center items-center">
                   {!isPublished && <Check size={16} className="text-[#333]" />}
                </div>
                <span className={`text-[15px] ${!isPublished ? "text-[#333]" : "text-[#333]"}`}>未發佈</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="h-[1px] bg-black/12 w-full mb-4" />

      {/* Editor Headers */}
      <div className="flex gap-4 mb-4 text-[#333]/60 text-[14px]">
        <div className="w-[110px]">段落開始時間</div>
        <div className="flex-1">
          <span>段落標題</span>
        </div>
        <div className="w-6"></div> {/* Spacer for delete icon */}
      </div>

      {/* Segments List */}
      <div ref={listRef} className="flex-1 overflow-y-auto flex flex-col gap-4 min-h-0 mb-4">
        {segments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-[#333]/38 text-[14px] tracking-[0.17px]">
            目前尚無段落，請點選「新增段落」或「新增 AI 分段」
          </div>
        ) : (
          segments.map((segment) => {
            const isFirst = segment.id === firstSegId;
            const timeError = getTimeError(segment);
            const titleError = getTitleError(segment);

            return (
              <div key={segment.id} className="flex gap-4 items-start">
                {/* Time Input */}
                <div className="w-[110px]">
                  <div className={`flex items-center border rounded px-3 py-2 gap-1 ${
                    isFirst ? 'bg-black/5 border-black/12 cursor-not-allowed' :
                    timeError ? 'border-[#CC0000]' : 'border-black/23'
                  }`}>
                    <input
                      type="text"
                      value={segment.time}
                      readOnly={isFirst}
                      disabled={isFirst}
                      onChange={isFirst ? undefined : (e) => {
                        const raw = e.target.value;
                        const digits = raw.replace(/\D/g, '').slice(0, 6);
                        let formatted = "";
                        if (digits.length > 0) formatted += digits.slice(0, 2);
                        if (digits.length > 2) formatted += ":" + digits.slice(2, 4);
                        if (digits.length > 4) formatted += ":" + digits.slice(4, 6);
                        const newSegments = segments.map(s => s.id === segment.id ? { ...s, time: formatted, source: 'manual' as const } : s);
                        setSegments(newSegments);
                        setIsDirty(true);
                      }}
                      onBlur={isFirst ? undefined : (e) => handleTimeBlur(segment.id, e.target.value)}
                      onFocus={isFirst ? undefined : (e) => e.target.select()}
                      className={`w-full text-[16px] bg-transparent outline-none font-normal ${
                        isFirst ? 'text-[#333]/38 cursor-not-allowed' :
                        segment.time === "00:00:00" ? "text-[#333]/38" : "text-[#333]"
                      }`}
                    />
                    {isFirst && (
                      <div className="relative group/lock shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-black/30 cursor-default" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover/lock:block w-max max-w-[180px] bg-[#333] text-white text-[12px] rounded px-2 py-1 leading-[1.5] pointer-events-none z-20">
                          第一個段落必須從 00:00:00 開始
                        </div>
                      </div>
                    )}
                  </div>
                  {timeError && (
                    <div className="text-[#CC0000] text-[12px] pt-[3px] tracking-[0.4px] leading-[1.66]">
                      {timeError}
                    </div>
                  )}
                </div>

                {/* Title Input */}
                <div className="flex-1">
                  <div className={`relative border rounded px-3 py-2 ${titleError ? 'border-[#CC0000]' : 'border-black/23'}`}>
                    <input
                      type="text"
                      value={segment.title}
                      onChange={(e) => {
                        const newSegments = segments.map(s => s.id === segment.id ? { ...s, title: e.target.value, source: 'manual' as const } : s);
                        setSegments(newSegments);
                        setIsDirty(true);
                      }}
                      className={`w-full text-[16px] text-[#333] bg-transparent outline-none ${segment.source === 'ai' ? 'pr-12' : ''}`}
                      placeholder=" "
                    />
                    {segment.source === 'ai' && (
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 bg-[#E3F2FD] text-[#0099CC] text-[12px] px-2 py-0.5 rounded">
                        <Icon name="p3ab96d00" size={12} fill="#0099CC" />
                        AI
                      </span>
                    )}
                  </div>
                  {titleError && (
                    <div className="text-[#CC0000] text-[12px] px-[14px] pt-[3px] tracking-[0.4px] leading-[1.66]">
                      {titleError}
                    </div>
                  )}
                </div>

                {/* Delete Icon */}
                <button
                  onClick={() => handleDelete(segment.id)}
                  className="w-6 h-6 flex items-center justify-center text-black/38 hover:text-black/60 transition-colors mt-2"
                >
                  <Icon name="p25fbc800" size={20} fill="currentColor" />
                </button>
              </div>
            );
          }))}
      </div>

      <div className="h-[1px] bg-black/12 w-full mb-4" />

      {/* Bottom Actions Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Feedback area — fixed width to avoid layout shift */}
        <div className="flex items-center gap-2 min-w-[88px] min-h-[40px]">
          <div
            className={`flex items-center gap-2 transition-opacity duration-300 ${
              showFeedback ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
              {/* Thumb Up */}
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onMouseEnter={() => setHoverThumbUp(true)}
                  onMouseLeave={() => setHoverThumbUp(false)}
                  onClick={() => setAiFeedbackOpen(true)}
                >
                  <Icon name="p1772cd00" size={20} fill="#BDBDBD" />
                </button>
                {hoverThumbUp && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-white rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] z-10">
                    <div className="px-[8px] py-[4px]">
                      <p className="text-[#333] text-[16px] tracking-[0.15px] leading-[1.5] font-normal">AI 品質良好</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumb Down */}
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
                  onMouseEnter={() => setHoverThumbDown(true)}
                  onMouseLeave={() => setHoverThumbDown(false)}
                  onClick={() => setAiFeedbackOpen(true)}
                >
                  <Icon name="p2b6f400" size={20} fill="#BDBDBD" />
                </button>
                {hoverThumbDown && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-white rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] z-10">
                    <div className="px-[8px] py-[4px]">
                      <p className="text-[#333] text-[16px] tracking-[0.15px] leading-[1.5] font-normal">AI 品質不佳</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>

        {/* Add Paragraph Button */}
        <button 
          onClick={handleAdd}
          className="flex items-center gap-2 px-3 py-1 hover:bg-gray-50 rounded text-[#333]/60"
        >
          <Icon name="p19b65b00" size={18} fill="#333333" className="opacity-60" />
          <span className="text-[15px] font-medium">新增段落</span>
        </button>
      </div>

      {/* Save Buttons */}
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={handleCancel}
          className="px-4 py-1 border border-[#0099CC80] rounded text-[#0099CC] text-[15px] font-medium hover:bg-sky-50"
        >
          取消
        </button>
        {!isPublished && (
          <div className="relative group">
            <button
              className={`px-4 py-1 border border-[#0099CC80] rounded text-[#0099CC] text-[15px] font-medium hover:bg-sky-50 ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={hasError ? undefined : handleSaveAndPublish}
            >
              儲存並發佈
            </button>
            {hasError && (
              <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-max max-w-[220px] bg-[#333] text-white text-[12px] rounded px-2 py-1 leading-[1.5] pointer-events-none z-10">
                請填寫所有段落的時間和標題
              </div>
            )}
          </div>
        )}
        <div className="relative group">
          <button
            onClick={hasError ? undefined : handleSave}
            className={`px-4 py-1 bg-[#0099CC] rounded text-white text-[15px] font-medium shadow hover:bg-[#0088bb] ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            儲存
          </button>
          {hasError && (
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-max max-w-[220px] bg-[#333] text-white text-[12px] rounded px-2 py-1 leading-[1.5] pointer-events-none z-10">
              請填寫所有段落的時間和標題
            </div>
          )}
        </div>
      </div>
    </div>
  );
}