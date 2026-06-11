import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Icon } from "./Icon";
import { ChevronDown } from "lucide-react";

interface AiFeedbackDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ISSUE_TAGS = [
  "時間轉不準確",
  "分段過於頻繁",
  "遺漏部分段落",
  "標題與內容不符",
  "推薦類別不妥",
  "中英對內容不等",
  "LaTeX 語法",
];

export function AiFeedbackDialog({
  open,
  onClose,
  onConfirm,
}: AiFeedbackDialogProps) {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const isCommentTooLong = comment.length > 3000;

  const toggleSource = (source: string) => {
    if (selectedSources.includes(source)) {
      setSelectedSources(selectedSources.filter((s) => s !== source));
    } else {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const toggleIssue = (issue: string) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter((i) => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  const handleConfirm = () => {
    if (isCommentTooLong) return;
    // Logic to handle submission can go here (e.g. console.log or API call)
    console.log({ selectedSources, selectedIssues, rating, comment });
    onConfirm();
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[4px] shadow-xl w-[600px] max-h-[90vh] flex flex-col z-50 focus:outline-none">
          {/* Title */}
          <div className="px-6 py-4 border-b border-black/12">
            <DialogPrimitive.Title className="text-[20px] font-normal text-[#333] tracking-[0.25px] leading-[1.235]">
              AI 分段品質回饋
            </DialogPrimitive.Title>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
            
            {/* Rating */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-[#333] tracking-[0.17px] leading-[1.43]">
                您對 AI 分段的內容滿意嗎？
              </label>
              <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
                {[1, 2, 3, 4, 5].map((star) => {
                  const isActive = (hoverRating || rating) >= star;
                  return (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      className="p-1 -ml-1 focus:outline-none"
                    >
                      <Icon
                        name={isActive ? "p1a3b1300" : "p23c02df0"}
                        size={30}
                        fill={isActive ? "#FFB400" : "#BDBDBD"}
                        className={!isActive ? "opacity-40 text-black" : ""} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Source Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-[#333] tracking-[0.17px] leading-[1.43]">
                此回饋是基於哪個語種產生？(可複選)
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-[6px] rounded-[16px] border text-[14px] tracking-[0.17px] transition-colors ${
                    selectedSources.includes("中文") 
                      ? "bg-[#0099CC]/10 border-[#0099CC] text-[#0099CC]" 
                      : "bg-white border-black/12 text-[#333] hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSource("中文")}
                >
                  中文
                </button>
                <button
                  className={`px-4 py-[6px] rounded-[16px] border text-[14px] tracking-[0.17px] transition-colors ${
                    selectedSources.includes("英文") 
                      ? "bg-[#0099CC]/10 border-[#0099CC] text-[#0099CC]" 
                      : "bg-white border-black/12 text-[#333] hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSource("英文")}
                >
                  英文
                </button>
                <button
                  className={`px-4 py-[6px] rounded-[16px] border text-[14px] tracking-[0.17px] transition-colors ${
                    selectedSources.includes("中英夾雜") 
                      ? "bg-[#0099CC]/10 border-[#0099CC] text-[#0099CC]" 
                      : "bg-white border-black/12 text-[#333] hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSource("中英夾雜")}
                >
                  中英夾雜
                </button>
              </div>
            </div>

            {/* Issues Chips */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-[#333] tracking-[0.17px] leading-[1.43]">
                此次有遇到哪些 AI 問題？(可複選)
              </label>
              <div className="flex flex-wrap gap-2">
                {ISSUE_TAGS.map((tag) => {
                  const isSelected = selectedIssues.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleIssue(tag)}
                      className={`px-4 py-[6px] rounded-[16px] border text-[14px] tracking-[0.17px] transition-colors
                        ${isSelected 
                          ? "bg-[#0099CC]/10 border-[#0099CC] text-[#0099CC]" 
                          : "bg-white border-black/12 text-[#333] hover:bg-gray-50"
                        }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Comment Area */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-[#333] tracking-[0.17px] leading-[1.43]">
                補充建議
              </label>
              <div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={`w-full min-h-[80px] p-3 border rounded-[4px] text-[16px] text-[#333] focus:outline-none resize-none
                    ${isCommentTooLong 
                      ? "border-[#CC0000] focus:border-[#CC0000]" 
                      : "border-black/23 focus:border-[#0099CC]"
                    }`}
                  placeholder="例如：受選章節未準確標出主旨、遺漏本段落重點內容等 LaTeX 語法..."
                />
                {isCommentTooLong && (
                  <div className="text-[#CC0000] text-[12px] pt-[3px] tracking-[0.4px] leading-[1.66]">
                    超過字數上限 3000 字元
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-2 flex justify-end gap-2 border-t border-black/12">
            <button
              onClick={onClose}
              className="px-4 py-[6px] text-[#0099CC] font-medium text-[16px] tracking-[0.4px] hover:bg-[#0099CC]/10 rounded transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleConfirm}
              disabled={isCommentTooLong}
              className={`px-4 py-[6px] rounded-[4px] font-medium text-[16px] tracking-[0.4px] shadow transition-colors
                ${isCommentTooLong 
                  ? "bg-black/12 text-black/26 cursor-not-allowed shadow-none" 
                  : "bg-[#0099CC] text-white hover:bg-[#0088bb]"
                }`}
            >
              送出
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}