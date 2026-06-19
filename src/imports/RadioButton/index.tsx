type RadioButtonProps = {
  className?: string;
  property1?: "Default" | "selected";
};

export default function RadioButton({ className, property1 = "Default" }: RadioButtonProps) {
  if (property1 === "selected") {
    return (
      <div className={className || "content-stretch flex gap-[8px] items-center relative w-[242px]"} data-name="Property 1=selected">
        <div className="relative rounded-[100px] shrink-0 size-[16px]" data-name="Radio Button">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[5px] py-[4px] relative rounded-[inherit] size-full">
            <div className="absolute inset-0 overflow-clip" data-name="BG">
              <div className="absolute bg-[#2c4a2e] inset-0" data-name="Tint" />
            </div>
            <div className="bg-[#f5f0e8] relative rounded-[100px] shrink-0 size-[4.8px]" data-name="Dot" />
          </div>
          <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-[-1.4px] pointer-events-none rounded-[101.4px]" />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a18] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">I’m not sure it’s financially viable</p>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "content-stretch cursor-pointer flex gap-[8px] items-center relative w-[242px]"} data-name="Property 1=Default">
      <div className="relative rounded-[8px] shrink-0 size-[16px]" data-name="Radio Button">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-0 overflow-clip" data-name="BG">
            <div className="absolute bg-[#1a1a18] inset-0 opacity-5" data-name="Black" />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-[-1.4px] pointer-events-none rounded-[9.4px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a18] text-[16px] text-left whitespace-nowrap">
        <p className="leading-[24px]">I’m not sure it’s financially viable</p>
      </div>
    </button>
  );
}