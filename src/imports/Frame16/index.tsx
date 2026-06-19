function Tag() {
  return (
    <div className="bg-[#e9f0ea] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#2c4a2e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">Strong match</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
        <Tag />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]">
          <h5 className="block leading-[28px]">Specialty mushrooms</h5>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]">
          <p className="leading-[24px]">Your existing poultry houses convert to mushroom cultivation with minimal structural change — controlled environment, existing ventilation, concrete floors. Oyster and shiitake have strong wholesale demand within 80 miles of Duplin County.</p>
        </div>
      </div>
    </div>
  );
}

function R() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[126px]" data-name="r1">
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
        <p className="leading-[22px]">$3,000 - $6,000 per month</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">4 - 6 months</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$12,000 - $18,000</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="relative shrink-0 w-full" data-name="stats">
      <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
        <R />
        <R1 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <Text />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8">
                <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <article className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Card 1">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Body />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f5f0e8] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">good match</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
        <Tag1 />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]">
          <h5 className="block leading-[28px]">Microgreens</h5>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]">
          <p className="leading-[24px]">Low startup cost, fast turnaround (7–14 days per cycle), and strong restaurant and farmers market demand in the Raleigh-Durham corridor two hours from your farm.</p>
        </div>
      </div>
    </div>
  );
}

function R2() {
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

function R3() {
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

function Stats1() {
  return (
    <div className="relative shrink-0 w-full" data-name="stats">
      <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
        <R2 />
        <R3 />
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Text1 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.8px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8">
              <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" />
            </svg>
          </div>
        </div>
        <Stats1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <article className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Card 4">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Body1 />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

function Tag2() {
  return (
    <div className="bg-[#ffdad3] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[18px] whitespace-nowrap">
        <p className="leading-[26px]">worth exploring</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
        <Tag2 />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]">
          <h5 className="block leading-[28px]">Blueberries</h5>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]">
          <p className="leading-[24px]">{`NC is the third-largest blueberry producer in the US and Duplin County's sandy, acidic soil is well-suited. Longer lead time to income but strong long-term returns with low ongoing labor.`}</p>
        </div>
      </div>
    </div>
  );
}

function R4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[126px]" data-name="r1">
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

function R5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end min-w-px relative text-[#1a1a18] text-right" data-name="r2">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$4,000 - $8,000 per acre</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">2 - 3 years</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[22px]">$8,000 - $12,000 per acre</p>
      </div>
    </div>
  );
}

function Stats2() {
  return (
    <div className="relative shrink-0 w-full" data-name="stats">
      <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
        <R4 />
        <R5 />
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Text2 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.8px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8">
              <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" />
            </svg>
          </div>
        </div>
        <Stats2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <article className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Card 5">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Body2 />
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </article>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}