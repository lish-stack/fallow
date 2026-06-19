import svgPaths from "./svg-ot2wamlf0w";

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

function MdiEmoticonHappyOutline() {
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
      <MdiEmoticonHappyOutline />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]">
        <p className="leading-[24px]">78%</p>
      </div>
    </div>
  );
}

function Left() {
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

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="right">
      <FinancialPosition />
      <MarketAccess />
    </div>
  );
}

export default function All() {
  return (
    <div className="content-stretch flex gap-[32px] items-center px-[16px] relative size-full" data-name="all">
      <Left />
      <Right />
    </div>
  );
}