import React, { useState } from "react";
import { Icon } from "./Icon";
import { Check } from "lucide-react";
import { VideoPlayer, parseTimeToSeconds, Comment } from "./VideoPlayer";

interface Segment {
  id: number;
  time: string;
  title: string;
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: 1,
    time: "00:03:15",
    author: "王小明",
    content: "這個部分的解釋非常清楚，讓我更理解兒童幸福感的定義。謝謝老師的分享！",
    isAnonymous: false,
    timestamp: "2024-04-05 14:23"
  },
  {
    id: 2,
    time: "00:12:40",
    author: "匿名用戶",
    content: "這裡提到的影響因素很實用，想請問老師是否有相關的研究文獻可以參考？",
    isAnonymous: true,
    timestamp: "2024-04-05 15:10"
  },
  {
    id: 3,
    time: "00:18:55",
    author: "李同學",
    content: "關於學業成績與幸福感的關聯性，我覺得這是一個很值得深入探討的議題。期待老師後續能有更多討論。",
    isAnonymous: false,
    timestamp: "2024-04-05 16:45"
  }
];

export function VideoPlayerPage({ 
  onBack,
  segments 
}: { 
  onBack: () => void;
  segments: Segment[];
}) {
  const [activeTab, setActiveTab] = useState<"comments" | "history">("comments");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [currentTime, setCurrentTime] = useState(333);
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [showSummaryTooltip, setShowSummaryTooltip] = useState(false);

  const handleSegmentClick = (timeStr: string) => {
    setCurrentTime(parseTimeToSeconds(timeStr));
  };

  // Filter out empty segments (time is 00:00:00 AND title is empty) to avoid clutter
  const validSegments = segments.filter(s => !(s.time === "00:00:00" && s.title.trim() === ""));

  const activeSegmentId = React.useMemo(() => {
    let activeId = -1;
    let maxTime = -1;
    
    validSegments.forEach(seg => {
      const t = parseTimeToSeconds(seg.time);
      if (t <= currentTime && t > maxTime) {
        maxTime = t;
        activeId = seg.id;
      }
    });
    return activeId;
  }, [currentTime, validSegments]);

  return (
    <div className="w-full h-screen bg-white flex flex-col overflow-hidden">
      {/* Top Bar / Navigation */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-black/12 shrink-0 z-10">
        <button 
          onClick={onBack}
          className="flex items-center justify-center px-4 py-1.5 border border-[#0099CC80] rounded-[4px] hover:bg-sky-50 transition-colors group"
        >
          <Icon name="p19eaa580" size={20} fill="#0099CC" />
          <span className="ml-2 font-medium text-[16px] text-[#0099CC] tracking-[0.4px]">回到影片管理</span>
        </button>
        <div className="flex items-center gap-1 text-[#333]">
           <span className="text-[16px] tracking-[0.15px]">影片播放問題排解</span>
           <Icon name="pe593d70" size={24} fill="#006699" />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className={`flex flex-col h-full overflow-y-auto transition-all duration-300 ${isSidebarExpanded ? 'w-[83.33%]' : 'flex-1'}`}>
          <div className="flex flex-col py-6 px-6">
             <div className="w-full flex flex-col gap-4">
                
                {/* Video Player Section */}
                <div className="w-full">
                    <VideoPlayer 
                      segments={validSegments} 
                      comments={mockComments}
                      currentTime={currentTime}
                      onTimeChange={setCurrentTime}
                      variant="clean"
                    />
                </div>

                {/* Title */}
                <h1 className="text-[24px] text-[#333] font-normal leading-[1.334]">
                  John Underkoffler_ Pointing to the future of UI
                </h1>

                {/* Summary Box */}
                <div className="w-full bg-[rgba(51,51,51,0.04)] rounded-[4px] relative transition-all">
                   <div className="p-4 flex flex-col gap-2">
                       <div className="flex items-center justify-between w-full">
                           <div className="flex items-center gap-1">
                               <span className="text-[16px] text-[#333] tracking-[0.15px]">影片摘要</span>
                               <div 
                                 className="relative flex items-center cursor-help"
                                 onMouseEnter={() => setShowSummaryTooltip(true)}
                                 onMouseLeave={() => setShowSummaryTooltip(false)}
                               >
                                 <Icon name="p29ef6f00" size={20} fill="#006699" />
                                 {showSummaryTooltip && (
                                   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[260px] bg-white p-3 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.15)] z-[100] border border-black/10 cursor-auto text-left">
                                     <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-black/10 rotate-45"></div>
                                     <p className="text-[13px] text-[#333] leading-[1.5] mb-2 tracking-[0.2px]">
                                       此區內容由授課老師提供，可能經過 NTU COOL 校內 AI 協助生成後由老師審核。
                                     </p>
                                     <p className="text-[13px] text-[#333] leading-[1.5] tracking-[0.2px]">
                                       🔒 所有 AI 運算皆於校內機房執行，不使用雲端服務，課程內容不會外流。
                                     </p>
                                   </div>
                                 )}
                               </div>
                           </div>
                           <button 
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 bg-[rgba(0,0,0,0.04)] transition-colors"
                              onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
                           >
                               <div className={`transform transition-transform ${isSummaryExpanded ? '' : 'rotate-180'}`}>
                                  <Icon name="p3053c630" size={24} fill="black" className="opacity-56" />
                               </div>
                           </button>
                       </div>
                       
                       <p className="text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] leading-[1.66]">
                         此內容可能是透過 AI 生成，實際內容請以老師授課為主
                       </p>
                       
                       <div className={`text-[16px] text-[#333] leading-[1.5] tracking-[0.15px] ${isSummaryExpanded ? '' : 'line-clamp-3 overflow-hidden'}`}>
                           <p className="font-bold mb-0">Summary</p>
                           <p className="mb-4">This video teaches you how to use Power BI to transform large datasets into interactive charts. It covers everything from data import and formatting to cross-table calculations, and demonstrates the use of visualization design and filtering features.</p>
                           
                           <p className="font-bold mb-0">Highlights</p>
                           <p className="mb-2">The video introduces how to perform data analysis using Power BI, especially how to import data from Excel and prepare it for visualization.</p>
                           <p className="mb-2">Introduces the Power BI software and explains its function of transforming large datasets into visually appealing interactive charts to help users understand the data context.</p>
                           <p className="mb-2">Guides viewers through downloading and installing Power BI, and shows how to get started with data analysis.</p>
                           <p className="mb-2">Uses Excel as an example to explain how to check and format the Excel sheet before importing to ensure data cleanliness.</p>
                           <p className="mb-2">Explains how Power BI automatically converts each Excel worksheet into a separate table and offers suggestions for handling multiple data segments.</p>
                           <p>Demonstrates how to select and import the created Excel tables into Power BI and verify the available data list.</p>
                           
                           <br />
                           
                           <p className="font-bold mb-0">總結</p>
                           <p className="mb-4">這部影片教你如何使用 Power BI 將大量數據轉換成互動式圖表，從資料導入、格式化到跨表計算，並展示了視覺化設計與篩選功能的應用。</p>
                           
                           <p className="font-bold mb-0">亮點</p>
                           <p className="mb-2">這段影片介紹了如何使用 Power BI 進行數據分析，特別是如何從 Excel 匯入數據並準備進行可視化。- 簡介 Power BI 軟體，說明其功能是將大量數據轉換成美觀的互動圖表，幫助使用者理解數據的背景。</p>
                           <p className="mb-2">- 指導觀眾如何下載並安裝 Power BI，並介紹如何開始使用該軟體進行數據分析。</p>
                           <p className="mb-2">- 以 Excel 為例，說明在導入數據前需要對 Excel 表格進行簡單的格式檢查，以確保數據的整齊性。</p>
                           <p className="mb-2">- 解釋 Power BI 如何自動將 Excel 的每個工作表轉換為獨立的表格，並提供如何處理多個數據片段的建議。</p>
                           <p>- 展示如何在 Power BI 中選擇剛剛創建的 Excel 表格進行數據匯入，並確認可用的數據列表。</p>
                       </div>
                       
                       {!isSummaryExpanded && (
                           <button 
                               onClick={() => setIsSummaryExpanded(true)}
                               className="text-[14px] text-[rgba(51,51,51,0.38)] tracking-[0.17px] text-left hover:text-[#333] transition-colors w-fit mt-1"
                           >
                               查看更多
                           </button>
                       )}
                       
                       {isSummaryExpanded && (
                           <button 
                               onClick={() => setIsSummaryExpanded(false)}
                               className="text-[14px] text-[rgba(51,51,51,0.38)] tracking-[0.17px] text-left hover:text-[#333] transition-colors w-fit mt-1"
                           >
                               收起
                           </button>
                       )}
                   </div>
                </div>

                {/* Comments Input */}
                <div className="flex flex-col gap-2 w-full mt-2">
                   <div className="w-full relative rounded-[4px] border border-[rgba(0,0,0,0.23)]">
                       <textarea 
                          className="w-full min-h-[100px] p-3 rounded-[4px] outline-none focus:ring-1 focus:ring-[#0099CC] border-none resize-y text-[16px] text-[#333] placeholder:text-[#333]/60"
                          placeholder="使用Shift + Enter 或 Enter換行"
                       />
                   </div>
                   <div className="flex items-center justify-end gap-2">
                       <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsAnonymous(!isAnonymous)}>
                           <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${isAnonymous ? 'bg-[#0099CC] border-[#0099CC]' : 'border-black/60'}`}>
                               {isAnonymous && <Check size={16} color="white" />}
                           </div>
                           <span className="text-[16px] text-[#333]">匿名</span>
                       </div>
                       <button className="bg-[#0099CC] text-white px-4 py-1.5 rounded-[4px] shadow font-medium hover:bg-[#0088bb] transition-colors">
                           留言
                       </button>
                   </div>
                </div>

                {/* Tabs */}
                <div className="w-full mt-4">
                    <div className="flex border-b border-black/12 w-full">
                        <button 
                            className={`px-4 py-3 relative min-w-[80px] transition-colors ${activeTab === 'comments' ? 'text-[#0099CC]' : 'text-[#333]'}`}
                            onClick={() => setActiveTab('comments')}
                        >
                            <span className="text-[16px] tracking-[0.15px]">評論</span>
                            {activeTab === 'comments' && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0099CC]" />
                            )}
                        </button>
                        <button 
                            className={`px-4 py-3 relative min-w-[100px] transition-colors ${activeTab === 'history' ? 'text-[#0099CC]' : 'text-[#333]'}`}
                            onClick={() => setActiveTab('history')}
                        >
                            <span className="text-[16px] tracking-[0.15px]">觀看紀錄</span>
                            {activeTab === 'history' && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0099CC]" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Comments List */}
                <div className="w-full mt-4">
                  {mockComments.map(comment => (
                    <div key={comment.id} className="flex flex-col gap-2 border-b border-black/12 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] text-[#333] tracking-[0.17px] font-bold">{comment.author}</span>
                        <span className="text-[14px] text-[#333] tracking-[0.17px]">({comment.time})</span>
                        {comment.isAnonymous && (
                          <span className="text-[14px] text-[#333] tracking-[0.17px]">匿名</span>
                        )}
                      </div>
                      <p className="text-[14px] text-[#333] tracking-[0.17px] leading-[1.5]">{comment.content}</p>
                      <span className="text-[12px] text-[#333] tracking-[0.17px] leading-[1.5] opacity-60">{comment.timestamp}</span>
                    </div>
                  ))}
                </div>

             </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div 
          className={`h-full border-l border-black/12 bg-white flex flex-col shrink-0 transition-all duration-300 ${isSidebarExpanded ? 'w-[264px]' : 'w-[60px] items-center'}`}
        >
          {isSidebarExpanded ? (
            // Expanded Content
            <div className="flex flex-col h-full w-full">
              {/* Header */}
              <div className="flex flex-col gap-2 p-4 border-b border-black/12 shrink-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-0">
                    <span className="text-[16px] font-bold text-[#333] tracking-[0.15px]">影片分段</span>
                    <div 
                      className="relative flex items-center cursor-help p-[5px] rounded-full"
                      onMouseEnter={() => setShowInfoTooltip(true)}
                      onMouseLeave={() => setShowInfoTooltip(false)}
                    >
                      <Icon name="p29ef6f00" size={20} fill="#006699" />
                      {showInfoTooltip && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[260px] bg-white p-3 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.15)] z-[100] border border-black/10 cursor-auto text-left">
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-black/10 rotate-45"></div>
                          <p className="text-[13px] text-[#333] leading-[1.5] mb-2 tracking-[0.2px]">
                            此區內容由授課老師提供，可能經過 NTU COOL 校內 AI 協助生成後由老師審核。
                          </p>
                          <p className="text-[13px] text-[#333] leading-[1.5] tracking-[0.2px]">
                            🔒 所有 AI 運算皆於校內機房執行，不使用雲端服務，課程內容不會外流。
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.04)] hover:bg-black/[0.08] transition-colors"
                    onClick={() => setIsSidebarExpanded(false)}
                  >
                    <Icon name="p16e51a00" size={20} fill="black" className="opacity-56" />
                  </button>
                </div>
                <p className="text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] leading-[1.66]">
                  此內容可能是透過 AI 生成，實際內容請以老師授課為主
                </p>
              </div>
              
              {/* List */}
              <div className="flex-1 overflow-y-auto">
                {validSegments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center pt-10 text-center px-4">
                    <span className="text-[14px] text-[#333] opacity-60 tracking-[0.17px]">
                      目前沒有段落
                    </span>
                  </div>
                ) : (
                  validSegments.map((segment) => (
                    <div 
                      key={segment.id} 
                      className={`flex gap-2 p-4 cursor-pointer transition-colors ${activeSegmentId === segment.id ? 'bg-[rgba(0,0,0,0.04)]' : 'hover:bg-[rgba(0,0,0,0.02)]'}`}
                      onClick={() => handleSegmentClick(segment.time)}
                    >
                      <span className="text-[12px] text-[#757575] tracking-[0.4px] leading-[1.66] shrink-0">{segment.time}</span>
                      <span className="flex-1 text-[14px] text-[#333] tracking-[0.17px] leading-[1.43]">
                        {segment.title || "未命名段落"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            // Collapsed Content
            <div className="flex flex-col items-center py-4 w-full">
                <button 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.04)] hover:bg-black/[0.08] transition-colors"
                  onClick={() => setIsSidebarExpanded(true)}
                >
                    {/* Rotated arrow for expand */}
                    <div className="rotate-180">
                      <Icon name="p16e51a00" size={20} fill="black" className="opacity-56" />
                    </div>
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}