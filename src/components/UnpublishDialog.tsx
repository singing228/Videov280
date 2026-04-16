import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

interface UnpublishDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function UnpublishDialog({ open, onClose, onConfirm }: UnpublishDialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/30 z-50" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white rounded-[4px] shadow-[0px_9px_46px_8px_rgba(0,0,0,0.12),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_11px_15px_-7px_rgba(0,0,0,0.2)] w-[444px] h-[280px] flex flex-col focus:outline-none">
          <DialogPrimitive.Title className="sr-only">確定取消發佈？</DialogPrimitive.Title>
          
          <div className="flex flex-col flex-1 min-h-0 w-full">
            {/* Title */}
            <div className="w-full relative shrink-0">
              <div className="flex flex-col items-start px-[24px] py-[16px] relative w-full">
                <p className="font-['Roboto',sans-serif] font-normal leading-[1.235] text-[#333] text-[20px] tracking-[0.25px] w-full">
                  確定取消發佈？
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-h-0 w-full relative border-t border-b border-black/12">
              <div className="flex flex-col items-start px-[24px] py-[16px] relative size-full">
                <div className="flex-1 min-h-0 w-full relative rounded-[4px]">
                  <div className="flex flex-col items-start p-[4px] relative size-full">
                    <div className="flex flex-col font-['Roboto',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] w-full">
                      <p className="leading-[1.5]">取消發佈後，學生將無法看到影片段落，確定要取消嗎？</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="flex gap-[8px] items-center justify-end p-[8px] relative w-full">
                  {/* Cancel Button */}
                  <button 
                    onClick={onClose}
                    className="flex flex-col items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shrink-0 hover:bg-sky-50 transition-colors"
                  >
                    <div className="flex gap-[8px] items-center justify-center relative shrink-0">
                      <p className="font-['Roboto',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px]">
                        取消
                      </p>
                    </div>
                  </button>

                  {/* Confirm Button */}
                  <button 
                    onClick={onConfirm}
                    className="bg-[#09c] flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 hover:bg-[#0088b8] transition-colors"
                  >
                    <div className="flex gap-[8px] items-center justify-center relative shrink-0">
                      <p className="font-['Roboto',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.4px]">
                        確定
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}