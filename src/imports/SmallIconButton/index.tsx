import svgPaths from "./svg-c2rq9wgrdd";
type SmallIconButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "disabled";
};

export default function SmallIconButton({ className, property1 = "Default" }: SmallIconButtonProps) {
  const isDisabled = property1 === "disabled";
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `content-stretch flex items-center p-[8px] relative rounded-[40px] ${isVariant2 ? "bg-[#8b6a14]" : "bg-[#f5f0e8]"}`}>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[40px] ${isDisabled ? "border-[#d9d2c4]" : "border-[#8b6a14]"}`} />
      <div className="relative shrink-0 size-[16px]" data-name="majesticons:arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="majesticons:arrow-right">
            <path d={svgPaths.p20e5d100} id="Vector" stroke={isVariant2 ? "var(--stroke-0, #F5F0E8)" : isDisabled ? "var(--stroke-0, #D9D2C4)" : "var(--stroke-0, #8B6A14)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}