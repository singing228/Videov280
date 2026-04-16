import React from "react";
import { Icon } from "./Icon";

interface SaveSuccessAlertProps {
  onClose: () => void;
  visible: boolean;
}

export function SaveSuccessAlert({ onClose, visible }: SaveSuccessAlertProps) {
  if (!visible) return null;

  return (
    <div 
      className="fixed top-[96px] left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#edf7ed] px-4 py-[6px] rounded-[4px] shadow-sm"
      style={{ minWidth: "300px", maxWidth: "90%" }}
    >
      <div className="flex items-start py-[7px] pr-[12px]">
        <Icon name="p3b975200" size={22} fill="#008A00" />
      </div>
      <div className="py-[8px]">
        <p className="font-['Roboto'] font-medium text-[16px] leading-[1.5] text-[#1e4620] tracking-[0.15px]">
          影片分段儲存成功。
        </p>
      </div>
      <div className="ml-auto pl-[16px] pt-[4px] pb-0 flex items-start">
        <button onClick={onClose} className="p-[5px] rounded-full hover:bg-[rgba(0,0,0,0.04)]">
          <Icon name="p33817400" size={20} fill="#1E4620" />
        </button>
      </div>
    </div>
  );
}
