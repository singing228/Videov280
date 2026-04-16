import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Icon } from "./Icon";

interface PublishSuccessDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function PublishSuccessDialog({
  open,
  onClose,
  onConfirm,
}: PublishSuccessDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[4px] shadow-[0px_9px_46px_8px_rgba(0,0,0,0.12),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_11px_15px_-7px_rgba(0,0,0,0.2)] w-[444px] h-[280px] flex flex-col z-50 focus:outline-none overflow-hidden">
          {/* Title */}
          <div className="px-6 py-4">
            <Dialog.Title className="text-[20px] font-normal text-[#333] tracking-[0.25px] leading-[1.235]">
              影片段落發布成功
            </Dialog.Title>
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-4 border-t border-b border-black/12 flex items-start gap-2">
            <div className="shrink-0 pt-[2px]">
              <Icon name="p14672280" size={24} fill="#008A00" />
            </div>
            <Dialog.Description className="text-[16px] text-black tracking-[0.15px] leading-[1.5]">
              影片段落已成功發布！學生現在可以在影片播放頁查看最新內容。
            </Dialog.Description>
          </div>

          {/* Actions */}
          <div className="p-2 flex justify-end gap-2">
            <button
              onClick={onConfirm}
              className="px-4 py-[6px] bg-[#0099CC] text-white font-medium text-[16px] tracking-[0.4px] shadow rounded-[4px] hover:bg-[#0088bb] transition-colors"
            >
              確定
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
