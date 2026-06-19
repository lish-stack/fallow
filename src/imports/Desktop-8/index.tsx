import svgPaths from "./svg-5vzwlzo77u";
import imgLogoGreen1 from "./4bbb69a71a9c77bc7e7a2edf944709e6282e2e0e.png";

function FluentInfo32Filled() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="fluent:info-32-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="fluent:info-32-filled">
          <path d={svgPaths.p3034a0f0} fill="var(--fill-0, #1A1A18)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Info() {
  return (
    <div className="bg-[#d9d2c4] relative rounded-[12px] shrink-0 w-full" data-name="info">
      <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
        <FluentInfo32Filled />
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1a18] text-[16px]">
          <p className="leading-[24px]">{`This assessment is based on your three answers plus regional data for Duplin County. Some details — like acreage and infrastructure — are estimated from what's typical for contract poultry farms in your area. Your actual situation may vary.`}</p>
        </div>
      </div>
    </div>
  );
}

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

function Info1() {
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
      <Info1 />
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

function Overview() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="overview">
      <Left />
      <Right />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#e9f0ea] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#2c4a2e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">Strong match</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
        <Tag4 />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]">
          <h5 className="block leading-[28px]">Specialty mushrooms</h5>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]">
          <p className="leading-[24px]">Your existing poultry houses convert to mushroom cultivation with minimal structural change — controlled environment, existing ventilation, concrete floors. Oyster and shiitake have strong wholesale demand within 80 miles of Duplin County.</p>
        </div>
      </div>
    </div>
  );
}

function R() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[126px]" data-name="r1">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">earning potential</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">time to income</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">est. conversion cost</p>
      </div>
    </div>
  );
}

function R1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative text-[#1a1a18] text-right" data-name="r2">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$3,000 - $6,000 per month</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">4 - 6 months</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$12,000 - $18,000</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="relative shrink-0 w-full" data-name="stats">
      <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
        <R />
        <R1 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <Text />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8">
                <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <article className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Card 1">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Body />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

function Tag5() {
  return (
    <div className="bg-[#f5f0e8] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">good match</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
        <Tag5 />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]">
          <h5 className="block leading-[28px]">Microgreens</h5>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]">
          <p className="leading-[24px]">Low startup cost, fast turnaround (7–14 days per cycle), and strong restaurant and farmers market demand in the Raleigh-Durham corridor two hours from your farm.</p>
        </div>
      </div>
    </div>
  );
}

function R2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[126px]" data-name="r1">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">earning potential</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">time to income</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">est. conversion cost</p>
      </div>
    </div>
  );
}

function R3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative text-[#1a1a18] text-right" data-name="r2">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px] whitespace-pre-wrap">{`$1,500 - $3,500  per month`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">6 - 8 weeks</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$4,000 - $8,0000</p>
      </div>
    </div>
  );
}

function Stats1() {
  return (
    <div className="relative shrink-0 w-full" data-name="stats">
      <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
        <R2 />
        <R3 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Text1 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.8px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8">
              <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" />
            </svg>
          </div>
        </div>
        <Stats1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <article className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Card 4">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Body1 />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

function Tag6() {
  return (
    <div className="bg-[#ffdad3] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">worth exploring</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
        <Tag6 />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]">
          <h5 className="block leading-[28px]">Blueberries</h5>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]">
          <p className="leading-[24px]">{`NC is the third-largest blueberry producer in the US and Duplin County's sandy, acidic soil is well-suited. Longer lead time to income but strong long-term returns with low ongoing labor.`}</p>
        </div>
      </div>
    </div>
  );
}

function R4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[126px]" data-name="r1">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">earning potential</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">time to income</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">est. conversion cost</p>
      </div>
    </div>
  );
}

function R5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end min-w-px relative text-[#1a1a18] text-right" data-name="r2">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$4,000 - $8,000 per acre</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">2 - 3 years</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$8,000 - $12,000 per acre</p>
      </div>
    </div>
  );
}

function Stats2() {
  return (
    <div className="relative shrink-0 w-full" data-name="stats">
      <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
        <R4 />
        <R5 />
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Text2 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.8px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8">
              <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" />
            </svg>
          </div>
        </div>
        <Stats2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <article className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Card 5">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Body2 />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[464px] items-start relative shrink-0 w-full">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Summary1() {
  return (
    <div className="max-w-[773px] relative shrink-0 w-full" data-name="summary">
      <div aria-hidden className="absolute border-[#c4432a] border-l-[4.2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] max-w-[inherit] px-[24px] py-[4px] relative size-full">
          <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#c4432a] text-[24px] w-full">
            <p className="leading-[32px]">Your biggest obstacle is debt tied to your current operation</p>
          </div>
          <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[18px] w-full whitespace-pre-wrap">
            <p className="leading-[26px] mb-0">{`Most contract poultry farmers in your situation carry equipment debt that's tied directly to their integrator relationship — meaning Tyson, Perdue, or whoever you contract with has to authorize any changes to your operation before you can act. This isn't a dead end. `}</p>
            <p className="leading-[26px] mb-0">​</p>
            <p className="leading-[26px] mb-0">Thousands of farmers have navigated this exact situation and come out the other side. But it has to be the first thing you address.</p>
            <p className="leading-[26px] mb-0">​</p>
            <p className="leading-[26px]">{`Before you do anything else, request a full copy of your contract and identify exactly who holds your equipment debt. You don't have to figure this out alone.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[20px] w-full">
        <h5 className="block leading-[28px]">Transfarmation Project</h5>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[16px] w-full">
        <p className="leading-[24px]">Offers free legal and technical support for contract livestock farmers looking to transition operations. Experience working with NC-based poultry farmers.</p>
      </div>
    </div>
  );
}

function MajesticonsArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="majesticons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="majesticons:arrow-right">
          <path d={svgPaths.p20e5d100} id="Vector" stroke="var(--stroke-0, #8B6A14)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="text + icon">
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] whitespace-nowrap">
        <h1 className="block leading-[24px]">Visit their website</h1>
      </div>
      <MajesticonsArrowRight />
    </div>
  );
}

function Body3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[32px] pt-[24px] px-[24px] relative size-full">
          <Body4 />
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="tertiary cta - next">
            <TextIcon />
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.7px_-0.48%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.4 1.4">
                  <path d="M0.7 0.7H145.7" id="Line 1" stroke="var(--stroke-0, #8B6A14)" strokeLinecap="round" strokeWidth="1.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Transfarmation() {
  return (
    <article className="bg-[#e9f0ea] relative rounded-[16px] shrink-0 w-full" data-name="transfarmation">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Body3 />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

function Resource() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center px-[64px] relative shrink-0 w-[773px]" data-name="resource">
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[18px] text-center w-full">
        <p className="leading-[26px]">Here’s a free resource to check out:</p>
      </div>
      <Transfarmation />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center py-[32px] relative shrink-0 w-full" data-name="section">
      <Summary1 />
      <div className="h-0 relative shrink-0 w-[800px]">
        <div className="absolute inset-[-0.8px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 0.8">
            <line id="Line 2" stroke="var(--stroke-0, #D9D2C4)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="799.6" y1="0.4" y2="0.4" />
          </svg>
        </div>
      </div>
      <Resource />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[64px] py-[48px] relative rounded-[16px] shrink-0 w-[970px]" data-name="cta section">
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#d9d2c4] text-[24px] text-center w-[min-content]">
        <p className="leading-[32px]">We’ve assessed your land.</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[28px] text-center w-[min-content]">
        <p className="leading-[36px]">Now let’s turn it into a plan that unlocks funding.</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.8px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 842 0.8">
            <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="841.6" y1="0.4" y2="0.4" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[20px] text-center w-[min-content]">
        <p className="leading-[28px]">{`Most transition grants — including USDA EQIP and the Transfarmation R&I Grant — require a basic business plan. Fallow builds it with you, section by section, using everything we already know about your land. It takes about 20 minutes and gives you a document you can submit directly.`}</p>
      </div>
      <div className="bg-[#8b6a14] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Secondary button - desktop">
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[20px] text-center whitespace-nowrap">
          <p className="leading-[28px]">Start my plan</p>
        </div>
      </div>
    </div>
  );
}

function Map1() {
  return (
    <section className="relative shrink-0 w-full" data-name="Map 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[56px] pt-[128px] px-[56px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[48px] w-[min-content]">
            <h1 className="block leading-[56px]">Your Fallow assessment is ready!</h1>
          </div>
          <Info />
          <Overview />
          <Frame1 />
          <Section />
          <CtaSection />
        </div>
      </div>
    </section>
  );
}

function PhPlantFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ph:plant-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ph:plant-fill">
          <path d={svgPaths.p207bdd00} fill="var(--fill-0, #2C4A2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="copyright">
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap">Copyright © 2026 Fallow - All Rights Reserved.</p>
      <PhPlantFill />
    </div>
  );
}

function Footer() {
  return (
    <footer className="content-stretch flex flex-col items-center justify-end overflow-clip p-[32px] relative shrink-0 w-[1280px]" data-name="footer">
      <Copyright />
    </footer>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="logo">
      <div className="h-[40px] relative shrink-0 w-[108px]" data-name="logo green 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoGreen1} />
      </div>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#1a1a18] text-[12px] whitespace-nowrap">For farmers ready for what’s next.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f5f0e8] left-0 top-0 w-[1280px]" data-name="header">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[16px] relative rounded-[inherit] size-full">
        <Logo />
        <div className="bg-[#2c4a2e] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button - desktop">
          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Get started</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#8b6a14] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Map1 />
      <Footer />
      <Header />
    </div>
  );
}