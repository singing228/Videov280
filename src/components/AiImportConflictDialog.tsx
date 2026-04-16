import React from "react";

interface AiImportConflictDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function AiImportConflictDialog({ open, onClose, onConfirm }: AiImportConflictDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Dialog Paper */}
      <div className="bg-white rounded-[4px] shadow-xl w-[400px] flex flex-col relative z-50 p-6">
        
        {/* Title */}
        <h2 className="text-[20px] font-medium text-[#333] mb-4">
          新增 AI 分段至現有內容
        </h2>

        {/* Content */}
        <p className="text-[16px] text-[#333] leading-[1.5] mb-8">
          新的 AI 分段會覆蓋舊的 AI 分段，但不會覆蓋手動編輯過的分段內容。匯入後將自動依時間排序，建議您稍後檢查順序是否符合需求。
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="px-4 py-1.5 text-[#0099CC] text-[16px] font-medium rounded hover:bg-sky-50 transition-colors"
          >
            取消
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-1.5 bg-[#0099CC] text-white text-[16px] font-medium rounded shadow hover:bg-[#0088bb] transition-colors"
          >
            確定
          </button>
        </div>
      </div>
    </div>
  );
}