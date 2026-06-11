import svgPaths from "./svg-88eq2sozup";
import imgCanvasLeftPadding from "figma:asset/e3d46cb589f50dbfc110e323879c8910a3dc2259.png";
import imgCanvasLeftCoursePadding from "figma:asset/d92fa65de2a447bc16c699b671b0d9cab3465e0b.png";
import imgContainer from "figma:asset/40d6516d8419860fd036d8ee2c01b6d8ebce5bf4.png";

function LtiTopPadding() {
  return (
    <div className="absolute contents left-[108px] top-[72px]" data-name="LTI top padding">
      <div className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed h-[24px] left-[108px] right-[24px] top-[72px]" data-name="LTI top padding" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[calc(50%+30px)] text-[#ff81f4] text-[16px] top-[75px] w-[23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        24
      </p>
    </div>
  );
}

function LtiRightPadding() {
  return (
    <div className="absolute contents right-[24px] top-[72px]" data-name="LTI right padding">
      <div className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed bottom-0 right-[24px] top-[72px] w-[8px]" data-name="LTI right padding" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] right-[33px] text-[#ff81f4] text-[16px] top-[calc(50%+26px)] translate-x-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        8
      </p>
    </div>
  );
}

function LtiBottomPadding() {
  return (
    <div className="absolute bottom-0 contents left-[108px]" data-name="LTI bottom padding">
      <div className="absolute bg-[rgba(255,200,250,0.3)] border border-[#ffc8fa] border-dashed bottom-0 h-[24px] left-[108px] right-[32px]" data-name="LTI bottom padding" />
      <p className="absolute bottom-[22px] font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[normal] left-[calc(50%+26px)] text-[#ff81f4] text-[16px] translate-y-full w-[23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        24
      </p>
    </div>
  );
}

function TopNav() {
  return (
    <div className="absolute h-[72px] left-[84px] right-0 top-0" data-name="top nav">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1356 72">
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
      <div className="absolute bottom-0 left-[276px] top-[72px] w-[24px]" data-name="canvas left padding">
        <img alt="" className="absolute block max-w-none size-full" height="648" src={imgCanvasLeftPadding} width="24" />
      </div>
      <div className="absolute bottom-0 left-[84px] top-[72px] w-[192px]" data-name="canvas left course padding">
        <img alt="" className="absolute block max-w-none size-full" height="648" src={imgCanvasLeftCoursePadding} width="192" />
      </div>
      <TopNav />
      <div className="absolute bg-[#036] bottom-0 left-0 top-0 w-[84px]" data-name="global nav" />
    </div>
  );
}

function MaskedIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <div className="absolute left-[-4px] size-[20px] top-0" data-name="Icon Left" />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        回到影片管理
      </p>
    </div>
  );
}

function SummaryRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Summary Row">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[154px]" data-name="Back Button">
        <div className="relative rounded-[4px] shrink-0 w-full" data-name="<Button>">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
              <Base />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] w-[223px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">Week 1: 電影的聲音</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[rgba(51,51,51,0.6)] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        摘要管理
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#09c] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        分段管理
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
        <Container1 />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
        <Container2 />
        <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 2">
              <line id="Line" stroke="var(--stroke-0, #0099CC)" strokeWidth="2" x2="97" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Summary Container">
      <SummaryRow />
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="<Tabs>">
        <Container />
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1108 1">
              <line id="divider" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="1108" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 top-0 w-[1108px]" data-name="Summary Header">
      <SummaryContainer />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M8 4L26.6667 16L8 28V4Z" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[5px] pr-px py-px relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[261px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgContainer} />
      </div>
      <Button />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Group">
          <path d={svgPaths.p33ff100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.17%_16.67%_12.5%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
        <g id="Group">
          <path d={svgPaths.pe59be00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d5cad00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.17%_16.67%_12.5%_16.67%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="PlayCircleFilled">
          <Group />
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="ReplayFilled">
          <div className="absolute inset-[4.17%_16.67%_12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
              <path d={svgPaths.p22c0ab40} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Forward5Filled">
          <Group1 />
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[8px] text-white tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5:33 / 1:36:20
      </p>
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#6a7282] h-[6px] left-0 rounded-[16777200px] top-0 w-[257.211px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#3c9eea] h-[6px] left-0 rounded-[16777200px] top-0 w-[24.695px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[0.11px] top-0 w-[2px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[0.11px] top-0 w-[2px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[36.82px] top-0 w-[2px]" data-name="Container" />;
}

function Container14() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[36.82px] top-0 w-[2px]" data-name="Container" />;
}

function Container15() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[69.09px] top-0 w-[2px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[69.09px] top-0 w-[2px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[107.28px] top-0 w-[2px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[107.28px] top-0 w-[2px]" data-name="Container" />;
}

function Container19() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[142.14px] top-0 w-[2px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[142.14px] top-0 w-[2px]" data-name="Container" />;
}

function Container21() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[199.25px] top-0 w-[2px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[199.25px] top-0 w-[2px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[259.32px] top-0 w-[2px]" data-name="Container" />;
}

function Container24() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[259.32px] top-0 w-[2px]" data-name="Container" />;
}

function Container25() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[311.61px] top-0 w-[2px]" data-name="Container" />;
}

function Container26() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[311.61px] top-0 w-[2px]" data-name="Container" />;
}

function Container27() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[366.87px] top-0 w-[2px]" data-name="Container" />;
}

function Container28() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[366.87px] top-0 w-[2px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[399.5px] top-0 w-[2px]" data-name="Container" />;
}

function Container30() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[399.5px] top-0 w-[2px]" data-name="Container" />;
}

function Container31() {
  return <div className="absolute h-[6px] left-[1.11px] top-0 w-[36.711px]" data-name="Container" />;
}

function Container32() {
  return <div className="absolute h-[6px] left-[37.82px] top-0 w-[32.258px]" data-name="Container" />;
}

function Container33() {
  return <div className="absolute h-[6px] left-[70.09px] top-0 w-[38.195px]" data-name="Container" />;
}

function Container34() {
  return <div className="absolute h-[6px] left-[108.28px] top-0 w-[34.852px]" data-name="Container" />;
}

function Container35() {
  return <div className="absolute h-[6px] left-[143.14px] top-0 w-[57.102px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute h-[6px] left-[200.25px] top-0 w-[60.07px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute h-[6px] left-[260.32px] top-0 w-[52.281px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute h-[6px] left-[312.61px] top-0 w-[55.25px]" data-name="Container" />;
}

function Container39() {
  return <div className="absolute h-[6px] left-[367.87px] top-0 w-[32.633px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute h-[6px] left-[400.5px] top-0 w-[28.18px]" data-name="Container" />;
}

function Container41() {
  return <div className="absolute bg-[#3c9eea] left-[17.7px] rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[14px] top-[-4px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="bg-[#4a5565] flex-[1_0_0] h-[6px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[29.17%_20.83%_29.17%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6.66667">
        <g id="Group">
          <path d={svgPaths.p1e495000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[29.17%_20.83%_29.17%_16.67%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[10%_11.09%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4507 12.8">
        <g id="Group">
          <path d={svgPaths.p14766500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="VolumeUpFilled">
          <div className="absolute inset-[13.46%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.6933">
              <path d={svgPaths.p1124ec80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="1xMobiledataFilled">
          <Group3 />
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="SubtitlesFilled">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
              <path d={svgPaths.p17bd4380} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="SettingsFilled">
          <Group5 />
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="<Icon>">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="FullscreenFilled">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p4fe5600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Container7 />
          <Container8 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[4px] w-[592px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function VideoDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Video Details">
      <p className="leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片課程
      </p>
      <p className="leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        專題研究 (CSIE7990-60)
      </p>
    </div>
  );
}

function VideoDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Video Details">
      <p className="leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片名稱
      </p>
      <p className="leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Week 1: 電影的聲音
      </p>
    </div>
  );
}

function VideoInfo() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full" data-name="Video Info">
      <div className="content-stretch flex flex-col font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal gap-[16px] items-start p-[16px] relative w-full">
        <VideoDetails />
        <VideoDetails1 />
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative rounded-[4px] w-full" data-name="Video Section">
      <Container3 />
      <VideoInfo />
    </div>
  );
}

function EditorSection1() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[624px]" data-name="Editor Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <VideoSection />
        </div>
      </div>
    </div>
  );
}

function MaskedIcon1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-1px)] overflow-clip size-[18px] top-1/2" data-name="Icon Left">
        <div className="absolute inset-[8.33%_8.33%_4.16%_4.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7519 15.7519">
            <path d={svgPaths.p3ab96d00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon1 />
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        新增 AI 分段
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="<Button>">
        <Base1 />
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tooltip">
        <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="InfoOutlined">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p19ecbc00} fill="var(--fill-0, #006699)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskedIcon2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] overflow-clip size-[18px] top-0" data-name="DoNotDisturbFilled">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p3500b800} fill="var(--fill-0, #333333)" fillOpacity="0.6" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon2 />
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        未發佈
      </p>
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Header Container">
      <Frame4 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<Button>">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
          <Base2 />
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <HeaderContainer1 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[250px]" data-name="Title">
      <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[14px] text-[rgba(51,51,51,0.6)] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        標題
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[14px] text-[rgba(51,51,51,0.6)] tracking-[0.17px] w-[104px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        開始時間
      </p>
      <Title />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:05:30
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.34%_8.32%_8.32%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 11.001">
              <path d={svgPaths.p1cc58700} id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d="M0.5 0.5L2 2" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-[20.83%] right-[79.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[79.17%] right-[20.83%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_83.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-50%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
              <path d="M0.5 0.5V1.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_70.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_33.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_54.17%_87.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
              <path d="M1.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[10px] relative shrink-0 w-[9.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[10px] left-0 text-[#09c] text-[10px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[rgba(0,153,204,0.08)] content-stretch flex gap-[4px] h-[16px] items-center px-[6px] relative rounded-[4px] shrink-0 w-[37.461px]" data-name="Container">
      <Icon1 />
      <Text />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-[24px] min-w-px overflow-clip py-[8px] relative" data-name="Content">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        兒童幸福感的定義
      </p>
      <Container43 />
    </div>
  );
}

function Input2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[12px] relative w-full">
        <Content1 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <Input2 />
    </div>
  );
}

function Box() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
      <Input1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:30:30
      </p>
    </div>
  );
}

function Input3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.34%_8.32%_8.32%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 11.001">
              <path d={svgPaths.p1cc58700} id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d="M0.5 0.5L2 2" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-[20.83%] right-[79.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[79.17%] right-[20.83%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_83.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-50%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
              <path d="M0.5 0.5V1.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_70.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_33.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_54.17%_87.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
              <path d="M1.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[9.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[10px] left-0 text-[#09c] text-[10px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI
        </p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(0,153,204,0.08)] content-stretch flex gap-[4px] h-[16px] items-center px-[6px] relative rounded-[4px] shrink-0 w-[37.461px]" data-name="Container">
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-[24px] min-w-px overflow-clip py-[8px] relative" data-name="Content">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        兒童期幸福感的發展
      </p>
      <Container44 />
    </div>
  );
}

function Input5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[12px] relative w-full">
        <Content3 />
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <Input5 />
    </div>
  );
}

function Box1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
      <Input4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:40:45
      </p>
    </div>
  );
}

function Input6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Content4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.34%_8.32%_8.32%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 11.001">
              <path d={svgPaths.p1cc58700} id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d="M0.5 0.5L2 2" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-[20.83%] right-[79.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[79.17%] right-[20.83%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_83.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-50%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
              <path d="M0.5 0.5V1.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_70.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_33.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_54.17%_87.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
              <path d="M1.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[10px] relative shrink-0 w-[9.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[10px] left-0 text-[#09c] text-[10px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI
        </p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[rgba(0,153,204,0.08)] content-stretch flex gap-[4px] h-[16px] items-center px-[6px] relative rounded-[4px] shrink-0 w-[37.461px]" data-name="Container">
      <Icon3 />
      <Text2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-[24px] min-w-px overflow-clip py-[8px] relative" data-name="Content">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        影響兒童幸福感的因素
      </p>
      <Container45 />
    </div>
  );
}

function Input8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[12px] relative w-full">
        <Content5 />
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <Input8 />
    </div>
  );
}

function Box2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
      <Input7 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:50:20
      </p>
    </div>
  );
}

function Input9() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Content6 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.34%_8.32%_8.32%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 11.001">
              <path d={svgPaths.p1cc58700} id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d="M0.5 0.5L2 2" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-[20.83%] right-[79.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[79.17%] right-[20.83%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_83.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-50%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
              <path d="M0.5 0.5V1.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_70.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_33.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_54.17%_87.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
              <path d="M1.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[10px] relative shrink-0 w-[9.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[10px] left-0 text-[#09c] text-[10px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI
        </p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(0,153,204,0.08)] content-stretch flex gap-[4px] h-[16px] items-center px-[6px] relative rounded-[4px] shrink-0 w-[37.461px]" data-name="Container">
      <Icon4 />
      <Text3 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-[24px] min-w-px overflow-clip py-[8px] relative" data-name="Content">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        家庭環境
      </p>
      <Container46 />
    </div>
  );
}

function Input11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[12px] relative w-full">
        <Content7 />
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <Input11 />
    </div>
  );
}

function Box3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
      <Input10 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#333] text-[16px] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00:59:10
      </p>
    </div>
  );
}

function Input12() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <Content8 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.34%_8.32%_8.32%_8.34%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 11.001">
              <path d={svgPaths.p1cc58700} id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-33.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 2.5">
              <path d="M0.5 0.5L2 2" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-[20.83%] right-[79.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[79.17%] right-[20.83%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
              <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_83.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-50%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
              <path d="M0.5 0.5V1.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_70.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_33.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
              <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_54.17%_87.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
              <path d="M1.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0099CC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[10px] relative shrink-0 w-[9.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[10px] left-0 text-[#09c] text-[10px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI
        </p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[rgba(0,153,204,0.08)] content-stretch flex gap-[4px] h-[16px] items-center px-[6px] relative rounded-[4px] shrink-0 w-[37.461px]" data-name="Container">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-[24px] min-w-px overflow-clip py-[8px] relative" data-name="Content">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        社交關係
      </p>
      <Container47 />
    </div>
  );
}

function Input14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start px-[12px] relative w-full">
        <Content9 />
      </div>
    </div>
  );
}

function Input13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Input">
      <Input14 />
    </div>
  );
}

function Box4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Box">
      <Input13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 top-0 w-[100px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="icon button - AI 品質良好">
        <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ThumbUpOff AltFilled">
              <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
                  <path d={svgPaths.p9c74300} fill="var(--fill-0, #BDBDBD)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TooltipFeedback">
        <div className="bg-white relative rounded-[4px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<COOLTooltip>">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] text-center tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.5]">AI 品質良好</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[30px]" data-name="icon button - AI 品質良好">
        <Frame5 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="icon button - AI 品質不佳">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ThumbDownOff AltFilled">
              <div className="absolute inset-[16.67%_8.33%_8.33%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
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

function MaskedIcon3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon">
      <div className="absolute left-[-2px] overflow-clip size-[18px] top-0" data-name="ControlPointFilled">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p19b65b00} fill="var(--fill-0, #333333)" fillOpacity="0.6" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <MaskedIcon3 />
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        新增分段
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Frame6 />
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
            <Base3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Base4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#09c] text-[15px] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        取消
      </p>
    </div>
  );
}

function Base5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#09c] text-[15px] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        儲存並發佈
      </p>
    </div>
  );
}

function Base6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        儲存
      </p>
    </div>
  );
}

function SaveButtons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Save Buttons">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end px-[16px] relative w-full">
          <div className="relative rounded-[4px] shrink-0" data-name="Save Button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <Base4 />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="relative rounded-[4px] shrink-0" data-name="Save Button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <Base5 />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="Save Button">
            <Base6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorSection2() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0 w-[436px]" data-name="Editor Section">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center py-[16px] relative size-full">
          <HeaderContainer />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436 1">
                <line id="Line 135" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="436" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip px-[16px] relative w-[436px]" data-name="ChapterEditor Container">
            <Row />
            <div className="bg-white content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[104px]" data-name="<COOLTextField>">
                <Input />
              </div>
              <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Component 1">
                <Box />
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                    <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                        <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[104px]" data-name="<COOLTextField>">
                <Input3 />
              </div>
              <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Component 1">
                <Box1 />
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                    <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                        <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[104px]" data-name="<COOLTextField>">
                <Input6 />
              </div>
              <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Component 1">
                <Box2 />
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                    <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                        <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[104px]" data-name="<COOLTextField>">
                <Input9 />
              </div>
              <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Component 1">
                <Box3 />
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                    <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                        <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[104px]" data-name="<COOLTextField>">
                <Input12 />
              </div>
              <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Component 1">
                <Box4 />
              </div>
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DeleteFilled">
                    <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
                        <path d={svgPaths.p25fbc800} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436 1">
                <line id="Line 135" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="436" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Row1 />
          <SaveButtons />
        </div>
      </div>
    </div>
  );
}

function EditorSection() {
  return (
    <div className="absolute content-stretch flex h-[476px] items-start justify-between left-0 px-[16px] top-[124px] w-[1108px]" data-name="Editor Section">
      <EditorSection1 />
      <EditorSection2 />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Cell #2">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        您對 AI 生成的內容滿意嗎？
      </p>
      <div className="content-stretch flex items-center relative shrink-0" data-name="<Rating>">
        <div className="relative shrink-0 size-[30px]" data-name="Star #1">
          <div className="absolute inset-0 overflow-clip" data-name="StarSharp">
            <div className="absolute inset-[10.42%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.75">
                <path d={svgPaths.p1a3b1300} fill="var(--fill-0, #FFB400)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[30px]" data-name="Star #2">
          <div className="absolute inset-0 overflow-clip" data-name="StarSharp">
            <div className="absolute inset-[10.42%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.75">
                <path d={svgPaths.p1a3b1300} fill="var(--fill-0, #FFB400)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[30px]" data-name="Star #3">
          <div className="absolute inset-0 overflow-clip" data-name="StarOutlineFilled">
            <div className="absolute inset-[10.42%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.75">
                <path d={svgPaths.p23c02df0} fill="var(--fill-0, black)" fillOpacity="0.23" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[30px]" data-name="Star #4">
          <div className="absolute inset-0 overflow-clip" data-name="StarOutlineFilled">
            <div className="absolute inset-[10.42%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.75">
                <path d={svgPaths.p23c02df0} fill="var(--fill-0, black)" fillOpacity="0.23" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 size-[30px]" data-name="Star #5">
          <div className="absolute inset-0 overflow-clip" data-name="StarOutlineFilled">
            <div className="absolute inset-[10.42%_8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.75">
                <path d={svgPaths.p23c02df0} fill="var(--fill-0, black)" fillOpacity="0.23" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Base7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        中文
      </p>
    </div>
  );
}

function Base8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        英文
      </p>
    </div>
  );
}

function Base9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        中英雙語
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[16px] items-start min-h-px min-w-px relative">
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base7 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base8 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base9 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Cell #2">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        此回饋主要針對哪個語言？(可複選)
      </p>
      <Frame2 />
    </div>
  );
}

function Base10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        時間軸不準確
      </p>
    </div>
  );
}

function Base11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        分段過於細碎
      </p>
    </div>
  );
}

function Base12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        漏掉部分段落
      </p>
    </div>
  );
}

function Base13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        標題與內容不符
      </p>
    </div>
  );
}

function Base14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        專有名詞錯誤
      </p>
    </div>
  );
}

function Base15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        出現未提及內容
      </p>
    </div>
  );
}

function Base16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        中英對應不齊
      </p>
    </div>
  );
}

function Base17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-[rgba(51,51,51,0.6)] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        LaTeX 錯誤
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[16px] items-start min-h-px min-w-px relative">
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base10 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base11 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base12 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base13 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base14 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base15 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base16 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Action #2">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
          <Base17 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Cell #2">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        此次有遇到哪些 AI 問題？ (可複選)
      </p>
      <Frame3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] min-h-px min-w-px relative text-[14px] text-[rgba(51,51,51,0.38)] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        例如：某個專業術語翻譯不準確、或是希望支援特定的 LaTeX 語法...
      </p>
    </div>
  );
}

function Input15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Content10 />
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Cell #2">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        補充建議
      </p>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="<COOLTextField>">
        <Input15 />
      </div>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="<DialogContent>">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Cell />
          <Cell1 />
          <Cell2 />
          <Cell3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Base18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#09c] text-[16px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        取消
      </p>
    </div>
  );
}

function Base19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        確定
      </p>
    </div>
  );
}

function DialogElements() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Dialog Elements">
      <div className="relative shrink-0 w-full" data-name="<DialogTitle>">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.235] relative shrink-0 text-[#333] text-[20px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            AI 分段品質回饋
          </p>
        </div>
      </div>
      <DialogContent />
      <div className="relative shrink-0 w-full" data-name="<COOLDialogActions>">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[8px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Action #2">
              <Base18 />
            </div>
            <div className="bg-[#09c] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="Action #1">
              <Base19 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paper() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[4px] shadow-[0px_9px_46px_8px_rgba(0,0,0,0.12),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_11px_15px_-7px_rgba(0,0,0,0.2)] w-full" data-name="<Paper>">
      <DialogElements />
    </div>
  );
}

function DialogAi() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[570px] items-start left-[calc(50%+137px)] top-[calc(50%+36px)] w-[600px]" data-name="Dialog - AI 摘要品質回饋">
      <Paper />
    </div>
  );
}

export default function Component31Ai() {
  return (
    <div className="bg-white relative size-full" data-name="3.1 點擊後，彈出 AI 品質回饋">
      <Border />
      <div className="absolute bg-[#fafafa] h-[600px] overflow-clip right-[32px] top-[96px] w-[1108px]" data-name="Main Container">
        <SummaryHeader />
        <EditorSection />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-0 h-[648px] left-[299px] w-[1117px]" data-name="mask" />
      <DialogAi />
    </div>
  );
}