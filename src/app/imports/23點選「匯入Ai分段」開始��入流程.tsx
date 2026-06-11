import svgPaths from "./svg-0o8emdu8si";
import imgCanvasLeftPadding from "figma:asset/5c02155824987dc4e9a302e628bff2dd11c0ff68.png";
import imgCanvasLeftCoursePadding from "figma:asset/f84ac12c98ee1c866ebcdd748a1fe34c13af6089.png";
import imgVideo from "figma:asset/63a6fb5f49e7949535ed13c012fefd163384d432.png";

function LtiTopPadding() {
  return (
    <div
      className="absolute contents left-[108px] top-[72px]"
      data-name="LTI top padding"
    >
      <div
        className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed h-[24px] left-[108px] right-[24px] top-[72px]"
        data-name="LTI top padding"
      />
      <p
        className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[calc(50%+30px)] text-[#ff81f4] text-[16px] top-[75px] w-[23px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        24
      </p>
    </div>
  );
}

function LtiRightPadding() {
  return (
    <div
      className="absolute contents right-[24px] top-[72px]"
      data-name="LTI right padding"
    >
      <div
        className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed bottom-0 right-[24px] top-[72px] w-[8px]"
        data-name="LTI right padding"
      />
      <p
        className="absolute css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[normal] right-[33px] text-[#ff81f4] text-[16px] top-[calc(50%+26px)] translate-x-[100%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        8
      </p>
    </div>
  );
}

function LtiBottomPadding() {
  return (
    <div
      className="absolute bottom-0 contents left-[108px]"
      data-name="LTI bottom padding"
    >
      <div
        className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed bottom-0 h-[24px] left-[108px] right-[32px]"
        data-name="LTI bottom padding"
      />
      <p
        className="absolute bottom-[22px] css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[calc(50%+26px)] text-[#ff81f4] text-[16px] translate-y-[100%] w-[23px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        24
      </p>
    </div>
  );
}

function TopNav() {
  return (
    <div
      className="absolute h-[72px] left-[84px] right-0 top-0"
      data-name="top nav"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1356 72"
      >
        <g id="top nav">
          <path
            d="M0 0H1356V72H0V0Z"
            fill="var(--fill-0, white)"
            id="top nav_2"
          />
          <line
            id="top nav lbottom ine"
            stroke="var(--stroke-0, #CCCCCC)"
            x1="24"
            x2="1332"
            y1="71.5"
            y2="71.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div
      className="absolute h-[720px] left-0 top-0 w-[1440px]"
      data-name="Border"
    >
      <LtiTopPadding />
      <LtiRightPadding />
      <LtiBottomPadding />
      <div
        className="absolute bg-[rgba(195,222,183,0.3)] border border-[#c3deb7] border-dashed bottom-0 right-0 top-[72px] w-[24px]"
        data-name="canvas right padding"
      />
      <div
        className="absolute bottom-0 left-[276px] top-[72px] w-[24px]"
        data-name="canvas left padding"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          height="648"
          src={imgCanvasLeftPadding}
          width="24"
        />
      </div>
      <div
        className="absolute bottom-0 left-[84px] top-[72px] w-[192px]"
        data-name="canvas left course padding"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          height="648"
          src={imgCanvasLeftCoursePadding}
          width="192"
        />
      </div>
      <TopNav />
      <div
        className="absolute bg-[#036] bottom-0 left-0 top-0 w-[84px]"
        data-name="global nav"
      />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="absolute left-[-4px] size-[20px] top-0"
      data-name="Icon Left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon Left">
          <path
            d={svgPaths.p19eaa580}
            fill="var(--fill-0, #0099CC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[16px]"
      data-name="Masked Icon"
    >
      <IconLeft />
    </div>
  );
}

function Base() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <MaskedIcon />
      <p
        className="css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] uppercase"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        回到影片管理
      </p>
    </div>
  );
}

function Button() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="<Button>"
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
          <Base />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function BackButton() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Back Button"
    >
      <Button />
    </div>
  );
}

function SummaryRow() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Summary Row"
    >
      <BackButton />
      <div
        className="flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] w-[223px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="css-4hzbpn leading-[1.5]">
          Week 1: 電影的聲音
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0"
      data-name="Container"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        摘要管理
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0"
      data-name="<Tab>"
    >
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0"
      data-name="Container"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#09c] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        段落管理
      </p>
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0"
      data-name="<Tab>"
    >
      <Container1 />
      <div
        className="absolute bottom-0 h-0 left-0 right-0"
        data-name="Line"
      >
        <div
          className="absolute inset-[-2px_0_0_0]"
          style={
            {
              "--stroke-0": "rgba(0, 153, 204, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 61 2"
          >
            <line
              id="Line"
              stroke="var(--stroke-0, #0099CC)"
              strokeWidth="2"
              x2="61"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Tab />
      <Tab1 />
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="<Tabs>"
    >
      <Container2 />
      <div
        className="h-0 relative shrink-0 w-full"
        data-name="divider"
      >
        <div
          className="absolute inset-[-1px_0_0_0]"
          style={
            {
              "--stroke-0": "rgba(0, 0, 0, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1108 1"
          >
            <line
              id="divider"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.12"
              x2="1108"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SummaryContainer() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative"
      data-name="Summary Container"
    >
      <SummaryRow />
      <Tabs />
    </div>
  );
}

function SummaryHeader() {
  return (
    <div
      className="absolute bg-white content-stretch flex items-center left-0 top-0 w-[1108px]"
      data-name="Summary Header"
    >
      <SummaryContainer />
    </div>
  );
}

function VideoDetails() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Video Details"
    >
      <p
        className="css-4hzbpn leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        影片課程
      </p>
      <p
        className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        專題研究 (CSIE7990-60)
      </p>
    </div>
  );
}

function VideoDetails1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Video Details"
    >
      <p
        className="css-4hzbpn leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        影片名稱
      </p>
      <p
        className="css-4hzbpn leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Week 1: 電影的聲音
      </p>
    </div>
  );
}

function VideoInfo() {
  return (
    <div
      className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full"
      data-name="Video Info"
    >
      <div className="content-stretch flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal gap-[16px] items-start p-[16px] relative w-full">
        <VideoDetails />
        <VideoDetails1 />
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative rounded-[4px] w-full"
      data-name="Video Section"
    >
      <div
        className="aspect-[2282/1056] relative shrink-0 w-full"
        data-name="Video"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[107.73%] left-[0.01%] max-w-none top-[-7.37%] w-full"
            src={imgVideo}
          />
        </div>
      </div>
      <VideoInfo />
    </div>
  );
}

function EditorSection() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-full items-center justify-center p-[16px] relative rounded-[8px] shrink-0 w-[624px]"
      data-name="Editor Section"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <VideoSection />
    </div>
  );
}

function IconLeft1() {
  return (
    <div
      className="absolute left-[calc(50%-1px)] size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon Left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Icon Left">
          <path
            d={svgPaths.p333c7980}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[16px]"
      data-name="Masked Icon"
    >
      <IconLeft1 />
    </div>
  );
}

function Base1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <MaskedIcon1 />
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        匯入 AI 分段
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0"
      data-name="<Button>"
    >
      <Base1 />
    </div>
  );
}

function InfoOutlined() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="InfoOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="InfoOutlined">
          <path
            d={svgPaths.p2668ba00}
            fill="var(--fill-0, #006699)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="<Icon>"
    >
      <InfoOutlined />
    </div>
  );
}

function Tooltip() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Tooltip"
    >
      <Icon />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Button1 />
      <Tooltip />
    </div>
  );
}

function DoNotDisturbFilled() {
  return (
    <div
      className="absolute left-[-2px] size-[18px] top-0"
      data-name="DoNotDisturbFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="DoNotDisturbFilled">
          <path
            d={svgPaths.p50afe00}
            fill="var(--fill-0, black)"
            fillOpacity="0.38"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon2() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[16px]"
      data-name="Masked Icon"
    >
      <DoNotDisturbFilled />
    </div>
  );
}

function Base2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <MaskedIcon2 />
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.38)] tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="leading-[22px]">未</span>
        <span
          className="leading-[22px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          發布
        </span>
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0"
      data-name="<Button>"
    >
      <Base2 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="<Button>"
    >
      <Button2 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative"
      data-name="Header Container"
    >
      <Frame3 />
      <Button3 />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Header Container"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-0 relative w-full">
          <HeaderContainer />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[250px]">
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        標題
      </p>
      <p
        className="css-ew64yg font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[12px] tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        0/30
      </p>
    </div>
  );
}

function Row() {
  return (
    <div
      className="content-stretch flex font-normal gap-[16px] items-start relative shrink-0 text-[rgba(51,51,51,0.6)] w-full"
      data-name="Row"
    >
      <p
        className="css-4hzbpn font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] relative shrink-0 text-[14px] tracking-[0.17px] w-[88px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        時間
      </p>
      <Frame2 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0"
      data-name="Content"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        00:00:03
      </p>
    </div>
  );
}

function Input() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Input"
    >
      <Input />
    </div>
  );
}

function Box() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Box"
    >
      <Input1 />
    </div>
  );
}

function Cell() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]"
      data-name="Cell"
    >
      <Box />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full"
      data-name="Content"
    >
      <p
        className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        兒童幸福感的定義與衡量
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content1 />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Input"
    >
      <Input2 />
    </div>
  );
}

function Box1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Box"
    >
      <Input3 />
    </div>
  );
}

function Cell1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative"
      data-name="Cell"
    >
      <Box1 />
    </div>
  );
}

function DeleteFilled() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="DeleteFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DeleteFilled">
          <path
            d={svgPaths.p14e45580}
            fill="var(--fill-0, black)"
            fillOpacity="0.38"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      data-name="<Icon>"
    >
      <DeleteFilled />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell />
      <Cell1 />
      <Icon1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0"
      data-name="Content"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        00:01:13
      </p>
    </div>
  );
}

function Input4() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Input"
    >
      <Input4 />
    </div>
  );
}

function Box2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Box"
    >
      <Input5 />
    </div>
  );
}

function Cell2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]"
      data-name="Cell"
    >
      <Box2 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full"
      data-name="Content"
    >
      <p
        className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        兒童期幸福感的發展
      </p>
    </div>
  );
}

function Input6() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content3 />
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Input"
    >
      <Input6 />
    </div>
  );
}

function Box3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Box"
    >
      <Input7 />
    </div>
  );
}

function Cell3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative"
      data-name="Cell"
    >
      <Box3 />
    </div>
  );
}

function DeleteFilled1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="DeleteFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DeleteFilled">
          <path
            d={svgPaths.p14e45580}
            fill="var(--fill-0, black)"
            fillOpacity="0.38"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      data-name="<Icon>"
    >
      <DeleteFilled1 />
    </div>
  );
}

function Row2() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell2 />
      <Cell3 />
      <Icon2 />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0"
      data-name="Content"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        00:18:37
      </p>
    </div>
  );
}

function Input8() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content4 />
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Input"
    >
      <Input8 />
    </div>
  );
}

function Box4() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Box"
    >
      <Input9 />
    </div>
  );
}

function Cell4() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]"
      data-name="Cell"
    >
      <Box4 />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full"
      data-name="Content"
    >
      <p
        className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        影響兒童幸福感的因素
      </p>
    </div>
  );
}

function Input10() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content5 />
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Input"
    >
      <Input10 />
    </div>
  );
}

function Box5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Box"
    >
      <Input11 />
    </div>
  );
}

function Cell5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative"
      data-name="Cell"
    >
      <Box5 />
    </div>
  );
}

function DeleteFilled2() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="DeleteFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DeleteFilled">
          <path
            d={svgPaths.p14e45580}
            fill="var(--fill-0, black)"
            fillOpacity="0.38"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      data-name="<Icon>"
    >
      <DeleteFilled2 />
    </div>
  );
}

function Row3() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell4 />
      <Cell5 />
      <Icon3 />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0"
      data-name="Content"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        00:00:00
      </p>
    </div>
  );
}

function Input12() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content6 />
      </div>
    </div>
  );
}

function Input13() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Input"
    >
      <Input12 />
    </div>
  );
}

function Box6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Box"
    >
      <Input13 />
    </div>
  );
}

function Cell6() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[88px]"
      data-name="Cell"
    >
      <Box6 />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full"
      data-name="Content"
    >
      <p
        className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        &nbsp;
      </p>
    </div>
  );
}

function Input14() {
  return (
    <div
      className="relative rounded-[4px] shrink-0 w-full"
      data-name="Input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content7 />
      </div>
    </div>
  );
}

function Input15() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Input"
    >
      <Input14 />
    </div>
  );
}

function Box7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Box"
    >
      <Input15 />
    </div>
  );
}

function Cell7() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative"
      data-name="Cell"
    >
      <Box7 />
    </div>
  );
}

function DeleteFilled3() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="DeleteFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="DeleteFilled">
          <path
            d={svgPaths.p14e45580}
            fill="var(--fill-0, black)"
            fillOpacity="0.38"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      data-name="<Icon>"
    >
      <DeleteFilled3 />
    </div>
  );
}

function Row4() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell6 />
      <Cell7 />
      <Icon4 />
    </div>
  );
}

function EditorContainer() {
  return (
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative w-full"
      data-name="Editor Container"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-0 relative size-full">
          <Row />
          <Row1 />
          <Row2 />
          <Row3 />
          {[...Array(2).keys()].map((_, i) => (
            <Row4 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ThumbUpOffAltFilled() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="ThumbUpOff AltFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ThumbUpOff AltFilled">
          <path
            d={svgPaths.p1772cd00}
            fill="var(--fill-0, #BDBDBD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="<Icon>"
    >
      <ThumbUpOffAltFilled />
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon5 />
    </div>
  );
}

function IconButtonAi() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="icon button - AI 品質良好"
    >
      <IconButton />
    </div>
  );
}

function ThumbDownOffAltFilled() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="ThumbDownOff AltFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ThumbDownOff AltFilled">
          <path
            d={svgPaths.p2b6f400}
            fill="var(--fill-0, #BDBDBD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="<Icon>"
    >
      <ThumbDownOffAltFilled />
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0"
      data-name="<IconButton>"
    >
      <Icon6 />
    </div>
  );
}

function IconButtonAi1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="icon button - AI 品質不佳"
    >
      <IconButton1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconButtonAi />
      <IconButtonAi1 />
    </div>
  );
}

function ControlPointFilled() {
  return (
    <div
      className="absolute left-[-2px] size-[18px] top-0"
      data-name="ControlPointFilled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ControlPointFilled">
          <path
            d={svgPaths.p303f8c00}
            fill="var(--fill-0, #333333)"
            fillOpacity="0.6"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon3() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[16px]"
      data-name="Masked Icon"
    >
      <ControlPointFilled />
    </div>
  );
}

function Base3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <MaskedIcon3 />
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        新增段落
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0"
      data-name="<Button>"
    >
      <Base3 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
          <Frame4 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Base4() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#09c] text-[15px] tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        取消
      </p>
    </div>
  );
}

function SaveButton() {
  return (
    <div
      className="relative rounded-[4px] shrink-0"
      data-name="Save Button"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <Base4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Base5() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#09c] text-[15px] tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span className="leading-[22px]">儲存並</span>
        <span
          className="leading-[22px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          發布
        </span>
      </p>
    </div>
  );
}

function SaveButton1() {
  return (
    <div
      className="relative rounded-[4px] shrink-0"
      data-name="Save Button"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <Base5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Base6() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        儲存
      </p>
    </div>
  );
}

function SaveButton2() {
  return (
    <div
      className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0"
      data-name="Save Button"
    >
      <Base6 />
    </div>
  );
}

function SaveButtons() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Save Buttons"
    >
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[16px] py-0 relative w-full">
          <SaveButton />
          <SaveButton1 />
          <SaveButton2 />
        </div>
      </div>
    </div>
  );
}

function EditorSection1() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[16px] h-full items-center px-0 py-[16px] relative rounded-[8px] shrink-0 w-[436px]"
      data-name="Editor Section"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <HeaderContainer1 />
      <div className="h-0 relative shrink-0 w-full">
        <div
          className="absolute inset-[-1px_0_0_0]"
          style={
            {
              "--stroke-0": "rgba(0, 0, 0, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 436 1"
          >
            <line
              id="Line 135"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.12"
              x2="436"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <EditorContainer />
      <div className="h-0 relative shrink-0 w-full">
        <div
          className="absolute inset-[-1px_0_0_0]"
          style={
            {
              "--stroke-0": "rgba(0, 0, 0, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 436 1"
          >
            <line
              id="Line 135"
              stroke="var(--stroke-0, black)"
              strokeOpacity="0.12"
              x2="436"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Row5 />
      <SaveButtons />
    </div>
  );
}

function EditorSection2() {
  return (
    <div
      className="absolute content-stretch flex h-[476px] items-start justify-between left-0 px-[16px] py-0 top-[124px] w-[1108px]"
      data-name="Editor Section"
    >
      <EditorSection />
      <EditorSection1 />
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="absolute bg-[#fafafa] h-[600px] overflow-clip right-[32px] top-[96px] w-[1108px]"
      data-name="Main Container"
    >
      <SummaryHeader />
      <EditorSection2 />
    </div>
  );
}

function DialogTitle() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="<DialogTitle>"
    >
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <p
          className="css-4hzbpn font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.235] relative shrink-0 text-[#333] text-[20px] tracking-[0.25px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          匯入 AI 分段
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-full"
      data-name="Header"
    >
      <p
        className="absolute css-4hzbpn font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] left-0 text-[#333] text-[16px] top-0 tracking-[0.15px] w-[552px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        請選擇一個字幕檔，匯入 AI 依該字幕生成的分段：
      </p>
    </div>
  );
}

function TableHead() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <p
            className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            語音辨識自動生成字幕
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeadRow() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <TableHead />
    </div>
  );
}

function TableHeadRow1() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow />
    </div>
  );
}

function Hidden() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="_hidden"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="_hidden">
          <path
            d={svgPaths.p4501f00}
            fill="var(--fill-0, #0099CC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Padding() {
  return (
    <div
      className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0"
      data-name="Padding"
    >
      <Hidden />
    </div>
  );
}

function Radio() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip relative shrink-0"
      data-name="<Radio>"
    >
      <Padding />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        影片原文 (自動產生)
      </p>
    </div>
  );
}

function InfoOutlined1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="InfoOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="InfoOutlined">
          <path
            d={svgPaths.p2668ba00}
            fill="var(--fill-0, #006699)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame />
      <InfoOutlined1 />
    </div>
  );
}

function TableHead1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function TableHeadRow2() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <Radio />
      <TableHead1 />
    </div>
  );
}

function TableHeadRow3() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow2 />
    </div>
  );
}

function Hidden1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="_hidden"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="_hidden">
          <path
            d={svgPaths.p26f9ce00}
            fill="var(--fill-0, #333333)"
            fillOpacity="0.6"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Padding1() {
  return (
    <div
      className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0"
      data-name="Padding"
    >
      <Hidden1 />
    </div>
  );
}

function Radio1() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip relative shrink-0"
      data-name="<Radio>"
    >
      <Padding1 />
    </div>
  );
}

function TableHead2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <p
            className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            英文 (自動翻譯)
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeadRow4() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <Radio1 />
      <TableHead2 />
    </div>
  );
}

function TableHeadRow5() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow4 />
    </div>
  );
}

function TableHead3() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <p
            className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            手動上傳字幕檔
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeadRow6() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <TableHead3 />
    </div>
  );
}

function TableHeadRow7() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow6 />
    </div>
  );
}

function Hidden2() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="_hidden"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="_hidden">
          <path
            d={svgPaths.p26f9ce00}
            fill="var(--fill-0, #333333)"
            fillOpacity="0.6"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Padding2() {
  return (
    <div
      className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0"
      data-name="Padding"
    >
      <Hidden2 />
    </div>
  );
}

function Radio2() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip relative shrink-0"
      data-name="<Radio>"
    >
      <Padding2 />
    </div>
  );
}

function Typography() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0"
      data-name="Typography"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[13px] tracking-[0.16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        分段處理中
      </p>
    </div>
  );
}

function Chip() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.08)] content-stretch flex items-center opacity-38 overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0"
      data-name="<Chip>"
    >
      <Typography />
    </div>
  );
}

function TableHead4() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <p
            className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            中文
          </p>
          <Chip />
        </div>
      </div>
    </div>
  );
}

function TableHeadRow8() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <Radio2 />
      <TableHead4 />
    </div>
  );
}

function TableHeadRow9() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow8 />
    </div>
  );
}

function Hidden3() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="_hidden"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="_hidden">
          <path
            d={svgPaths.p26f9ce00}
            fill="var(--fill-0, #333333)"
            fillOpacity="0.6"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Padding3() {
  return (
    <div
      className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0"
      data-name="Padding"
    >
      <Hidden3 />
    </div>
  );
}

function Radio3() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip relative shrink-0"
      data-name="<Radio>"
    >
      <Padding3 />
    </div>
  );
}

function Typography1() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0"
      data-name="Typography"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[13px] tracking-[0.16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        分段異常，請聯繫客服
      </p>
    </div>
  );
}

function Chip1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.08)] content-stretch flex items-center opacity-38 overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0"
      data-name="<Chip>"
    >
      <Typography1 />
    </div>
  );
}

function TableHead5() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <p
            className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            English
          </p>
          <Chip1 />
        </div>
      </div>
    </div>
  );
}

function TableHeadRow10() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <Radio3 />
      <TableHead5 />
    </div>
  );
}

function TableHeadRow11() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow10 />
    </div>
  );
}

function Hidden4() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="_hidden"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="_hidden">
          <path
            d={svgPaths.p26f9ce00}
            fill="var(--fill-0, #333333)"
            fillOpacity="0.6"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Padding4() {
  return (
    <div
      className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0"
      data-name="Padding"
    >
      <Hidden4 />
    </div>
  );
}

function Radio4() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip relative shrink-0"
      data-name="<Radio>"
    >
      <Padding4 />
    </div>
  );
}

function Typography2() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0"
      data-name="Typography"
    >
      <p
        className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[13px] tracking-[0.16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        目前不支援中英文以外語言
      </p>
    </div>
  );
}

function Chip2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.08)] content-stretch flex items-center opacity-38 overflow-clip px-[4px] py-[3px] relative rounded-[100px] shrink-0"
      data-name="<Chip>"
    >
      <Typography2 />
    </div>
  );
}

function TableHead6() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="<TableHead>"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-0 py-[16px] relative size-full">
          <p
            className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.38)] tracking-[0.15px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Tiếng Việt
          </p>
          <Chip2 />
        </div>
      </div>
    </div>
  );
}

function TableHeadRow12() {
  return (
    <div
      className="content-stretch flex h-[56px] items-center relative shrink-0 w-full"
      data-name="<TableHeadRow>"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none"
      />
      <Radio4 />
      <TableHead6 />
    </div>
  );
}

function TableHeadRow13() {
  return (
    <div
      className="content-stretch flex flex-col h-[56px] items-start px-[32px] py-0 relative shrink-0 w-[552px]"
      data-name="Table Head Row"
    >
      <TableHeadRow12 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <TableHeadRow1 />
      <TableHeadRow3 />
      <TableHeadRow5 />
      <TableHeadRow7 />
      <TableHeadRow9 />
      <TableHeadRow11 />
      <TableHeadRow13 />
    </div>
  );
}

function DialogContent() {
  return (
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative w-full"
      data-name="<DialogContent>"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative size-full">
          <Header />
          <Container3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid border-t inset-0 pointer-events-none"
      />
    </div>
  );
}

function Base7() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        取消
      </p>
    </div>
  );
}

function Action1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shrink-0"
      data-name="Action #2"
    >
      <Base7 />
    </div>
  );
}

function Base8() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="Base"
    >
      <p
        className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.4px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        確定
      </p>
    </div>
  );
}

function Action() {
  return (
    <div
      className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0"
      data-name="Action #1"
    >
      <Base8 />
    </div>
  );
}

function CoolDialogActions() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="<COOLDialogActions>"
    >
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[8px] relative w-full">
          <Action1 />
          <Action />
        </div>
      </div>
    </div>
  );
}

function DialogElements() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full"
      data-name="Dialog Elements"
    >
      <DialogTitle />
      <DialogContent />
      <CoolDialogActions />
    </div>
  );
}

function Paper() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[4px] shadow-[0px_9px_46px_8px_rgba(0,0,0,0.12),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_11px_15px_-7px_rgba(0,0,0,0.2)] w-full"
      data-name="<Paper>"
    >
      <DialogElements />
    </div>
  );
}

function CoolTooltip() {
  return (
    <div
      className="absolute bg-white content-stretch flex flex-col items-start left-[calc(41.67%+17px)] overflow-clip px-[8px] py-[4px] rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] top-[205px]"
      data-name="<COOLTooltip>"
    >
      <div
        className="flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[0px] tracking-[0.17px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="css-4hzbpn text-[14px]">
          <span className="leading-[1.43]">
            目前僅提供中文分段內容
          </span>
          <span className="leading-[1.43] tracking-[0.17px]">
            不支援
          </span>
          <span className="leading-[1.43]">其他語言</span>
        </p>
      </div>
    </div>
  );
}

function DialogAi() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[570px] items-start left-[calc(50%+139px)] top-[calc(50%+36px)] translate-x-[-50%] translate-y-[-50%] w-[600px]"
      data-name="Dialog - 匯入 AI 摘要"
    >
      <Paper />
      <CoolTooltip />
    </div>
  );
}

export default function Component23Ai() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="2.3 點選「匯入 AI 分段」開始匯入流程"
    >
      <Border />
      <MainContainer />
      <div
        className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 h-[648px] left-[300px] w-[1117px]"
        data-name="mask"
      />
      <DialogAi />
    </div>
  );
}