import React, { useState } from "react";
import { Icon } from "./Icon";

interface AiImportDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (selectedId: string) => void;
}

export function AiImportDialog({ open, onClose, onConfirm }: AiImportDialogProps) {
  const [selected, setSelected] = useState("auto-original");

  if (!open) return null;

  const handleConfirm = () => {
    onConfirm(selected);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Dialog Paper */}
      <div className="bg-white rounded-[4px] shadow-xl w-[600px] flex flex-col relative z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Title */}
        <div className="px-[24px] py-[16px]">
          <h2 className="text-[20px] text-[#333] font-normal leading-[1.235] tracking-[0.25px]">
            新增 AI 分段
          </h2>
        </div>

        {/* Content */}
        <div className="px-[24px] py-[16px] border-t border-b border-black/12 flex flex-col gap-[8px]">
          <p className="text-[16px] text-[#333] mb-2">
            請選擇一個字幕檔，匯入 AI 依該字幕生成的分段：
          </p>

          <div className="flex flex-col w-full min-h-[448px]">

            {/* Group Header */}
            <div className="py-[16px] pl-[16px] border-b border-black/12">
              <span className="text-[16px] font-bold text-[#333]">語音辨識自動生成字幕</span>
            </div>

            {/* Option 1: Auto Original */}
            <div
              className="flex items-center h-[56px] border-b border-black/12 cursor-pointer hover:bg-gray-50"
              onClick={() => setSelected("auto-original")}
            >
              <div className="p-[9px]">
                <Icon
                  name={selected === "auto-original" ? "p4501f00" : "p26f9ce00"}
                  size={24}
                  fill={selected === "auto-original" ? "#0099CC" : "#333333"}
                  className={selected !== "auto-original" ? "opacity-60" : ""}
                />
              </div>
              <div className="flex flex-col pl-[16px]">
                <span className="text-[16px] text-[#333]">影片原文</span>
                <span className="text-[12px] text-[#333]/60 leading-[1.66] tracking-[0.4px]">目前只支援中文</span>
              </div>
            </div>

            {/* Option 2: English */}
            <div
              className="flex items-center h-[56px] border-b border-black/12 cursor-pointer hover:bg-gray-50"
              onClick={() => setSelected("auto-english")}
            >
              <div className="p-[9px]">
                <Icon
                  name={selected === "auto-english" ? "p4501f00" : "p26f9ce00"}
                  size={24}
                  fill={selected === "auto-english" ? "#0099CC" : "#333333"}
                  className={selected !== "auto-english" ? "opacity-60" : ""}
                />
              </div>
              <div className="pl-[16px]">
                <span className="text-[16px] text-[#333]">英文</span>
              </div>
            </div>

            {/* Option 3: Bilingual */}
            <div
              className="flex items-center h-[56px] cursor-pointer hover:bg-gray-50"
              onClick={() => setSelected("auto-bilingual")}
            >
              <div className="p-[9px]">
                <Icon
                  name={selected === "auto-bilingual" ? "p4501f00" : "p26f9ce00"}
                  size={24}
                  fill={selected === "auto-bilingual" ? "#0099CC" : "#333333"}
                  className={selected !== "auto-bilingual" ? "opacity-60" : ""}
                />
              </div>
              <div className="pl-[16px]">
                <span className="text-[16px] text-[#333]">中英雙語</span>
              </div>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="p-[8px] flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="px-4 py-1.5 text-[#0099CC] text-[16px] font-medium rounded hover:bg-sky-50"
          >
            取消
          </button>
          <button 
            onClick={handleConfirm}
            className="px-4 py-1.5 bg-[#0099CC] text-white text-[16px] font-medium rounded shadow hover:bg-[#0088bb]"
          >
            確定
          </button>
        </div>

      </div>
    </div>
  );
}