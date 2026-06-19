type PrimaryButtonDesktopProps = {
  className?: string;
  property1?: "Default" | "hover";
};

export default function PrimaryButtonDesktop({ className, property1 = "Default" }: PrimaryButtonDesktopProps) {
  return (
    <div className={className || `content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] ${property1 === "hover" ? "bg-[#8b6a14]" : "bg-[#2c4a2e]"}`}>
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Get started</p>
      </div>
    </div>
  );
}