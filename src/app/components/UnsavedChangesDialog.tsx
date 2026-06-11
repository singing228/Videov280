import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface UnsavedChangesDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function UnsavedChangesDialog({
  open,
  onClose,
  onConfirm,
}: UnsavedChangesDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[4px] shadow-[0px_9px_46px_8px_rgba(0,0,0,0.12),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_11px_15px_-7px_rgba(0,0,0,0.2)] w-[444px] h-[280px] flex flex-col z-50 focus:outline-none overflow-hidden">
          {/* Title */}
          <div className="px-6 py-4">
            <Dialog.Title className="text-[20px] font-normal text-[#333] tracking-[0.25px] leading-[1.235]">
              確定要離開嗎？
            </Dialog.Title>
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-4 border-t border-b border-black/12">
            <Dialog.Description className="text-[16px] text-black tracking-[0.15px] leading-[1.5]">
              離開此頁將遺失尚未儲存的編輯內容，是否確認離開？
            </Dialog.Description>
          </div>

          {/* Actions */}
          <div className="p-2 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-2 py-[6px] text-[#0099CC] font-medium text-[16px] tracking-[0.4px] hover:bg-[#0099CC]/10 rounded transition-colors"
            >
              取消
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-[6px] bg-[#CC0000] text-white font-medium text-[16px] tracking-[0.4px] shadow rounded-[4px] hover:bg-[#aa0000] transition-colors"
            >
              確定離開
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
