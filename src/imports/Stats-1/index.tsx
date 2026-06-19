function R() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[126px]" data-name="r1">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">earning potential</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">time to income</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[18px]">est. conversion cost</p>
      </div>
    </div>
  );
}

function R1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative text-[#1a1a18] text-right" data-name="r2">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px] whitespace-pre-wrap">{`$1,500 - $3,500  per month`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">6 - 8 weeks</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$4,000 - $8,0000</p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]" data-name="stats">
      <R />
      <R1 />
    </div>
  );
}