import svgPaths from "./svg-prnwfr67nf";
import imgCanvasLeftPadding from "figma:asset/5c02155824987dc4e9a302e628bff2dd11c0ff68.png";
import imgImage from "figma:asset/0b94836757e4c114fdc9784bbc7c6fff97d85cc4.png";
import imgImage1 from "figma:asset/22e1541ef90f8b5659ba3467676dedad821ca994.png";
import imgImage2 from "figma:asset/bee1a7d0d18e36a7da1beb866ef0a2403f464d45.png";

function LtiTopPadding() {
  return (
    <div className="absolute contents left-[108px] top-[72px]" data-name="LTI top padding">
      <div className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed h-[24px] left-[108px] right-[24px] top-[72px]" data-name="LTI top padding" />
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[calc(50%+30px)] text-[#ff81f4] text-[16px] top-[75px] w-[23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        24
      </p>
    </div>
  );
}

function LtiRightPadding() {
  return (
    <div className="absolute contents right-[24px] top-[72px]" data-name="LTI right padding">
      <div className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed bottom-0 right-[24px] top-[72px] w-[8px]" data-name="LTI right padding" />
      <p className="absolute css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[normal] right-[33px] text-[#ff81f4] text-[16px] top-[calc(50%+26px)] translate-x-[100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        8
      </p>
    </div>
  );
}

function LtiBottomPadding() {
  return (
    <div className="absolute bottom-0 contents left-[108px]" data-name="LTI bottom padding">
      <div className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed bottom-0 h-[24px] left-[108px] right-[32px]" data-name="LTI bottom padding" />
      <p className="absolute bottom-[22px] css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[calc(50%+26px)] text-[#ff81f4] text-[16px] translate-y-[100%] w-[23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        24
      </p>
    </div>
  );
}

function TopNav() {
  return (
    <div className="absolute h-[72px] left-[84px] right-0 top-0" data-name="top nav">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1356 72">
        <g id="top nav">
          <path d="M0 0H1356V72H0V0Z" fill="var(--fill-0, white)" id="top nav_2" />
          <line id="top nav lbottom ine" stroke="var(--stroke-0, #CCCCCC)" x1="24" x2="1332" y1="71.5" y2="71.5" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute h-[720px] left-0 top-0 w-[1440px]" data-name="Border">
      <LtiTopPadding />
      <LtiRightPadding />
      <LtiBottomPadding />
      <div className="absolute bg-[rgba(195,222,183,0.3)] border border-[#c3deb7] border-dashed bottom-0 right-0 top-[72px] w-[24px]" data-name="canvas right padding" />
      <div className="absolute bottom-0 left-[84px] top-[72px] w-[24px]" data-name="canvas left padding">
        <img alt="" className="block max-w-none size-full" height="648" src={imgCanvasLeftPadding} width="24" />
      </div>
      <TopNav />
      <div className="absolute bg-[#036] bottom-0 left-0 top-0 w-[84px]" data-name="global nav" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#09c] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        我的影片
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
      <Container />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(0, 153, 204, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 2">
            <line id="Line" stroke="var(--stroke-0, #0099CC)" strokeWidth="2" x2="61" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        統計數據
      </p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        錄播影片
      </p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[1300px]" data-name="<Tabs>">
      <Container3 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1300 1">
            <line id="divider" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="1300" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="absolute left-[calc(50%-2px)] size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p21cef280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <IconLeft />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon />
      <p className="css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        新增影片
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="<Button>">
      <Base />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[1178px] top-[4px]">
      <Button />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="absolute h-[48px] left-0 top-[8px] w-[1300px]" data-name="<Tabs>">
      <Tabs />
      <Frame1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(51,51,51,0.6)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        搜尋影片
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative w-full">
        <Content />
      </div>
    </div>
  );
}

function CoolTextField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[428px]" data-name="<COOLTextField>">
      <Input />
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        匯出留言
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="<Button>">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit]">
        <Base1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button1 />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="absolute left-[-4px] size-[20px] top-0" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #0099CC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <IconLeft1 />
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon1 />
      <p className="css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        新增資料夾
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="<Button>">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit]">
        <Base2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[72px] w-[1300px]">
      <CoolTextField />
      <Frame3 />
    </div>
  );
}

function ChevronDropDown() {
  return (
    <div className="relative size-full" data-name="chevron drop down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron drop down">
          <g id="Boundary"></g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Frame">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-[20px]">
          <ChevronDropDown />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-full items-center p-[16px] relative shrink-0 w-[646px]" data-name="<TableHead>">
      <Frame />
      <p className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片
      </p>
    </div>
  );
}

function IconButton() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[100px]" data-name="<IconButton>">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] size-full" />
      </div>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        處理狀態
      </p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        留言數
      </p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        最新留言時間
      </p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        建立時間
      </p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[112px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片類型
      </p>
    </div>
  );
}

function TableHeadRow() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-[1330px]" data-name="<TableHeadRow>">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <TableHead />
      <IconButton />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeadRow />
    </div>
  );
}

function ExpandLessFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandLessFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandLessFilled">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandLessFilled />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon />
    </div>
  );
}

function TableHead6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-full items-center p-[16px] relative shrink-0 w-[646px]" data-name="<TableHead>">
      <IconButton1 />
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`教材影片教材影片教材影片教材影片教材影片教材影片教材影片教材影片教材影... `}</p>
    </div>
  );
}

function MoreVertFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MoreVertFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MoreVertFilled">
          <path d={svgPaths.p3fdba000} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <MoreVertFilled />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon1 />
    </div>
  );
}

function TableHeadRow1() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-[1330px]" data-name="<TableHeadRow>">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <TableHead6 />
      <IconButton2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative shrink-0">
      <TableHeadRow1 />
    </div>
  );
}

function ExpandMoreFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandMoreFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandMoreFilled">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreFilled />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon2 />
    </div>
  );
}

function Image() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="image">
      <div className="col-1 h-[65px] ml-0 mt-0 relative row-1 w-[110px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="65" src={imgImage} width="110" />
      </div>
      <div className="col-1 h-[64px] ml-[0.5px] mt-[0.5px] relative row-1 w-[109px]" data-name="Vector">
        <div className="absolute inset-[-0.78%_-0.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 65">
            <path d={svgPaths.p3565ea40} id="Vector" stroke="var(--stroke-0, #707070)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09c] text-[16px] underline">Figma for Edu: Figma from scratch: Unstructured to structured ...</p>
    </div>
  );
}

function SubtitlesOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SubtitlesOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SubtitlesOutlined">
          <path d={svgPaths.p1a1e8980} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <SubtitlesOutlined />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip p-[8px] rounded-[100px] top-0" data-name="<IconButton>">
      <Icon3 />
    </div>
  );
}

function TipsandUpdatesOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TipsandUpdatesOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TipsandUpdatesOutlined">
          <path d={svgPaths.pa22b700} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <TipsandUpdatesOutlined />
    </div>
  );
}

function IconButton5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon4 />
    </div>
  );
}

function IconButton6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44px] top-0" data-name="icon button - 摘要及段落管理">
      <IconButton5 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[40px] relative shrink-0 w-[84px]" data-name="影片工具列">
      <IconButton4 />
      <IconButton6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[460px]">
      <Frame14 />
      <Component />
    </div>
  );
}

function ListVideo() {
  return (
    <div className="content-stretch flex gap-[16px] h-[97px] items-center p-[16px] relative shrink-0 w-[613.402px]" data-name="list video">
      <Image />
      <Frame15 />
    </div>
  );
}

function TableHead7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-full items-center relative shrink-0 w-[646px]" data-name="<TableHead>">
      <IconButton3 />
      <ListVideo />
    </div>
  );
}

function MoreVertFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MoreVertFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MoreVertFilled">
          <path d={svgPaths.p3fdba000} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <MoreVertFilled1 />
    </div>
  );
}

function IconButton7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon5 />
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[13px] tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        完成
      </p>
    </div>
  );
}

function Chip() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="<Chip>">
      <div className="content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[inherit]">
        <Typography />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TableHead8() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <Chip />
    </div>
  );
}

function TableHead9() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        559
      </p>
    </div>
  );
}

function TableHead10() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2022/02/25 23:56
      </p>
    </div>
  );
}

function TableHead11() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2022/02/25 23:56
      </p>
    </div>
  );
}

function TableHead12() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[112px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        上傳或匯入
      </p>
    </div>
  );
}

function TableHeadRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1330px]" data-name="<TableHeadRow>">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableHead7 />
      </div>
      <IconButton7 />
      <div className="flex flex-row items-center self-stretch">
        <TableHead8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead12 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeadRow2 />
    </div>
  );
}

function ExpandLessFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandLessFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandLessFilled">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandLessFilled1 />
    </div>
  );
}

function IconButton8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon6 />
    </div>
  );
}

function MoreVertFilled2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MoreVertFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MoreVertFilled">
          <path d={svgPaths.p3fdba000} fill="var(--fill-0, black)" fillOpacity="0.38" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <MoreVertFilled2 />
    </div>
  );
}

function IconButton9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon7 />
    </div>
  );
}

function TableHead13() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-full items-center p-[16px] relative shrink-0 w-[646px]" data-name="<TableHead>">
      <IconButton8 />
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        預設資料夾 (2)
      </p>
      <IconButton9 />
    </div>
  );
}

function TableHeadRow3() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-[1330px]" data-name="<TableHeadRow>">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <TableHead13 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative shrink-0">
      <TableHeadRow3 />
    </div>
  );
}

function ExpandMoreFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandMoreFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandMoreFilled">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreFilled1 />
    </div>
  );
}

function IconButton10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon8 />
    </div>
  );
}

function Image1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="image">
      <div className="col-1 h-[65px] ml-0 mt-0 relative row-1 w-[110px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="65" src={imgImage1} width="110" />
      </div>
      <div className="col-1 h-[64px] ml-[0.5px] mt-[0.5px] relative row-1 w-[109px]" data-name="Vector">
        <div className="absolute inset-[-0.78%_-0.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 65">
            <path d={svgPaths.p3565ea40} id="Vector" stroke="var(--stroke-0, #707070)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09c] text-[16px] underline">Presenting: Figma Slides</p>
    </div>
  );
}

function SubtitlesOutlined1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SubtitlesOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SubtitlesOutlined">
          <path d={svgPaths.p1a1e8980} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <SubtitlesOutlined1 />
    </div>
  );
}

function IconButton11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip p-[8px] rounded-[100px] top-0" data-name="<IconButton>">
      <Icon9 />
    </div>
  );
}

function TipsandUpdatesOutlined1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TipsandUpdatesOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TipsandUpdatesOutlined">
          <path d={svgPaths.pa22b700} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <TipsandUpdatesOutlined1 />
    </div>
  );
}

function IconButton12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon10 />
    </div>
  );
}

function IconButton13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44px] top-0" data-name="icon button - 摘要管理">
      <IconButton12 />
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[84px]" data-name="影片工具列">
      <IconButton11 />
      <IconButton13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[460px]">
      <Frame16 />
      <Component1 />
    </div>
  );
}

function ListVideo1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[97px] items-center p-[16px] relative shrink-0 w-[613.402px]" data-name="list video">
      <Image1 />
      <Frame17 />
    </div>
  );
}

function TableHead14() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-full items-center relative shrink-0 w-[646px]" data-name="<TableHead>">
      <IconButton10 />
      <ListVideo1 />
    </div>
  );
}

function MoreVertFilled3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MoreVertFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MoreVertFilled">
          <path d={svgPaths.p3fdba000} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <MoreVertFilled3 />
    </div>
  );
}

function IconButton14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon11 />
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#c00] text-[13px] tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        失敗
      </p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="<Chip>">
      <div className="content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[inherit]">
        <Typography1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c00] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TableHead15() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <Chip1 />
    </div>
  );
}

function TableHead16() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        559
      </p>
    </div>
  );
}

function TableHead17() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2022/02/25 23:56
      </p>
    </div>
  );
}

function TableHead18() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2022/02/25 23:56
      </p>
    </div>
  );
}

function TableHead19() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[112px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        YouTube
      </p>
    </div>
  );
}

function TableHeadRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1330px]" data-name="<TableHeadRow>">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableHead14 />
      </div>
      <IconButton14 />
      <div className="flex flex-row items-center self-stretch">
        <TableHead15 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead17 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead18 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead19 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeadRow4 />
    </div>
  );
}

function ExpandMoreFilled2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ExpandMoreFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ExpandMoreFilled">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <ExpandMoreFilled2 />
    </div>
  );
}

function IconButton15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon12 />
    </div>
  );
}

function Image2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="image">
      <div className="col-1 h-[65px] ml-0 mt-0 relative row-1 w-[110px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="65" src={imgImage2} width="110" />
      </div>
      <div className="col-1 h-[64px] ml-[0.5px] mt-[0.5px] relative row-1 w-[109px]" data-name="Vector">
        <div className="absolute inset-[-0.78%_-0.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 65">
            <path d={svgPaths.p3565ea40} id="Vector" stroke="var(--stroke-0, #707070)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09c] text-[16px] underline">Config 2024: Design Craft</p>
    </div>
  );
}

function SubtitlesOutlined2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SubtitlesOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SubtitlesOutlined">
          <path d={svgPaths.p1a1e8980} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <SubtitlesOutlined2 />
    </div>
  );
}

function IconButton16() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip p-[8px] rounded-[100px] top-0" data-name="<IconButton>">
      <Icon13 />
    </div>
  );
}

function TipsandUpdatesOutlined2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TipsandUpdatesOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TipsandUpdatesOutlined">
          <path d={svgPaths.pa22b700} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <TipsandUpdatesOutlined2 />
    </div>
  );
}

function IconButton17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col items-center justify-center left-[44px] overflow-clip p-[8px] rounded-[100px] top-0" data-name="<IconButton>">
      <Icon14 />
    </div>
  );
}

function CoolTooltip() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[44px] overflow-clip px-[8px] py-[4px] rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] top-[44px]" data-name="<COOLTooltip>">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] text-center tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.5]">摘要及段落管理</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[84px]" data-name="影片工具列">
      <IconButton16 />
      <IconButton17 />
      <CoolTooltip />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[460px]">
      <Frame18 />
      <Component2 />
    </div>
  );
}

function ListVideo2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[97px] items-center p-[16px] relative shrink-0 w-[613.402px]" data-name="list video">
      <Image2 />
      <Frame19 />
    </div>
  );
}

function TableHead20() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-full items-center relative shrink-0 w-[646px]" data-name="<TableHead>">
      <IconButton15 />
      <ListVideo2 />
    </div>
  );
}

function MoreVertFilled4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MoreVertFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MoreVertFilled">
          <path d={svgPaths.p3fdba000} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <MoreVertFilled4 />
    </div>
  );
}

function IconButton18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon15 />
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0" data-name="Typography">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#069] text-[13px] tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        處理中
      </p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="<Chip>">
      <div className="content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[inherit]">
        <Typography2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#069] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TableHead21() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <Chip2 />
    </div>
  );
}

function TableHead22() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center justify-center p-[16px] relative shrink-0 w-[100px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        559
      </p>
    </div>
  );
}

function TableHead23() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2022/02/25 23:56
      </p>
    </div>
  );
}

function TableHead24() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[164px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2022/02/25 23:56
      </p>
    </div>
  );
}

function TableHead25() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-full items-center p-[16px] relative shrink-0 w-[112px]" data-name="<TableHead>">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        上傳或匯入
      </p>
    </div>
  );
}

function TableHeadRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1330px]" data-name="<TableHeadRow>">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <TableHead20 />
      </div>
      <IconButton18 />
      <div className="flex flex-row items-center self-stretch">
        <TableHead21 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead22 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead23 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead24 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHead25 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeadRow5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[459px] left-0 top-[128px] w-[1330px]">
      <Frame5 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute h-[600px] left-[108px] top-[96px] w-[1300px]" data-name="Main Container">
      <Tabs1 />
      <Frame4 />
      <Frame13 />
    </div>
  );
}

export default function Component41IconHover() {
  return (
    <div className="bg-white relative size-full" data-name="4.1 摘要管理 icon: hover">
      <Border />
      <MainContainer />
    </div>
  );
}