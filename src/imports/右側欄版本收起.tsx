import svgPaths from "./svg-9lzvz4szia";
import imgCanvasLeftPadding from "figma:asset/12ce3fe9dc6d24fae3223fb86dad2cdeb2e9f7ba.png";
import imgCanvasLeftCoursePadding from "figma:asset/bf60c74035f76bf2a6e66f3366b54362e713a87b.png";
import imgImage17 from "figma:asset/aad540016b994e08430553d92c424db5899f87c6.png";

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
    <div className="absolute h-[1382px] left-0 top-0 w-[1440px]" data-name="Border">
      <LtiTopPadding />
      <LtiRightPadding />
      <LtiBottomPadding />
      <div className="absolute bg-[rgba(195,222,183,0.3)] border border-[#c3deb7] border-dashed bottom-0 right-0 top-[72px] w-[24px]" data-name="canvas right padding" />
      <div className="absolute bottom-0 left-[276px] top-[72px] w-[24px]" data-name="canvas left padding">
        <img alt="" className="block max-w-none size-full" height="1310" src={imgCanvasLeftPadding} width="24" />
      </div>
      <div className="absolute bottom-0 left-[84px] top-[72px] w-[192px]" data-name="canvas left course padding">
        <img alt="" className="block max-w-none size-full" height="1310" src={imgCanvasLeftCoursePadding} width="192" />
      </div>
      <TopNav />
      <div className="absolute bg-[#036] bottom-0 left-0 top-0 w-[84px]" data-name="global nav" />
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[130.412px] left-[calc(8.33%+77.75px)] top-[742px] w-[327.284px]" data-name="Frame" />;
}

function IconLeft() {
  return (
    <div className="absolute left-[-4px] size-[20px] top-0" data-name="Icon Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Left">
          <path d={svgPaths.p19eaa580} fill="var(--fill-0, #0099CC)" id="Vector" />
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
      <p className="css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        回到影片管理
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="<Button>">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
          <Base />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Button>">
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button1 />
    </div>
  );
}

function HelpOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="help_outline">
          <path d={svgPaths.pe593d70} fill="var(--fill-0, #006699)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <HelpOutline />
    </div>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="helper">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片播放問題排解
      </p>
      <Icon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame1 />
          <Helper />
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-[rgba(97,97,97,0.9)] content-stretch flex items-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tooltip">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[14px]">兒童幸福感的定義與衡量</p>
      </div>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="col-1 content-stretch flex h-[22.641px] items-center ml-[160.84px] mt-[433.27px] relative row-1 w-[122.082px]" data-name="<Tooltip>">
      <Tooltip />
    </div>
  );
}

function Group() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <div className="col-1 h-[339.621px] ml-[4.84px] mt-0 row-1 w-[571.652px]" data-name="image 5" />
      <div className="col-1 h-[489.878px] ml-0 mt-0 relative row-1 w-[997px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <Tooltip1 />
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[237.38px] mt-[464.15px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "112.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24.7px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6997 4">
                <line id="Line 138" stroke="var(--stroke-0, #3C9EEA)" strokeOpacity="0.5" strokeWidth="4" x2="24.6997" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[351.71px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "112.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24.7px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6997 4">
                <line id="Line 138" stroke="var(--stroke-0, #3C9EEA)" strokeOpacity="0.5" strokeWidth="4" x2="24.6997" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[479.6px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "112.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24.7px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6997 4">
                <line id="Line 138" stroke="var(--stroke-0, #3C9EEA)" strokeOpacity="0.5" strokeWidth="4" x2="24.6997" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[577.46px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "112.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24.7px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6997 4">
                <line id="Line 138" stroke="var(--stroke-0, #3C9EEA)" strokeOpacity="0.5" strokeWidth="4" x2="24.6997" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[708.27px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "112.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[24.7px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6997 4">
                <line id="Line 138" stroke="var(--stroke-0, #3C9EEA)" strokeOpacity="0.5" strokeWidth="4" x2="24.6997" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[25.729px] items-center justify-center ml-[198.62px] mt-[464.15px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "112.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[25.729px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7289 4">
                <line id="Line 139" stroke="var(--stroke-0, #495466)" strokeOpacity="0.5" strokeWidth="4" x2="25.7289" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group />
    </div>
  );
}

function InfoOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="InfoOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="InfoOutlined">
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #006699)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <InfoOutlined />
    </div>
  );
}

function Tooltip2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tooltip">
      <Icon1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(51,51,51,0.6)] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片摘要
      </p>
      <Tooltip2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="font-['Roboto:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn mb-0">Summary</p>
        <p className="css-4hzbpn mb-0">This video teaches you how to use Power BI to transform large datasets into interactive charts. It covers everything from data import and formatting to cross-table calculations, and demonstrates the use of visualization design and filtering features.</p>
        <p className="css-4hzbpn mb-0">
          <br aria-hidden="true" />
          Highlights
        </p>
        <p className="css-4hzbpn mb-0">The video introduces how to perform data analysis using Power BI, especially how to import data from Excel and prepare it for visualization.</p>
        <p className="css-4hzbpn mb-0">Introduces the Power BI software and explains its function of transforming large datasets into visually appealing interactive charts to help users understand the data context.</p>
        <p className="css-4hzbpn mb-0">Guides viewers through downloading and installing Power BI, and shows how to get started with data analysis.</p>
        <p className="css-4hzbpn mb-0">Uses Excel as an example to explain how to check and format the Excel sheet before importing to ensure data cleanliness.</p>
        <p className="css-4hzbpn mb-0">Explains how Power BI automatically converts each Excel worksheet into a separate table and offers suggestions for handling multiple data segments.</p>
        <p className="css-4hzbpn mb-0">Demonstrates how to select and import the created Excel tables into Power BI and verify the available data list.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">總結</p>
        <p className="css-4hzbpn mb-0">這部影片教你如何使用 Power BI 將大量數據轉換成互動式圖表，從資料導入、格式化到跨表計算，並展示了視覺化設計與篩選功能的應用。</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">亮點</p>
        <p className="css-4hzbpn mb-0">這段影片介紹了如何使用 Power BI 進行數據分析，特別是如何從 Excel 匯入數據並準備進行可視化。- 簡介 Power BI 軟體，說明其功能是將大量數據轉換成美觀的互動圖表，幫助使用者理解數據的背景。</p>
        <p className="css-4hzbpn mb-0">- 指導觀眾如何下載並安裝 Power BI，並介紹如何開始使用該軟體進行數據分析。</p>
        <p className="css-4hzbpn mb-0">- 以 Excel 為例，說明在導入數據前需要對 Excel 表格進行簡單的格式檢查，以確保數據的整齊性。</p>
        <p className="css-4hzbpn mb-0">- 解釋 Power BI 如何自動將 Excel 的每個工作表轉換為獨立的表格，並提供如何處理多個數據片段的建議。</p>
        <p className="css-4hzbpn">- 展示如何在 Power BI 中選擇剛剛創建的 Excel 表格進行數據匯入，並確認可用的數據列表。</p>
      </div>
    </div>
  );
}

function VideoSummary() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Video Summary">
      <Header />
      <Container />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <VideoSummary />
    </div>
  );
}

function KeyboardArrowUpFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KeyboardArrowUpFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KeyboardArrowUpFilled">
          <path d={svgPaths.p3053c630} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <KeyboardArrowUpFilled />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon2 />
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[rgba(51,51,51,0.04)] h-[132px] relative rounded-[4px] shrink-0 w-full" data-name="summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between p-[16px] relative size-full">
          <Frame8 />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Summary />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip px-0 py-[8px] relative shrink-0 w-full" data-name="Content">
      <div className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(51,51,51,0.6)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn mb-0">使用Shift + Enter 或 Enter換行</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-0 relative size-full">
        <Content />
      </div>
    </div>
  );
}

function CoolTextField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[12px] pt-0 px-0 relative self-stretch" data-name="<COOLTextField>">
      <Input />
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize css-ew64yg font-['Roboto:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        留言
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#09c] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<Button>">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[4px] relative w-full">
          <Base1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] pr-0 py-0 relative shrink-0 w-[71px]">
      <Button2 />
    </div>
  );
}

function Hidden() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_hidden">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="_hidden">
          <path d={svgPaths.p16bd2a80} fill="var(--fill-0, #333333)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Padding() {
  return (
    <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-name="Padding">
      <Hidden />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="<Checkbox>">
      <Padding />
    </div>
  );
}

function FormLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<FormLabel>">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        匿名
      </p>
    </div>
  );
}

function FormControlLabelCheckbox() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<FormControlLabel> | Checkbox">
      <Checkbox />
      <FormLabel />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[71px]">
      <Frame5 />
      <FormControlLabelCheckbox />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <CoolTextField />
      <Frame3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#09c] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        評論
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
      <Container1 />
      <div className="absolute bottom-0 h-0 left-0 right-[-12px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(0, 153, 204, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 2">
            <line id="Line" stroke="var(--stroke-0, #0099CC)" strokeWidth="2" x2="77" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        觀看紀錄
      </p>
    </div>
  );
}

function Tab1() {
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
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[1107px]" data-name="<Tabs>">
      <Container3 />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1107 1">
            <line id="Line 136" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="1107" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="<Tabs>">
      <Tabs />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.334] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Underkoffler_ Pointing to the future of UI
      </p>
      <Frame9 />
      <Frame4 />
      <Tabs1 />
      <p className="css-4hzbpn font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        此影片目前沒有任何留言
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] h-[896px] min-h-px min-w-px relative">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-0 pt-[16px] px-[16px] relative size-full">
          <Frame7 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowLeftOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KeyboardArrowLeftOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KeyboardArrowLeftOutlined">
          <path d={svgPaths.p8d2f900} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <KeyboardArrowLeftOutlined />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon3 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片段落
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <IconButton1 />
      <Header1 />
    </div>
  );
}

function Paper() {
  return (
    <div className="bg-white h-[911px] relative shrink-0 w-[78px]" data-name="<Paper>">
      <div className="content-stretch flex flex-col items-center overflow-clip pb-0 pt-[16px] px-0 relative rounded-[inherit] size-full">
        <Frame13 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[896px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Paper />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1107px]">
      <Frame2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1107 1">
            <line id="Line 136" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="1107" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white h-[963px] left-[301px] overflow-clip top-[96px] w-[1107px]" data-name="Main Container">
      <Frame />
      <Frame12 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="右側欄版本 (收起)">
      <Border />
      <MainContainer />
    </div>
  );
}