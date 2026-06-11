import svgPaths from "./svg-y9891qr4dr";
import imgImage17 from "figma:asset/aad540016b994e08430553d92c424db5899f87c6.png";

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
    <div className="col-1 content-stretch flex h-[22.641px] items-center ml-[130.67px] mt-[433.27px] relative row-1 w-[99.184px]" data-name="<Tooltip>">
      <Tooltip />
    </div>
  );
}

function Group() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] min-h-px min-w-px relative">
      <div className="col-1 h-[339.621px] ml-[3.94px] mt-0 row-1 w-[464.431px]" data-name="image 5" />
      <div className="col-1 h-[489.878px] ml-0 mt-0 relative row-1 w-[810px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <Tooltip1 />
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[192.86px] mt-[464.15px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "349.390625" } as React.CSSProperties}>
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
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[285.74px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "349.390625" } as React.CSSProperties}>
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
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[389.65px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "349.390625" } as React.CSSProperties}>
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
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[469.16px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "349.390625" } as React.CSSProperties}>
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
      <div className="col-1 flex h-[24.7px] items-center justify-center ml-[575.42px] mt-[465.18px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "349.390625" } as React.CSSProperties}>
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
      <div className="col-1 flex h-[25.729px] items-center justify-center ml-[161.37px] mt-[464.15px] relative row-1 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "349.390625" } as React.CSSProperties}>
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
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片摘要
      </p>
      <Tooltip2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="font-['Roboto:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Video Summary">
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

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px overflow-clip relative w-full">
      <Frame8 />
      <IconButton />
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-[rgba(51,51,51,0.04)] h-[132px] relative rounded-[4px] shrink-0 w-full" data-name="summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
          <Frame32 />
          <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(51,51,51,0.38)] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            查看更多
          </p>
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
      <div className="absolute bottom-0 h-0 left-0 right-[6px]" data-name="Line">
        <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(0, 153, 204, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 2">
            <line id="Line" stroke="var(--stroke-0, #0099CC)" strokeWidth="2" x2="59" y1="1" y2="1" />
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
    <div className="content-stretch flex flex-col gap-[16px] h-[896px] items-center pb-0 pt-[16px] px-[16px] relative shrink-0 w-[842px]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function InfoOutlined1() {
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

function Icon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
      <InfoOutlined1 />
    </div>
  );
}

function Tooltip3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tooltip">
      <Icon3 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片段落
      </p>
      <Tooltip3 />
    </div>
  );
}

function KeyboardArrowRightOutlined() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KeyboardArrowRightOutlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KeyboardArrowRightOutlined">
          <path d={svgPaths.p16e51a00} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="<Icon>">
      <KeyboardArrowRightOutlined />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Icon4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Header1 />
      <IconButton1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:10
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:10
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header3 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        兒童幸福感的定義與衡量
      </p>
    </div>
  );
}

function Header4() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:20
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header4 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        幸福感的影響因素
      </p>
    </div>
  );
}

function Header5() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:30
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header5 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        如何提升兒童的幸福感
      </p>
    </div>
  );
}

function Header6() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:40
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header6 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        幸福感與學業成績的關聯性
      </p>
    </div>
  );
}

function Header7() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:50
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header7 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        家庭環境對兒童幸福感的影響
      </p>
    </div>
  );
}

function Header8() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        01:00
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header8 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        社交技能對幸福感的重要性
      </p>
    </div>
  );
}

function Header9() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        01:10
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header9 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        文化差異與幸福感的比較
      </p>
    </div>
  );
}

function Header10() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        01:20
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header10 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        未來幸福感的預測與發展
      </p>
    </div>
  );
}

function Header11() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        02:15
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header11 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        人類與AI的協作
      </p>
    </div>
  );
}

function Header12() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        03:00
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header12 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        永續城市的設計理念
      </p>
    </div>
  );
}

function Header13() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        04:05
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header13 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        數位轉型的最佳實踐
      </p>
    </div>
  );
}

function Header14() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        05:30
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header14 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        文化多樣性與創新
      </p>
    </div>
  );
}

function Header15() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        06:45
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header15 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        心理健康與工作效率
      </p>
    </div>
  );
}

function Header16() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        07:50
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header16 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        教育科技的未來
      </p>
    </div>
  );
}

function Header17() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        08:10
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header17 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        物聯網與智慧家居
      </p>
    </div>
  );
}

function Header18() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        09:25
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header18 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        綠色能源的挑戰與機會
      </p>
    </div>
  );
}

function Header19() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10:40
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header19 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        社會企業的影響力
      </p>
    </div>
  );
}

function Header20() {
  return (
    <div className="bg-[rgba(0,153,204,0.04)] content-stretch flex h-[20px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Header">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[#006b8e] text-[12px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11:55
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Header20 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        虛擬現實的應用前景
      </p>
    </div>
  );
}

function Paper() {
  return (
    <div className="bg-white h-[911px] relative shrink-0 w-[265px]" data-name="<Paper>">
      <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-0 pt-[16px] px-[16px] relative rounded-[inherit] size-full">
        <Frame13 />
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <Header2 />
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            兒童幸福感的定義與衡量
          </p>
        </div>
        <Frame14 />
        <Frame15 />
        <Frame16 />
        <Frame17 />
        <Frame18 />
        <Frame19 />
        <Frame20 />
        <Frame21 />
        <Frame22 />
        <Frame23 />
        <Frame24 />
        <Frame25 />
        <Frame26 />
        <Frame27 />
        <Frame28 />
        <Frame29 />
        <Frame30 />
        <Frame31 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1107px]">
      <Frame10 />
      <Paper />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[896px] relative shrink-0 w-full">
      <Frame33 />
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

export default function MainContainer() {
  return (
    <div className="bg-white relative size-full" data-name="Main Container">
      <Frame />
      <Frame12 />
    </div>
  );
}