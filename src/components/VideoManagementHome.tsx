import React, { useState } from "react";
import { Icon } from "./Icon";
import imgImage from "figma:asset/0b94836757e4c114fdc9784bbc7c6fff97d85cc4.png";
import imgImage2 from "figma:asset/bee1a7d0d18e36a7da1beb866ef0a2403f464d45.png";
import imgThumbnail from "figma:asset/0bbb01f3ab78722bf54745c80c9632e03a783864.png";

function TooltipIcon({ iconName, tooltipText, onClick }: { iconName: string; tooltipText: string; onClick?: () => void }) {
  const [show, setShow] = useState(false);
  
  return (
    <div 
      className="relative w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <Icon name={iconName} size={18} fill="black" className="opacity-56" />
      {show && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-[8px] py-[4px] bg-white rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] z-50 whitespace-nowrap border border-black/5">
          <span className="text-[12px] text-[#333] tracking-[0.4px] block leading-[1.66]">
            {tooltipText}
          </span>
        </div>
      )}
    </div>
  );
}

export function VideoManagementHome({ onNavigateToEditor, onNavigateToPlayer }: { onNavigateToEditor?: () => void; onNavigateToPlayer?: () => void }) {
  return (
    <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-6">
      {/* Header Tabs & New Button */}
      <div className="flex justify-between items-center border-b border-black/12 mb-6">
        <div className="flex">
          <button className="px-4 py-3 text-[#0999CC] text-[16px] font-medium border-b-2 border-[#0999CC]">
            我的影片
          </button>
          <button className="px-4 py-3 text-[#333] text-[16px] hover:bg-black/5 transition-colors">
            統計數據
          </button>
          <button className="px-4 py-3 text-[#333] text-[16px] hover:bg-black/5 transition-colors">
            錄播影片
          </button>
        </div>
        <button className="flex items-center gap-2 bg-[#0099CC] text-white px-4 py-2 rounded shadow hover:bg-[#0088bb] transition-colors">
          <Icon name="p21cef280" size={20} fill="white" />
          <span className="font-medium text-[16px]">新增影片</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-between items-center mb-6">
        <input 
          type="text" 
          placeholder="搜尋影片" 
          className="w-[428px] h-[40px] px-3 border border-black/23 rounded-[4px] bg-transparent outline-none focus:border-[#0099CC] text-[16px]"
        />
        <div className="flex gap-2">
          <button className="px-4 py-1.5 border border-[#0099CC80] text-[#0099CC] rounded hover:bg-sky-50 transition-colors font-medium">
            匯出留言
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 border border-[#0099CC80] text-[#0099CC] rounded hover:bg-sky-50 transition-colors font-medium">
            <Icon name="p21cef280" size={20} fill="#0099CC" />
            <span>新增資料夾</span>
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="flex items-center h-[56px] border-b border-black/12 px-4 text-[#333]">
        <div className="w-[646px] flex items-center gap-4">
          <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
             <Icon name="p18b66300" size={20} fill="black" className="opacity-56" />
          </div>
          <span className="font-bold text-[16px]">影片</span>
        </div>
        <div className="w-[100px] text-center font-bold text-[16px]">處理狀態</div>
        <div className="w-[100px] text-center font-bold text-[16px]">留言數</div>
        <div className="w-[164px] font-bold text-[16px]">最新留言時間</div>
        <div className="w-[164px] font-bold text-[16px]">建立時間</div>
        <div className="w-[112px] font-bold text-[16px]">影片類型</div>
      </div>

      {/* List Items */}
      <div className="flex flex-col">
        {/* Item 1: Folder */}
        <div className="flex items-center h-[56px] bg-[#f5f5f5] px-4 border-b border-black/12 hover:bg-gray-200 transition-colors cursor-pointer">
           <div className="w-[646px] flex items-center gap-4">
             <button className="w-5 h-5 flex items-center justify-center">
               <Icon name="p2b8d2f00" size={24} fill="black" className="opacity-56" />
             </button>
             <span className="text-[16px] text-[#333]">教材影片教材影片教材影片教材影片教材影片教材影片教材影片教材影片教材影...</span>
           </div>
           <div className="flex-1 flex justify-end">
             <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
               <Icon name="p3fdba000" size={24} fill="black" className="opacity-56" />
             </button>
           </div>
        </div>

        {/* Item 2: Video (Figma for Edu) - REPLACED WITH USER REQUEST */}
        <div className="flex items-center py-4 px-4 border-b border-black/12 bg-white hover:bg-gray-50 transition-colors" onClick={onNavigateToPlayer}>
          <div className="w-[646px] flex items-center gap-4">
            <button className="w-5 h-5 flex items-center justify-center">
               {/* Indent or icon placeholder */}
            </button>
            <div className="flex gap-4 items-center">
              <div className="relative w-[110px] h-[65px] bg-gray-200 flex-shrink-0">
                <img src={imgThumbnail} alt="Video Thumbnail" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                  1:36:20
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[#0099CC] underline text-[16px] font-normal truncate max-w-[400px]">
                  John Underkoffler_ Pointing to the future of UI
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 cursor-pointer" title="字幕">
                    <Icon name="p1a1e8980" size={18} fill="black" className="opacity-56" />
                  </div>
                  <TooltipIcon iconName="pa22b700" tooltipText="摘要及段落管理" onClick={onNavigateToEditor} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] flex justify-center">
            <span className="px-2 py-1 rounded-[100px] border border-[#bdbdbd] text-[13px] text-[#333]">完成</span>
          </div>
          <div className="w-[100px] text-center text-[16px] text-[#333]">559</div>
          <div className="w-[164px] text-[16px] text-[#333]">2022/02/25 23:56</div>
          <div className="w-[164px] text-[16px] text-[#333]">2022/02/25 23:56</div>
          <div className="w-[112px] text-[16px] text-[#333] flex items-center justify-between">
            <span>上傳或匯入</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
               <Icon name="p3fdba000" size={24} fill="black" className="opacity-56" />
            </button>
          </div>
        </div>
        
        {/* Item 3: Folder (Default) */}
        <div className="flex items-center h-[56px] bg-[#f5f5f5] px-4 border-b border-black/12 hover:bg-gray-200 transition-colors cursor-pointer">
           <div className="w-[646px] flex items-center gap-4">
             <button className="w-5 h-5 flex items-center justify-center">
               <Icon name="p2b8d2f00" size={24} fill="black" className="opacity-56" />
             </button>
             <span className="text-[16px] text-[#333]">預設資料夾 (2)</span>
           </div>
           <div className="flex-1 flex justify-end">
             <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
               <Icon name="p3fdba000" size={24} fill="black" className="opacity-56" />
             </button>
           </div>
        </div>

        {/* Item 4: Video (Presenting Figma Slides) */}
        <div className="flex items-center py-4 px-4 border-b border-black/12 bg-white hover:bg-gray-50 transition-colors" onClick={onNavigateToPlayer}>
          <div className="w-[646px] flex items-center gap-4">
            <button className="w-5 h-5 flex items-center justify-center">
               {/* Indent */}
            </button>
            <div className="flex gap-4 items-center">
              <div className="relative w-[110px] h-[65px] bg-gray-200 flex-shrink-0">
                <img src={imgImage2} alt="Video Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[#0099CC] underline text-[16px] font-normal">
                  Presenting: Figma Slides
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 cursor-pointer">
                    <Icon name="p1a1e8980" size={18} fill="black" className="opacity-56" />
                  </div>
                  <TooltipIcon iconName="pa22b700" tooltipText="摘要及段落管理" onClick={onNavigateToEditor} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] flex justify-center">
            <span className="px-2 py-1 rounded-[100px] border border-[#cc0000] text-[#cc0000] text-[13px]">失敗</span>
          </div>
          <div className="w-[100px] text-center text-[16px] text-[#333]">559</div>
          <div className="w-[164px] text-[16px] text-[#333]">2022/02/25 23:56</div>
          <div className="w-[164px] text-[16px] text-[#333]">2022/02/25 23:56</div>
          <div className="w-[112px] text-[16px] text-[#333] flex items-center justify-between">
            <span>YouTube</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
               <Icon name="p3fdba000" size={24} fill="black" className="opacity-56" />
            </button>
          </div>
        </div>

        {/* Item 5: Video (Config 2024) */}
        <div className="flex items-center py-4 px-4 border-b border-black/12 bg-white hover:bg-gray-50 transition-colors" onClick={onNavigateToPlayer}>
          <div className="w-[646px] flex items-center gap-4">
            <button className="w-5 h-5 flex items-center justify-center">
            </button>
            <div className="flex gap-4 items-center">
              <div className="relative w-[110px] h-[65px] bg-gray-200 flex-shrink-0">
                 <img src={imgImage} alt="Video Thumbnail" className="w-full h-full object-cover" />
                 <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                  24:51
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[#0099CC] underline text-[16px] font-normal">
                  Config 2024: Design Craft
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 cursor-pointer">
                    <Icon name="p1a1e8980" size={18} fill="black" className="opacity-56" />
                  </div>
                  <TooltipIcon iconName="pa22b700" tooltipText="摘要及段落管理" onClick={onNavigateToEditor} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] flex justify-center">
            <span className="px-2 py-1 rounded-[100px] border border-[#0099CC] text-[#0099CC] text-[13px]">處理中</span>
          </div>
          <div className="w-[100px] text-center text-[16px] text-[#333]">559</div>
          <div className="w-[164px] text-[16px] text-[#333]">2022/02/25 23:56</div>
          <div className="w-[164px] text-[16px] text-[#333]">2022/02/25 23:56</div>
          <div className="w-[112px] text-[16px] text-[#333] flex items-center justify-between">
            <span>上傳或匯入</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10">
               <Icon name="p3fdba000" size={24} fill="black" className="opacity-56" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
