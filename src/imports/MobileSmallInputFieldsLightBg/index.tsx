type MobileSmallInputFieldsLightBgProps = {
  className?: string;
  property1?: "Default" | "input" | "error" | "focus";
};

export default function MobileSmallInputFieldsLightBg({ className, property1 = "Default" }: MobileSmallInputFieldsLightBgProps) {
  if (property1 === "focus") {
    return (
      <div className={className || "bg-[#f5f0e8] content-stretch flex items-start px-[10px] py-[8px] relative rounded-[8px] w-[420px]"} data-name="Property 1=focus">
        <div aria-hidden className="absolute border border-[#2c4a2e] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1a18] text-[16px] whitespace-nowrap">|</p>
      </div>
    );
  }
  if (property1 === "input") {
    return (
      <div className={className || "bg-[#f5f0e8] content-stretch flex items-start px-[10px] py-[8px] relative rounded-[8px] w-[420px]"} data-name="Property 1=input">
        <div aria-hidden className="absolute border border-[#2c4a2e] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1a1a18] text-[14px] whitespace-nowrap">John Smith</p>
      </div>
    );
  }
  if (property1 === "error") {
    return (
      <div className={className || "bg-[#f5f0e8] content-stretch flex items-start px-[10px] py-[8px] relative rounded-[8px] w-[420px]"} data-name="Property 1=error">
        <div aria-hidden className="absolute border border-[#c4432a] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#c4432a] text-[14px] whitespace-nowrap">This is a required field</p>
      </div>
    );
  }
  return (
    <button className={className || "bg-[#f5f0e8] content-stretch cursor-pointer flex items-start px-[10px] py-[8px] relative rounded-[8px] w-[420px]"} data-name="Property 1=Default">
      <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Name</p>
    </button>
  );
}