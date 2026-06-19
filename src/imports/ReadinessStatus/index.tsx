import svgPaths from "./svg-aobdhgyzt0";

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

export default function ReadinessStatus() {
  return (
    <div className="bg-[#e9f0ea] content-stretch flex gap-[8px] items-center p-[12px] relative rounded-[8px] size-full" data-name="readiness status">
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <MdiEmoticonHappyOutline />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Moderately ready</p>
      </div>
    </div>
  );
}