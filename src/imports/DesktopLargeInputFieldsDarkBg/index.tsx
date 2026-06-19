type DesktopLargeInputFieldsDarkBgProps = {
  className?: string;
  property1?: "Default" | "input" | "error" | "focus";
};

export default function DesktopLargeInputFieldsDarkBg({ className, property1 = "Default" }: DesktopLargeInputFieldsDarkBgProps) {
  if (property1 === "focus") {
    return (
      <div className={className || "bg-[#f5f0e8] content-stretch flex items-start px-[16px] py-[10px] relative rounded-[8px] w-[420px]"} data-name="Property 1=focus">
        <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#1a1a18] text-[20px] whitespace-nowrap">|</p>
      </div>
    );
  }
  if (property1 === "input") {
    return (
      <div className={className || "bg-[#f5f0e8] content-stretch flex items-start px-[16px] py-[10px] relative rounded-[8px] w-[420px]"} data-name="Property 1=input">
        <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#1a1a18] text-[20px] whitespace-nowrap">John Smith</p>
      </div>
    );
  }
  if (property1 === "error") {
    return (
      <div className={className || "bg-[#f5f0e8] content-stretch flex items-start px-[16px] py-[10px] relative rounded-[8px] w-[420px]"} data-name="Property 1=error">
        <div aria-hidden className="absolute border border-[#c4432a] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#c4432a] text-[20px] whitespace-nowrap">This is a required field</p>
      </div>
    );
  }
  return (
    <button className={className || "bg-[#f5f0e8] content-stretch cursor-pointer flex items-start px-[16px] py-[10px] relative rounded-[8px] w-[420px]"} data-name="Property 1=Default">
      <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[#2c4a2e] text-[20px] text-left whitespace-nowrap">Name</p>
    </button>
  );
}