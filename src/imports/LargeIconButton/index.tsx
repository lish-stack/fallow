type LargeIconButtonProps = {
  className?: string;
  property1?: "Default" | "hover" | "disabled";
};

export default function LargeIconButton({ className, property1 = "Default" }: LargeIconButtonProps) {
  const isDisabled = property1 === "disabled";
  const isHover = property1 === "hover";
  return (
    <div className={className || `content-stretch flex items-center p-[8px] relative rounded-[40px] ${isHover ? "bg-[#8b6a14]" : "bg-[#f5f0e8]"}`}>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[40px] ${isDisabled ? "border-[#d9d2c4]" : "border-[#8b6a14]"}`} />
      <div className="relative shrink-0 size-[24px]" data-name="majesticons:arrow-right">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="majesticons:arrow-right">
            <path d="M13 18L19 12L13 6M19 12H5" id="Vector" stroke={isHover ? "var(--stroke-0, #F5F0E8)" : isDisabled ? "var(--stroke-0, #D9D2C4)" : "var(--stroke-0, #8B6A14)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}