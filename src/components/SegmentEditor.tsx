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
  currentTime
}: { 
  onCancel?: () => void;
  segments: Segment[];
  setSegments: (segments: Segment[]) => void;
  currentTime?: number;
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

  // Calculate duplicate times
  // We count how many times each timestamp appears
  const timeCounts = segments.reduce((acc, segment) => {
    // Ignore default time
    if (segment.time === "00:00:00") return acc;
    acc[segment.time] = (acc[segment.time] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const hasDuplicateError = segments.some(s => s.time !== "00:00:00" && timeCounts[s.time] > 1);
  const hasTitleError = segments.some(s => s.title.length > 40);
  const hasDurationError = segments.some(s => parseTimeToSeconds(s.time) > TOTAL_DURATION_SECONDS);
  const hasError = hasTitleError || hasDuplicateError || hasDurationError;
  
  const [candidateSegments, setCandidateSegments] = useState<{time: string, title: string}[]>([]);
  const [hasImported, setHasImported] = useState(false);
  const [hasGivenFeedback, setHasGivenFeedback] = useState(false);

  const handleDelete = (id: number) => {
    setSegments(segments.filter((s) => s.id !== id));
    setIsDirty(true);
  };

  const handleAdd = () => {
    const newId = Math.max(...segments.map(s => s.id), 0) + 1;
    
    let timeStr = "00:00:00";
    if (currentTime !== undefined) {
        const h = Math.floor(currentTime / 3600);
        const m = Math.floor((currentTime % 3600) / 60);
        const s = Math.floor(currentTime % 60);
        timeStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    const newSegments = [...segments, { id: newId, time: timeStr, title: "", source: 'manual' }];
    newSegments.sort((a, b) => a.time.localeCompare(b.time));
    setSegments(newSegments);
    setIsDirty(true);
    
    // Scroll if added to the end
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
        { time: "00:00:15", title: "課程簡介與目標" },
        { time: "00:08:30", title: "電影聲音的歷史演變" },
        { time: "00:15:45", title: "聲音與畫面的互動關係" },
        { time: "00:24:20", title: "經典案例分析：教父" },
        { time: "00:32:10", title: "現場錄音的挑戰" },
        { time: "00:45:00", title: "後期配音與音效製作" },
        { time: "00:58:30", title: "配樂的情緒引導作用" },
        { time: "01:10:15", title: "數位時代的聲音設計" },
        { time: "01:22:40", title: "學生作品講評與討論" },
        { time: "01:30:00", title: "課程總結與下週預告" }
      ];
    } else if (id === "auto-english") {
      return [
        { time: "00:00:15", title: "Course Introduction and Goals" },
        { time: "00:08:30", title: "Historical Evolution of Film Sound" },
        { time: "00:15:45", title: "Interaction between Sound and Image" },
        { time: "00:24:20", title: "Case Study: The Godfather" },
        { time: "00:32:10", title: "Challenges of Location Recording" },
        { time: "00:45:00", title: "Post-production Dubbing and FX" },
        { time: "00:58:30", title: "Emotional Guidance of Scoring" },
        { time: "01:10:15", title: "Sound Design in the Digital Age" },
        { time: "01:22:40", title: "Student Work Review and Discussion" },
        { time: "01:30:00", title: "Summary and Next Week Preview" }
      ];
    } else if (id === "auto-bilingual") {
      return [
        { time: "00:00:15", title: "課程簡介與目標 Course Introduction and Goals" },
        { time: "00:08:30", title: "電影聲音的歷史演變 Historical Evolution of Film Sound" },
        { time: "00:15:45", title: "聲音與畫面的互動關係 Interaction between Sound and Image" },
        { time: "00:24:20", title: "經典案例分析：教父 Case Study: The Godfather" },
        { time: "00:32:10", title: "現場錄音的挑戰 Challenges of Location Recording" },
        { time: "00:45:00", title: "後期配音與音效製作 Post-production Dubbing and FX" },
        { time: "00:58:30", title: "配樂的情緒引導作用 Emotional Guidance of Scoring" },
        { time: "01:10:15", title: "數位時代的聲音設計 Sound Design in the Digital Age" },
        { time: "01:22:40", title: "學生作品講評與討論 Student Work Review and Discussion" },
        { time: "01:30:00", title: "課程總結與下週預告 Summary and Next Week Preview" }
      ];
    }
    return [];
  };

  const handleAiSelectionConfirm = (selectedSegments: {time: string, title: string}[]) => {
    setAiSegmentSelectionOpen(false);
    setHasImported(true);
    
    // Show import success alert
    setShowImportAlert(true);
    setTimeout(() => setShowImportAlert(false), 3000);
    
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
          setHasGivenFeedback(true);
          setShowAiFeedbackSuccess(true);
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
          const isDuplicateTime = segment.time !== "00:00:00" && timeCounts[segment.time] > 1;
          const isDurationError = parseTimeToSeconds(segment.time) > TOTAL_DURATION_SECONDS;
          
          return (
            <div key={segment.id} className="flex gap-4 items-start">
              {/* Time Input */}
              <div className="w-[110px]">
                <div className={`border rounded px-3 py-2 ${isDuplicateTime || isDurationError ? 'border-[#CC0000]' : 'border-black/23'}`}>
                  <input
                    type="text"
                    value={segment.time}
                    onChange={(e) => {
                      const raw = e.target.value;
                      const digits = raw.replace(/\D/g, '').slice(0, 6);
                      
                      let formatted = "";
                      if (digits.length > 0) formatted += digits.slice(0, 2);
                      if (digits.length > 2) formatted += ":" + digits.slice(2, 4);
                      if (digits.length > 4) formatted += ":" + digits.slice(4, 6);
                      
                      const newSegments = segments.map(s => s.id === segment.id ? { ...s, time: formatted, source: 'manual' } : s);
                      setSegments(newSegments);
                      setIsDirty(true);
                    }}
                    onBlur={(e) => handleTimeBlur(segment.id, e.target.value)}
                    onFocus={(e) => e.target.select()}
                    className={`w-full text-[16px] bg-transparent outline-none font-normal ${segment.time === "00:00:00" ? "text-[#333]/38" : "text-[#333]"}`}
                  />
                </div>
                {isDuplicateTime && (
                  <div className="text-[#CC0000] text-[12px] px-0 pt-[3px] tracking-[0.4px] leading-[1.66]">
                    時間重複
                  </div>
                )}
                {isDurationError && !isDuplicateTime && (
                  <div className="text-[#CC0000] text-[12px] px-0 pt-[3px] tracking-[0.4px] leading-[1.66]">
                    超過影片長度
                  </div>
                )}
              </div>

              {/* Title Input */}
              <div className="flex-1">
                <div className={`relative border rounded px-3 py-2 ${segment.title.length > 40 ? 'border-[#CC0000]' : 'border-black/23'}`}>
                  <input
                    type="text"
                    value={segment.title}
                    onChange={(e) => {
                      const newSegments = segments.map(s => s.id === segment.id ? { ...s, title: e.target.value, source: 'manual' } : s);
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
                {segment.title.length > 40 && (
                  <div className="text-[#CC0000] text-[12px] px-[14px] pt-[3px] tracking-[0.4px] leading-[1.66]">
                    字數上限為 40 個字
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
        {hasImported && !hasGivenFeedback ? (
          <div className="flex items-center gap-2">
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
                     <p className="text-[#333] text-[16px] tracking-[0.15px] leading-[1.5] font-normal">
                       AI 品質良好
                     </p>
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
                     <p className="text-[#333] text-[16px] tracking-[0.15px] leading-[1.5] font-normal">
                       AI 品質不佳
                     </p>
                   </div>
                 </div>
               )}
             </div>
          </div>
        ) : (
          <div />
        )}

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
          <button 
            className={`px-4 py-1 border border-[#0099CC80] rounded text-[#0099CC] text-[15px] font-medium hover:bg-sky-50 ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={hasError ? undefined : handleSaveAndPublish}
          >
            儲存並發佈
          </button>
        )}
        <button 
          onClick={hasError ? undefined : handleSave}
          className={`px-4 py-1 bg-[#0099CC] rounded text-white text-[15px] font-medium shadow hover:bg-[#0088bb] ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          儲存
        </button>
      </div>
    </div>
  );
}