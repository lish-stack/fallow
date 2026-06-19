export default function Tag() {
  return (
    <div className="bg-[#f5f0e8] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] size-full" data-name="tag">
      <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">good match</p>
      </div>
    </div>
  );
}