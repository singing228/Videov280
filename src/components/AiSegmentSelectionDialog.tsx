import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, Minus } from "lucide-react";

interface AiSegment {
  time: string;
  title: string;
}

interface AiSegmentSelectionDialogProps {
  open: boolean;
  onClose: () => void;
  candidateSegments: AiSegment[];
  onConfirm: (selectedSegments: AiSegment[]) => void;
}

export function AiSegmentSelectionDialog({
  open,
  onClose,
  candidateSegments,
  onConfirm,
}: AiSegmentSelectionDialogProps) {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  useEffect(() => {
    if (open) {
      // Default select all? Or none? 
      // Typically "Preview" implies you might want all, but user wants to choose.
      // Let's select all by default as a convenience.
      setSelectedIndices(candidateSegments.map((_, i) => i));
    }
  }, [open, candidateSegments]);

  const toggleSelectAll = () => {
    if (selectedIndices.length === candidateSegments.length) {
      setSelectedIndices([]);
    } else {
      setSelectedIndices(candidateSegments.map((_, i) => i));
    }
  };

  const toggleSelect = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleConfirm = () => {
    const selected = candidateSegments.filter((_, i) => selectedIndices.includes(i));
    onConfirm(selected);
  };

  const allSelected = candidateSegments.length > 0 && selectedIndices.length === candidateSegments.length;
  const isIndeterminate = selectedIndices.length > 0 && selectedIndices.length < candidateSegments.length;

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[4px] shadow-lg w-[560px] max-h-[80vh] flex flex-col z-50 focus:outline-none">
          {/* Header */}
          <div className="px-6 py-4 border-b border-black/12">
            <Dialog.Title className="text-[20px] font-normal text-[#333] tracking-[0.25px] mb-2">
              AI 分段結果預覽
            </Dialog.Title>
            <Dialog.Description className="text-[14px] text-[#666] leading-[1.5]">
              您已有手動編輯的分段內容。為避免覆蓋您的心血，請從下方清單勾選您希望加入的段落。匯入後，系統將自動依時間順序重新排列所有分段。
            </Dialog.Description>
          </div>

          {/* Table Header with Select All */}
          <div className="flex items-center px-0 h-14 border-b border-black/12 shrink-0">
            <div 
              className="w-14 h-full flex items-center justify-center cursor-pointer hover:bg-black/5"
              onClick={toggleSelectAll}
            >
              <div className="w-6 h-6 rounded-sm border-2 border-[#757575] flex items-center justify-center transition-colors">
                {allSelected ? (
                  <div className="bg-[#0099CC] border-[#0099CC] w-full h-full flex items-center justify-center text-white">
                    <Check size={16} strokeWidth={3} />
                  </div>
                ) : isIndeterminate ? (
                   <div className="bg-[#0099CC] border-[#0099CC] w-full h-full flex items-center justify-center text-white">
                    <Minus size={16} strokeWidth={3} />
                  </div>
                ) : null}
                {/* Note: The above logic for border/bg replacement is slightly off for styling. 
                    Let's use a cleaner customized checkbox style. */}
              </div>
            </div>
            <div className="flex-1 pl-4 text-[16px] font-bold text-[#333] tracking-[0.15px]">
              全選
            </div>
          </div>

          {/* List */}
          <div className="overflow-y-auto flex-1 p-0">
            {candidateSegments.map((segment, index) => {
              const isSelected = selectedIndices.includes(index);
              return (
                <div 
                  key={index} 
                  className="flex items-center h-14 border-b border-black/12 hover:bg-gray-50 transition-colors"
                >
                  <div 
                    className="w-14 h-full flex items-center justify-center cursor-pointer shrink-0"
                    onClick={() => toggleSelect(index)}
                  >
                     <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-[#0099CC] bg-[#0099CC]' : 'border-[#757575]'}`}>
                        {isSelected && <Check size={16} color="white" strokeWidth={3} />}
                     </div>
                  </div>
                  <div className="flex items-center gap-4 px-4 flex-1 min-w-0">
                    <span className="text-[16px] text-[#333] w-16 shrink-0 tracking-[0.15px] tabular-nums">
                      {segment.time}
                    </span>
                    <span className="text-[16px] text-[#333] truncate tracking-[0.15px]" title={segment.title}>
                      {segment.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-2 flex justify-end gap-2 border-t border-black/12">
            <button
              onClick={onClose}
              className="px-3 py-2 text-[#0099CC] font-medium text-[15px] hover:bg-[#0099CC]/10 rounded transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-[#0099CC] text-white font-medium text-[15px] shadow rounded hover:bg-[#0088bb] transition-colors"
            >
              確定
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
