import svgPaths from "./svg-e43zlgoju2";
import imgVideo from "figma:asset/63a6fb5f49e7949535ed13c012fefd163384d432.png";
type IconButtonAiProps = {
  className?: string;
  property1?: "icon button & tooltip" | "IconButton";
};

function IconButtonAi({ className, property1 = "IconButton" }: IconButtonAiProps) {
  if (property1 === "icon button & tooltip") {
    return (
      <div className={className} data-name="Property 1=icon button & tooltip">
        <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-0 w-[100px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="icon button - AI 品質不佳">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ThumbDownOff AltFilled">
                  <div className="absolute inset-[16.67%_8.33%_8.33%_8.33%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(189, 189, 189, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                        <path d={svgPaths.pa0fb500} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TooltipFeedback">
            <div className="bg-white relative rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<COOLTooltip>">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
                  <div className="css-g0mm18 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] text-center tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="css-ew64yg leading-[1.5]">tooltip content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=IconButton">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ThumbDownOff AltFilled">
            <div className="absolute inset-[16.67%_8.33%_8.33%_8.33%]" data-name="Vector">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(189, 189, 189, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
                  <path d={svgPaths.p230b3a00} fill="var(--fill-0, #BDBDBD)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type TooltipFeedbackProps = {
  className?: string;
  tooltipType?: "bad" | "good";
};

function TooltipFeedback({ className, tooltipType = "good" }: TooltipFeedbackProps) {
  const coolTooltip = (
    <div className="bg-white relative rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<COOLTooltip>">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] text-center tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-ew64yg leading-[1.5]">tooltip content</p>
          </div>
        </div>
      </div>
    </div>
  );
  if (tooltipType === "bad") {
    return (
      <div className={className} data-name="tooltipType=bad">
        {coolTooltip}
      </div>
    );
  }
  return (
    <div className={className} data-name="tooltipType=good">
      {coolTooltip}
    </div>
  );
}
type IconButtonAi1Props = {
  className?: string;
  property1?: "IconButton" | "icon button & tooltip";
};

function IconButtonAi1({ className, property1 = "IconButton" }: IconButtonAi1Props) {
  if (property1 === "icon button & tooltip") {
    return (
      <div className={className} data-name="Property 1=icon button & tooltip">
        <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-0 w-[100px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="icon button - AI 品質良好">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ThumbUpOff AltFilled">
                  <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(189, 189, 189, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                        <path d={svgPaths.p27cf1c00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TooltipFeedback className="content-stretch flex flex-col items-start relative shrink-0 w-full" />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=IconButton">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ThumbUpOff AltFilled">
            <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Vector">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(189, 189, 189, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
                  <path d={svgPaths.p9c74300} fill="var(--fill-0, #BDBDBD)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="bg-[#fafafa] h-[600px] relative w-[1108px]" data-name="Main Container">
      <div className="absolute bg-white content-stretch flex items-center left-0 top-0 w-[1108px]" data-name="Summary Header">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Summary Container">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Summary Row">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Back Button">
              <div className="relative rounded-[4px] shrink-0 w-full" data-name="<Button>">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Masked Icon">
                        <div className="absolute left-[-4px] size-[20px] top-0" data-name="Icon Left" />
                      </div>
                      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                        回到影片管理
                      </p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
            </div>
            <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] w-[223px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="css-4hzbpn leading-[1.5]">Week 1: 電影的聲音</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="<Tabs>">
            <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
                  <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    摘要管理
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
                  <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#09c] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    段落管理
                  </p>
                </div>
                <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
                  <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(0, 153, 204, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 2">
                      <line id="Line" stroke="var(--stroke-0, #0099CC)" strokeWidth="2" x2="61" y1="1" y2="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-name="divider">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1108 1">
                  <line id="divider" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="1108" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[476px] items-start justify-between left-0 px-[16px] py-0 top-[124px] w-[1108px]" data-name="Editor Section">
        <div className="bg-white content-stretch flex flex-col h-full items-center justify-center p-[16px] relative rounded-[8px] shrink-0 w-[624px]" data-name="Editor Section">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative rounded-[4px] w-full" data-name="Video Section">
            <div className="aspect-[2282/1056] relative shrink-0 w-full" data-name="Video">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[107.73%] left-[0.01%] max-w-none top-[-7.37%] w-full" src={imgVideo} />
              </div>
            </div>
            <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full" data-name="Video Info">
              <div className="content-stretch flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal gap-[16px] items-start p-[16px] relative w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Video Details">
                  <p className="css-4hzbpn leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    影片課程
                  </p>
                  <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    專題研究 (CSIE7990-60)
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Video Details">
                  <p className="css-4hzbpn leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    影片名稱
                  </p>
                  <p className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Week 1: 電影的聲音
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[16px] h-full items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[436px]" data-name="Editor Section">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative shrink-0 w-full" data-name="Header Container">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Header Container">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                    <div className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="<Button>">
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                        <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
                          <div className="absolute left-[calc(50%-1px)] overflow-clip size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left">
                            <div className="absolute inset-[8.33%_8.33%_4.16%_4.16%]" data-name="Vector">
                              <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7519 15.7519">
                                  <path d={svgPaths.p3ab96d00} fill="var(--fill-0, white)" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="capitalize css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          匯入 AI 分段
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0" data-name="Tooltip">
                      <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="InfoOutlined">
                          <div className="absolute inset-[8.33%]" data-name="Vector">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 102, 153, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path d={svgPaths.p19ecbc00} fill="var(--fill-0, #006699)" id="Vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Button>">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                        <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
                          <div className="absolute left-[-2px] overflow-clip size-[18px] top-0" data-name="DoNotDisturbFilled">
                            <div className="absolute inset-[8.33%]" data-name="Vector">
                              <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                  <path d={svgPaths.p3500b800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="capitalize css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.38)] tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          未發佈
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436 1">
                <line id="Line 135" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="436" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Editor Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-0 relative size-full">
                <div className="content-stretch flex font-normal gap-[16px] items-start relative shrink-0 text-[rgba(51,51,51,0.6)] w-full" data-name="Row">
                  <p className="css-4hzbpn font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px] w-[88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    時間
                  </p>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-[250px]">
                    <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      標題
                    </p>
                    <p className="css-ew64yg font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      0/30
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0" data-name="Content">
                              <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                00:00:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
                              <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                            <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0" data-name="Content">
                              <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                00:00:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
                              <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                            <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0" data-name="Content">
                              <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                00:00:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
                              <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                            <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0" data-name="Content">
                              <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                00:00:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
                              <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                            <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0" data-name="Content">
                              <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                00:00:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
                              <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                            <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Box">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0" data-name="Content">
                              <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                00:00:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Cell">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
                      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input">
                        <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
                            <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
                              <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                &nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                            <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404 1">
                      <line id="Line 135" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="404" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436 1">
                <line id="Line 135" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="436" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Row">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <IconButtonAi1 className="content-stretch flex flex-col items-start relative shrink-0" />
                  <IconButtonAi className="content-stretch flex flex-col items-start relative shrink-0" />
                </div>
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
                      <div className="absolute left-[-2px] overflow-clip size-[18px] top-0" data-name="ControlPointFilled">
                        <div className="absolute inset-[8.33%]" data-name="Vector">
                          <div className="absolute inset-0" style={{ "--fill-0": "rgba(51, 51, 51, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                              <path d={svgPaths.p19b65b00} fill="var(--fill-0, #333333)" fillOpacity="0.6" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="capitalize css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      新增段落
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Save Buttons">
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex gap-[16px] items-center justify-end px-[16px] py-0 relative w-full">
                <div className="relative rounded-[4px] shrink-0" data-name="Save Button">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                      <p className="capitalize css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#09c] text-[15px] tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        取消
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
                <div className="relative rounded-[4px] shrink-0" data-name="Save Button">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                      <p className="capitalize css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#09c] text-[15px] tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        儲存並發佈
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
                <div className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="Save Button">
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
                    <p className="capitalize css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      儲存
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}