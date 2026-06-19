type SecondaryButtonMobileProps = {
  className?: string;
  property1?: "Default" | "hover";
};

export default function SecondaryButtonMobile({ className, property1 = "Default" }: SecondaryButtonMobileProps) {
  const isDefault = property1 === "Default";
  const isHover = property1 === "hover";
  return (
    <div className={className || `content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] ${isHover ? "bg-[#8b6a14]" : ""}`}>
      <div aria-hidden={isDefault ? true : undefined} className={isHover ? '[word-break:break-word] flex flex-col font-["Source_Sans_3:Medium",sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[16px] text-center whitespace-nowrap' : "absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[12px]"}>
        {isHover && <p className="leading-[24px]">Get started</p>}
      </div>
      {isDefault && (
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Get started</p>
        </div>
      )}
    </div>
  );
}