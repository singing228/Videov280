import React, { useState, useRef, useEffect } from "react";
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
  source?: 'manual' | 'ai' | 'system';
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
  const [touchedTitleIds, setTouchedTitleIds] = useState<Set<number>>(new Set());

  const listRef = useRef<HTMLDivElement>(null);

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
  const hasTitleError = segments.some(s => s.title.length > 50);
  const hasEmptyTitleError = segments.some(s => s.title.trim() === "");
  const hasDurationError = segments.some(s => parseTimeToSeconds(s.time) > TOTAL_DURATION_SECONDS);
  const hasError = hasTitleError || hasEmptyTitleError || hasDuplicateError || hasDurationError;

  // Check if there are any AI-generated segments
  const hasAiSegments = segments.some(s => s.source === 'ai');

  const [candidateSegments, setCandidateSegments] = useState<{time: string, title: string}[]>([]);
  const [hasImported, setHasImported] = useState(false);
  const [hasGivenFeedback, setHasGivenFeedback] = useState(false);

  const handleDelete = (id: number) => {
    // Prevent deleting system segment
    const segmentToDelete = segments.find(s => s.id === id);
    if (segmentToDelete?.source === 'system') return;

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

    const newSegments = [...segments, { id: newId, time: timeStr, title: "", source: 'manual' as const }];
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
        { time: "00:00:02", title: "課程簡介與目標" },
        { time: "00:00:08", title: "電影聲音的歷史演變" },
        { time: "00:00:14", title: "聲音與畫面的互動關係" },
        { time: "00:00:20", title: "經典案例分析：教父" },
        { time: "00:00:26", title: "現場錄音的挑戰" },
        { time: "00:00:32", title: "後期配音與音效製作" },
        { time: "00:00:38", title: "配樂的情緒引導作用" },
        { time: "00:00:44", title: "數位時代的聲音設計" },
        { time: "00:00:48", title: "學生作品講評與討論" },
        { time: "00:00:51", title: "課程總結與下週預告" }
      ];
    } else if (id === "auto-english") {
      return [
        { time: "00:00:02", title: "Course Introduction and Goals" },
        { time: "00:00:08", title: "Historical Evolution of Film Sound" },
        { time: "00:00:14", title: "Interaction between Sound and Image" },
        { time: "00:00:20", title: "Case Study: The Godfather" },
        { time: "00:00:26", title: "Challenges of Location Recording" },
        { time: "00:00:32", title: "Post-production Dubbing and FX" },
        { time: "00:00:38", title: "Emotional Guidance of Scoring" },
        { time: "00:00:44", title: "Sound Design in the Digital Age" },
        { time: "00:00:48", title: "Student Work Review and Discussion" },
        { time: "00:00:51", title: "Summary and Next Week Preview" }
      ];
    } else if (id === "auto-bilingual") {
      return [
        { time: "00:00:02", title: "課程簡介與目標 Course Introduction and Goals" },
        { time: "00:00:08", title: "電影聲音的歷史演變 Historical Evolution of Film Sound" },
        { time: "00:00:14", title: "聲音與畫面的互動關係 Interaction between Sound and Image" },
        { time: "00:00:20", title: "經典案例分析：教父 Case Study: The Godfather" },
        { time: "00:00:26", title: "現場錄音的挑戰 Challenges of Location Recording" },
        { time: "00:00:32", title: "後期配音與音效製作 Post-production Dubbing and FX" },
        { time: "00:00:38", title: "配樂的情緒引導作用 Emotional Guidance of Scoring" },
        { time: "00:00:44", title: "數位時代的聲音設計 Sound Design in the Digital Age" },
        { time: "00:00:48", title: "學生作品講評與討論 Student Work Review and Discussion" },
        { time: "00:00:51", title: "課程總結與下週預告 Summary and Next Week Preview" }
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

    // Keep system and manual segments
    const systemSegments = segments.filter(s => s.source === 'system');
    const manualSegments = segments.filter(s => s.source === 'manual' && (s.title.trim() !== "" || s.time !== "00:00:00"));
    const nextIdStart = Math.max(...segments.map(s => s.id), 0) + 1;

    const newSegmentsToAdd = selectedSegments.map((s, i) => ({
      id: nextIdStart + i,
      time: s.time,
      title: s.title,
      source: 'ai' as const
    }));

    // Always keep system segments, add manual + new AI segments
    const combined = [...systemSegments, ...manualSegments, ...newSegmentsToAdd];
    // Sort by time
    combined.sort((a, b) => {
       // Simple string comparison for HH:MM:SS works
       return a.time.localeCompare(b.time);
    });
    setSegments(combined);
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
    // Check if there are any existing segments (manual or AI, excluding empty system segment)
    const hasExistingSegments = segments.some(s =>
      s.source !== 'system' && (s.title.trim() !== "" || s.time !== "00:00:00")
    ) || segments.some(s => s.source === 'system' && s.title.trim() !== "");

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
        <div className="flex items-center gap-3">
          {/* Add AI Segment Button */}
          <button
            onClick={handleAiImportClick}
            className="bg-[#0099CC] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#0088bb] transition-colors rounded shadow"
          >
            <Icon name="p3ab96d00" size={16} fill="white" />
            <span className="text-[15px] font-medium tracking-[0.46px]">新增 AI 分段</span>
          </button>

          {/* Add Segment Button */}
          <button
            onClick={handleAdd}
            className="border border-[#0099CC] text-[#0099CC] px-4 py-2 hover:bg-[#0099CC]/8 transition-colors rounded"
          >
            <span className="text-[15px] font-medium tracking-[0.46px]">手動新增</span>
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

        {/* Published Status Chip */}
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[13px] font-medium ${
          isPublished
            ? "bg-[#E8F5E9] text-[#2E7D32]"
            : "bg-[#F5F5F5] text-[#757575]"
        }`}>
          {isPublished ? "已發佈" : "未發佈"}
        </div>
      </div>

      <div className="h-[1px] bg-black/12 w-full mb-4" />

      {/* Editor Headers */}
      <div className="flex gap-4 mb-4 text-[#333]/60 text-[14px]">
        <div className="w-[110px]">分段開始時間</div>
        <div className="flex-1">
          <span>分段標題</span>
        </div>
        <div className="w-6"></div> {/* Spacer for delete icon */}
      </div>

      {/* Segments List */}
      <div ref={listRef} className="flex-1 overflow-y-auto flex flex-col gap-4 min-h-0 mb-4">
        {segments.map((segment) => {
          const isDuplicateTime = segment.time !== "00:00:00" && timeCounts[segment.time] > 1;
          const isDurationError = parseTimeToSeconds(segment.time) > TOTAL_DURATION_SECONDS;
          const isSystemSegment = segment.source === 'system';

          return (
            <React.Fragment key={segment.id}>
            <div className="flex gap-4 items-start">
              {/* Time Input */}
              <div className="w-[110px]">
                <div className={`border rounded px-3 py-2 ${isDuplicateTime || isDurationError ? 'border-[#CC0000]' : 'border-black/23'} ${isSystemSegment ? 'bg-gray-50' : ''}`}>
                  <input
                    type="text"
                    value={segment.time}
                    disabled={isSystemSegment}
                    onChange={(e) => {
                      if (isSystemSegment) return;
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
                    onBlur={(e) => !isSystemSegment && handleTimeBlur(segment.id, e.target.value)}
                    onFocus={(e) => !isSystemSegment && e.target.select()}
                    className={`w-full text-[16px] bg-transparent outline-none font-normal ${isSystemSegment ? "text-[#333]/38 cursor-not-allowed" : segment.time === "00:00:00" ? "text-[#333]/38" : "text-[#333]"}`}
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
                {(() => {
                  const isEmptyTitle = segment.title.trim() === "";
                  const showEmptyError = isEmptyTitle && touchedTitleIds.has(segment.id);
                  return (
                    <>
                      <div className={`relative border rounded px-3 py-2 ${segment.title.length > 50 || showEmptyError ? 'border-[#CC0000]' : 'border-black/23'}`}>
                        <input
                          type="text"
                          value={segment.title}
                          onChange={(e) => {
                            const newSegments = segments.map(s =>
                              s.id === segment.id
                                ? { ...s, title: e.target.value, source: isSystemSegment ? 'system' as const : 'manual' as const }
                                : s
                            );
                            setSegments(newSegments);
                            setIsDirty(true);
                          }}
                          className={`w-full text-[16px] text-[#333] bg-transparent outline-none ${segment.source === 'ai' ? 'pr-10' : ''}`}
                          style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
                          title={segment.title}
                          onFocus={e => e.currentTarget.style.textOverflow = 'clip'}
                          onBlur={e => {
                            e.currentTarget.style.textOverflow = 'ellipsis';
                            setTouchedTitleIds(prev => new Set(prev).add(segment.id));
                          }}
                          placeholder={isSystemSegment ? "請輸入影片開頭" : " "}
                        />
                        {segment.source === 'ai' && (
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center bg-[#E3F2FD] text-[#0099CC] text-[12px] px-2 py-0.5 rounded font-medium">
                            AI
                          </span>
                        )}
                      </div>
                      {segment.title.length > 50 ? (
                        <div className="text-[#CC0000] text-[12px] px-[14px] pt-[3px] tracking-[0.4px] leading-[1.66]">
                          字數上限為 50 個字
                        </div>
                      ) : showEmptyError && (
                        <div className="text-[#CC0000] text-[12px] px-[14px] pt-[3px] tracking-[0.4px] leading-[1.66]">
                          請輸入標題
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Delete Icon - Hidden for system segment */}
              {!isSystemSegment ? (
                <button
                  onClick={() => handleDelete(segment.id)}
                  className="w-6 h-6 flex items-center justify-center text-black/38 hover:text-black/60 transition-colors mt-2"
                >
                  <Icon name="p25fbc800" size={20} fill="currentColor" />
                </button>
              ) : (
                <div className="w-6 h-6 mt-2" />
              )}
            </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="h-[1px] bg-black/12 w-full mb-4" />

      {/* Save Buttons */}
      <div className="flex items-center justify-between gap-4">
        {/* Left Side - AI Feedback Button (only after import) */}
        {hasImported && !hasGivenFeedback ? (
          <button
            onClick={() => setAiFeedbackOpen(true)}
            className="px-2 py-1 text-[#0099CC] text-[13px] font-medium rounded hover:bg-sky-50 transition-colors"
          >
            提供 AI 分段回饋
          </button>
        ) : (
          <div />
        )}

        {/* Right Side - Save Buttons */}
        <div className="flex items-center gap-4">
          {!isPublished ? (
            <>
              <button
                className={`px-4 py-1 border border-[#0099CC80] rounded text-[#0099CC] text-[15px] font-medium hover:bg-sky-50 ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={hasError ? undefined : handleSave}
              >
                儲存
              </button>
              <button
                className={`px-4 py-1 bg-[#0099CC] rounded text-white text-[15px] font-medium shadow hover:bg-[#0088bb] ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={hasError ? undefined : handleSaveAndPublish}
              >
                儲存並發佈
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowUnpublishDialog(true)}
                className="px-4 py-1 border border-[#CC0000] text-[#CC0000] text-[15px] font-medium rounded hover:bg-red-50 transition-colors"
              >
                取消發佈
              </button>
              <button
                onClick={hasError ? undefined : handleSave}
                className={`px-4 py-1 bg-[#0099CC] rounded text-white text-[15px] font-medium shadow hover:bg-[#0088bb] ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                儲存
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}