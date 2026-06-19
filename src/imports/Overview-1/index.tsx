import svgPaths from "./svg-fjl2ut1kwu";

function Map() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Map">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Embed">
          <iframe allowFullScreen className="embed overflow-clip size-full" src="https://maps.google.com/maps?output=embed&pb=%211m18%211m12%211m3%211d12613.824338295351%212d-122.42694877416335%213d37.779349961439706%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x808580999d2acfb3%3A0x687352ddeebecb93%212sSan+Francisco%2C+CA+94102%215e0%213m2%211sen%212sus%214v1737747331503%215m2%211sen%212sus&z=7" />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MdiLocation() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="mdi:location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="mdi:location">
          <path d={svgPaths.pd41c500} fill="var(--fill-0, #2C4A2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeadSubhead() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="head + subhead">
      <MdiLocation />
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[32px] text-center whitespace-nowrap">
        <h1 className="block leading-[40px]">Duplin County, NC</h1>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[11.27%_12.71%_8.33%_12.31%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9941 25.7266">
        <g id="Group">
          <path d={svgPaths.p5133800} fill="var(--fill-0, #8B6A14)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p318a1980} fill="var(--fill-0, #8B6A14)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function HealthiconsAnimalChickenOutline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="healthicons:animal-chicken-outline">
      <Group />
    </div>
  );
}

function Type() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="type">
      <HealthiconsAnimalChickenOutline />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Contract poultry</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.81%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4999 28.1667">
          <g id="Group">
            <path d={svgPaths.p2fed7700} id="Vector" stroke="var(--stroke-0, #C4432A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pa4f8280} id="Vector_2" stroke="var(--stroke-0, #C4432A)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p49fd040} id="Vector_3" stroke="var(--stroke-0, #C4432A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsMoneyBag() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="hugeicons:money-bag-02">
      <Group1 />
    </div>
  );
}

function Concern() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="concern">
      <HugeiconsMoneyBag />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4432a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Debt tied to current operation</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="info">
      <Type />
      <Concern />
    </div>
  );
}

function MaterialSymbolsHouseOutlineRounded() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:house-outline-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:house-outline-rounded">
          <path d={svgPaths.pd1d5b00} fill="var(--fill-0, #2C4A2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#d9d2c4] content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="tag">
      <MaterialSymbolsHouseOutlineRounded />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2-4 poultry houses typical for region</p>
      </div>
    </div>
  );
}

function LsiconMeasureFilled() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lsicon:measure-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lsicon:measure-filled">
          <path clipRule="evenodd" d={svgPaths.pec61580} fill="var(--fill-0, #2C4A2E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#d9d2c4] content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="tag">
      <LsiconMeasureFilled />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">~200-300 acres average contract operation</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[16.67%_8.34%_0.78%_8.34%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3319 13.2093">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p126d4c00} fill="var(--fill-0, #2C4A2E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteGovernmentLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="mingcute:government-line">
      <Group2 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#d9d2c4] content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="tag">
      <MingcuteGovernmentLine />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Integrator debt likely with Tyson or Purdue</p>
      </div>
    </div>
  );
}

function TablerDoor() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler:door">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler:door">
          <path d={svgPaths.p1b6f000} id="Vector" stroke="var(--stroke-0, #2C4A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#d9d2c4] content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="tag">
      <TablerDoor />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Land owned, not leased</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[536px] items-start justify-center min-w-px relative" data-name="left">
      <Map />
      <HeadSubhead />
      <Info />
      <Frame />
    </div>
  );
}

function Summary() {
  return (
    <div className="relative shrink-0 w-full" data-name="summary">
      <div aria-hidden className="absolute border-[#2c4a2e] border-l-[4.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] px-[32px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[28px] w-full">
            <p className="leading-[36px]">What we know about your land</p>
          </div>
          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[20px] w-full">
            <p className="leading-[28px]">Duplin County sits on sandy loam soil: well-draining, easy to work, and well-suited to a wide range of crops including specialty mushrooms, vegetables, and berries. Your region gets enough rainfall to support most crops without heavy irrigation investment. Based on your farm type, you most likely have climate-controlled poultry houses, which are your biggest asset. They convert directly to mushroom cultivation or indoor growing without major structural changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MdiEmoticonHappyOutline() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="mdi:emoticon-happy-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="mdi:emoticon-happy-outline">
          <path d={svgPaths.p12cdf500} fill="var(--fill-0, #2C4A2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReadinessStatus() {
  return (
    <div className="bg-[#e9f0ea] relative rounded-[8px] shrink-0 w-full" data-name="readiness status">
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <MdiEmoticonHappyOutline />
          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[20px] whitespace-nowrap">
            <p className="leading-[28px]">Moderately ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IcBaselineInsertEmoticon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-insert-emoticon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-insert-emoticon">
          <path d={svgPaths.p3e349e80} fill="var(--fill-0, #8B6A14)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LandSuitability() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="land suitability">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]">
        <p className="leading-[24px]">land suitability</p>
      </div>
      <IcBaselineInsertEmoticon />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]">
        <p className="leading-[24px]">85%</p>
      </div>
    </div>
  );
}

function MdiEmoticonHappyOutline1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:emoticon-happy-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:emoticon-happy-outline">
          <path d={svgPaths.p3943a580} fill="var(--fill-0, #8B6A14)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Infrastructure() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="infrastructure">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]">
        <p className="leading-[24px]">infrastructure</p>
      </div>
      <MdiEmoticonHappyOutline1 />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]">
        <p className="leading-[24px]">78%</p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="left">
      <LandSuitability />
      <Infrastructure />
    </div>
  );
}

function MdiEmoticonConfusedOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:emoticon-confused-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:emoticon-confused-outline">
          <path d={svgPaths.p9901500} fill="var(--fill-0, #8B6A14)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FinancialPosition() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="financial position">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]">
        <p className="leading-[24px]">financial position</p>
      </div>
      <MdiEmoticonConfusedOutline />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]">
        <p className="leading-[24px]">40%</p>
      </div>
    </div>
  );
}

function MdiEmoticonNeutralOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:emoticon-neutral-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:emoticon-neutral-outline">
          <path d={svgPaths.p24b82e40} fill="var(--fill-0, #8B6A14)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MarketAccess() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="market access">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]">
        <p className="leading-[24px]">market access</p>
      </div>
      <MdiEmoticonNeutralOutline />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]">
        <p className="leading-[24px]">60%</p>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="right">
      <FinancialPosition />
      <MarketAccess />
    </div>
  );
}

function All() {
  return (
    <div className="relative shrink-0 w-full" data-name="all">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] relative size-full">
          <Left1 />
          <Right1 />
        </div>
      </div>
    </div>
  );
}

function Readiness() {
  return (
    <div className="relative shrink-0 w-full" data-name="readiness">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[24px] w-full">
          <p className="leading-[32px]">Transition readiness</p>
        </div>
        <ReadinessStatus />
        <All />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="right">
      <Summary />
      <Readiness />
    </div>
  );
}

export default function Overview() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative size-full" data-name="overview">
      <Left />
      <Right />
    </div>
  );
}