import React from "react";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  onBack?: () => void;
}

export function Header({ onBack }: HeaderProps) {
  return (
    <div className="bg-white w-full border-b border-black/12">
      <div className="px-4 py-2">
        {/* Top Row: Back Button and Title */}
        <div className="flex items-center gap-4 mb-2">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center justify-center p-1 border border-[#0099CC80] rounded text-[#0099CC] hover:bg-sky-50 transition-colors w-10 h-8"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Title */}
          <div className="text-[#333] text-[16px]">
            Week 1: 電影的聲音
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center relative">
          <div className="flex items-center justify-center px-4 py-3 cursor-pointer text-[#333] text-[16px]">
            摘要管理
          </div>
          <div className="flex items-center justify-center px-4 py-3 cursor-pointer text-[#09c] text-[16px] relative">
             段落管理
             {/* Active Tab Indicator */}
             <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0099CC]" />
          </div>
        </div>
      </div>
    </div>
  );
}
