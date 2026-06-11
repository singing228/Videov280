import svgPaths from "./svg-tsyo4jwscf";
import imgCanvasLeftPadding from "figma:asset/43613c93a52ec2dc16a661c868bdd82d1e40dec5.png";
import imgCanvasLeftCoursePadding from "figma:asset/962ec2a61a24ce6c54f2a3162e474bbcfb006dbd.png";
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
    <div className="absolute contents left-[84px] right-0 top-0" data-name="top nav">
      <div className="absolute bg-white h-[72px] left-[84px] right-0 top-0" data-name="top nav" />
      <div className="absolute h-0 left-[108px] right-[24px] top-[72px]" data-name="top nav lbottom ine">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1308 1">
            <line id="top nav lbottom ine" stroke="var(--stroke-0, #CCCCCC)" x2="1308" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
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

function Helper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="helper">
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片播放問題排解
      </p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3bfea80} fill="var(--fill-0, #006699)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[154px]" data-name="Button">
            <div className="relative rounded-[4px] shrink-0 w-full" data-name="<Button>">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative w-full">
                  <Base />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,153,204,0.5)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
          </div>
          <Helper />
        </div>
      </div>
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

function Container2() {
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
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[456px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
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

function Container4() {
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

function Container6() {
  return <div className="absolute bg-[#6a7282] h-[6px] left-0 rounded-[16777200px] top-0 w-[257.211px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[#3c9eea] h-[6px] left-0 rounded-[16777200px] top-0 w-[24.695px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[0.11px] top-0 w-[2px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[0.11px] top-0 w-[2px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[36.82px] top-0 w-[2px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[36.82px] top-0 w-[2px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[69.09px] top-0 w-[2px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[69.09px] top-0 w-[2px]" data-name="Container" />;
}

function Container14() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[107.28px] top-0 w-[2px]" data-name="Container" />;
}

function Container15() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[107.28px] top-0 w-[2px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[142.14px] top-0 w-[2px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[142.14px] top-0 w-[2px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[199.25px] top-0 w-[2px]" data-name="Container" />;
}

function Container19() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[199.25px] top-0 w-[2px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[259.32px] top-0 w-[2px]" data-name="Container" />;
}

function Container21() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[259.32px] top-0 w-[2px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[311.61px] top-0 w-[2px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[311.61px] top-0 w-[2px]" data-name="Container" />;
}

function Container24() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[366.87px] top-0 w-[2px]" data-name="Container" />;
}

function Container25() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[366.87px] top-0 w-[2px]" data-name="Container" />;
}

function Container26() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[399.5px] top-0 w-[2px]" data-name="Container" />;
}

function Container27() {
  return <div className="absolute bg-[#1a1a1a] h-[6px] left-[399.5px] top-0 w-[2px]" data-name="Container" />;
}

function Container28() {
  return <div className="absolute h-[6px] left-[1.11px] top-0 w-[36.711px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute h-[6px] left-[37.82px] top-0 w-[32.258px]" data-name="Container" />;
}

function Container30() {
  return <div className="absolute h-[6px] left-[70.09px] top-0 w-[38.195px]" data-name="Container" />;
}

function Container31() {
  return <div className="absolute h-[6px] left-[108.28px] top-0 w-[34.852px]" data-name="Container" />;
}

function Container32() {
  return <div className="absolute h-[6px] left-[143.14px] top-0 w-[57.102px]" data-name="Container" />;
}

function Container33() {
  return <div className="absolute h-[6px] left-[200.25px] top-0 w-[60.07px]" data-name="Container" />;
}

function Container34() {
  return <div className="absolute h-[6px] left-[260.32px] top-0 w-[52.281px]" data-name="Container" />;
}

function Container35() {
  return <div className="absolute h-[6px] left-[312.61px] top-0 w-[55.25px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute h-[6px] left-[367.87px] top-0 w-[32.633px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute h-[6px] left-[400.5px] top-0 w-[28.18px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute bg-[#3c9eea] left-[17.7px] rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[14px] top-[-4px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="bg-[#4a5565] flex-[1_0_0] h-[6px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
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

function Container39() {
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

function Container3() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Container4 />
          <Container5 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function VideoPlayer() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[488px] items-start justify-end overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Video Player">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片摘要
      </p>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="InfoOutlined">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p36290900} fill="var(--fill-0, #006699)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Header">
      <Frame7 />
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.66] relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        此內容可能是透過 AI 生成，實際內容請以老師授課為主
      </p>
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Title Row">
      <Header1 />
      <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="KeyboardArrowUpFilled">
            <div className="absolute bottom-[35.79%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6.175">
                <path d={svgPaths.p18f8f480} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DescriptionRow() {
  return (
    <div className="content-stretch flex h-[64px] items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Description Row">
      <div className="font-['Roboto:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal h-full leading-[0] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-[965px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] mb-0">Summary</p>
        <p className="leading-[1.43] mb-0">This video teaches you how to use Power BI to transform large datasets into interactive charts. It covers everything from data import and formatting to cross-table calculations, and demonstrates the use of visualization design and filtering features.This video teaches you how to use Power BI to transform large datasets into interactive charts. It covers everything from data import and formatting to cross-table calculations, and demonstrates the use of visualization design and filtering features.</p>
        <p className="leading-[1.43] mb-0">The video introduces how to perform data analysis using Power BI, especially how to import data from Excel and prepare it for visualization.</p>
        <p className="leading-[1.43] mb-0">Introduces the Power BI software and explains its function of transforming large datasets into visually appealing interactive charts to help users understand the data context.</p>
        <p className="leading-[1.43] mb-0">Guides viewers through downloading and installing Power BI, and shows how to get started with data analysis.</p>
        <p className="leading-[1.43] mb-0">Uses Excel as an example to explain how to check and format the Excel sheet before importing to ensure data cleanliness.</p>
        <p className="leading-[1.43] mb-0">Explains how Power BI automatically converts each Excel worksheet into a separate table and offers suggestions for handling multiple data segments.</p>
        <p className="leading-[1.43] mb-0">Demonstrates how to select and import the created Excel tables into Power BI and verify the available data list.</p>
        <p className="leading-[1.43] mb-0">&nbsp;</p>
        <p className="leading-[1.43] mb-0">總結</p>
        <p className="leading-[1.43] mb-0">這部影片教你如何使用 Power BI 將大量數據轉換成互動式圖表，從資料導入、格式化到跨表計算，並展示了視覺化設計與篩選功能的應用。</p>
        <p className="leading-[1.43] mb-0">&nbsp;</p>
        <p className="leading-[1.43] mb-0">亮點</p>
        <p className="leading-[1.43] mb-0">這段影片介紹了如何使用 Power BI 進行數據分析，特別是如何從 Excel 匯入數據並準備進行可視化。- 簡介 Power BI 軟體，說明其功能是將大量數據轉換成美觀的互動圖表，幫助使用者理解數據的背景。</p>
        <p className="leading-[1.43] mb-0">- 指導觀眾如何下載並安裝 Power BI，並介紹如何開始使用該軟體進行數據分析。</p>
        <p className="leading-[1.43] mb-0">- 以 Excel 為例，說明在導入數據前需要對 Excel 表格進行簡單的格式檢查，以確保數據的整齊性。</p>
        <p className="leading-[1.43] mb-0">- 解釋 Power BI 如何自動將 Excel 的每個工作表轉換為獨立的表格，並提供如何處理多個數據片段的建議。</p>
        <p className="leading-[1.43]">- 展示如何在 Power BI 中選擇剛剛創建的 Excel 表格進行數據匯入，並確認可用的數據列表。</p>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#333] text-[15px] tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        查看更多
      </p>
    </div>
  );
}

function SummarySection() {
  return (
    <div className="bg-[rgba(51,51,51,0.04)] relative rounded-[4px] shrink-0 w-full" data-name="Summary Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <TitleRow />
          <DescriptionRow />
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[4px] shrink-0" data-name="<Button>">
            <Base1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] overflow-clip py-[8px] relative shrink-0 w-full" data-name="Content">
      <div className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[16px] text-[rgba(51,51,51,0.6)] tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-0">使用Shift + Enter 或 Enter換行</p>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Content />
      </div>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        留言
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0 w-[71px]">
      <div className="bg-[#09c] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="<Button>">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[4px] relative w-full">
            <Base2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Padding() {
  return (
    <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-name="Padding">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="_hidden">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p7fafe80} fill="var(--fill-0, #333333)" fillOpacity="0.6" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[71px]">
      <Frame1 />
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="<FormControlLabel> | Checkbox">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="<Checkbox>">
          <Padding />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="<FormLabel>">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            匿名
          </p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#09c] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        評論
      </p>
    </div>
  );
}

function Ring() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Ring">
      <div className="absolute inset-[-6.25%_-6.25%_-6.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <g id="Ring">
            <path d={svgPaths.p36f5f080} id="Background" opacity="0" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3ed29a80} id="Line" stroke="var(--stroke-0, #0099CC)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MinWidth() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="min-width" />;
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        觀看紀錄
      </p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="<Icon>">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Color=Primary, Size=16px">
          <Ring />
          <MinWidth />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
        <Container41 />
        <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 2">
              <line id="Line" stroke="var(--stroke-0, #0099CC)" strokeWidth="2" x2="65" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center max-w-[360px] relative shrink-0" data-name="<Tab>">
        <Container42 />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="<Tabs>">
      <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip top-0 w-[1107px]" data-name="<Tabs>">
        <Container40 />
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

function MainFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Main Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.334] relative shrink-0 text-[#333] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Underkoffler_ Pointing to the future of UI
      </p>
      <SummarySection />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Comment Section">
        <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="<COOLTextField>">
          <div className="content-stretch flex flex-col items-start pb-[12px] relative size-full">
            <Input />
          </div>
        </div>
        <Frame />
      </div>
      <Tabs />
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.43] relative shrink-0 text-[#333] text-[14px] tracking-[0.17px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        此影片目前沒有任何留言
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-[896px] min-h-px min-w-px relative">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pt-[16px] px-[16px] relative size-full">
          <VideoPlayer />
          <MainFrame />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Roboto:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#333] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        影片分段
      </p>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="InfoOutlined">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p36290900} fill="var(--fill-0, #006699)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-[232px]">
      <Frame6 />
      <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="<Icon>">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="KeyboardArrowRightFilled">
            <div className="absolute bottom-1/4 left-[35.79%] right-[33.33%] top-1/4" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
                <path d={svgPaths.p136f3100} fill="var(--fill-0, black)" fillOpacity="0.56" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
      <Frame5 />
      <p className="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[1.66] min-w-full relative shrink-0 text-[12px] text-[rgba(51,51,51,0.6)] tracking-[0.4px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        此內容可能是透過 AI 生成，實際內容請以老師授課為主
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[896px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <div className="bg-white h-[896px] relative shrink-0" data-name="<Paper>">
        <div className="content-stretch flex flex-col h-full items-center overflow-clip relative rounded-[inherit]">
          <Frame4 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 1">
                <line id="Line 136" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="264" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex font-normal gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
            <p className="font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[#757575] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              00:00:02
            </p>
            <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              兒童幸福感的定義與衡量
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
            <p className="font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[#757575] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              00:00:10
            </p>
            <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              兒童幸福感的定義與衡量
            </p>
          </div>
          <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex font-normal gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
            <p className="font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[#757575] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              00:11:20
            </p>
            <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              幸福感的影響因素
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
            <p className="font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[#757575] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              00:15:20
            </p>
            <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              如何提升兒童的幸福感
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
            <p className="font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[#757575] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              00:18:20
            </p>
            <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              幸福感與學業成績的關聯性
            </p>
          </div>
          <div className="content-stretch flex font-normal gap-[8px] items-start p-[16px] relative shrink-0 w-[264px]">
            <p className="font-['Roboto:Regular',sans-serif] leading-[1.66] relative shrink-0 text-[#757575] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              00:11:20
            </p>
            <p className="flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[1.43] min-h-px min-w-px relative text-[#333] text-[14px] tracking-[0.17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              家庭環境對兒童幸福感的影響
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.12)] border-l border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1107px]">
      <Header />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1107 1">
            <line id="Line 136" stroke="var(--stroke-0, black)" strokeOpacity="0.12" x2="1107" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Container />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-[rgba(97,97,97,0.9)] content-stretch flex items-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tooltip">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">5:33 兒童幸福感的定義與衡量</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="5.1 影片播放頁面 - 展開 (預設)">
      <div className="absolute h-[1382px] left-0 top-0 w-[1440px]" data-name="Border">
        <LtiTopPadding />
        <LtiRightPadding />
        <LtiBottomPadding />
        <div className="absolute bg-[rgba(195,222,183,0.3)] border border-[#c3deb7] border-dashed bottom-0 right-0 top-[72px] w-[24px]" data-name="canvas right padding" />
        <div className="absolute bottom-0 left-[276px] top-[72px] w-[24px]" data-name="canvas left padding">
          <img alt="" className="absolute block max-w-none size-full" height="1310" src={imgCanvasLeftPadding} width="24" />
        </div>
        <div className="absolute bottom-0 left-[84px] top-[72px] w-[192px]" data-name="canvas left course padding">
          <img alt="" className="absolute block max-w-none size-full" height="1310" src={imgCanvasLeftCoursePadding} width="192" />
        </div>
        <TopNav />
        <div className="absolute bg-[#036] bottom-0 left-0 top-0 w-[84px]" data-name="global nav" />
      </div>
      <div className="absolute bg-white h-[963px] left-[301px] overflow-clip top-[96px] w-[1107px]" data-name="Main Container">
        <Frame3 />
      </div>
      <div className="absolute content-stretch flex items-center left-[449px] top-[601px]" data-name="<Tooltip>">
        <Tooltip />
      </div>
    </div>
  );
}