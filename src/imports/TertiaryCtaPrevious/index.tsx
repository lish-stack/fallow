import svgPaths from "./svg-j0clyg2vsg";
type TertiaryCtaPreviousProps = {
  className?: string;
  property1?: "Default" | "hover";
};

export default function TertiaryCtaPrevious({ className, property1 = "Default" }: TertiaryCtaPreviousProps) {
  const isHover = property1 === "hover";
  return (
    <div className={className || "content-stretch flex flex-col gap-[4px] items-start relative"}>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="text + icon">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[16px]" data-name="majesticons:arrow-right">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="majesticons:arrow-right">
                  <path d={svgPaths.p20e5d100} id="Vector" stroke={isHover ? "var(--stroke-0, #2C4A2E)" : "var(--stroke-0, #8B6A14)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={`[word-break:break-word] flex flex-col font-["Source_Sans_3:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] whitespace-nowrap ${isHover ? "text-[#2c4a2e]" : "text-[#8b6a14]"}`}>
          <h1 className="block leading-[24px]">Back</h1>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.7px_-1.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.4 1.4">
            <path d="M0.7 0.7H58.7" id="Line 1" stroke={isHover ? "var(--stroke-0, #2C4A2E)" : "var(--stroke-0, #8B6A14)"} strokeLinecap="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}