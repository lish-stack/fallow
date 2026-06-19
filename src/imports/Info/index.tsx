import svgPaths from "./svg-2k1kvwgocp";

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

export default function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="info">
      <Type />
      <Concern />
    </div>
  );
}