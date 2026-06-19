import svgPaths from "./svg-3rw82vv18g";
import imgLogoGreen1 from "./4bbb69a71a9c77bc7e7a2edf944709e6282e2e0e.png";

function Map() {
  return (
    <div className="h-[284px] relative rounded-[16px] shrink-0 w-full" data-name="Map">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[284px] relative shrink-0 w-full" data-name="Embed">
          <iframe allowFullScreen className="embed overflow-clip size-full" src="https://maps.google.com/maps?output=embed&pb=%211m18%211m12%211m3%211d12613.824338295351%212d-122.42694877416335%213d37.779349961439706%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x808580999d2acfb3%3A0x687352ddeebecb93%212sSan+Francisco%2C+CA+94102%215e0%213m2%211sen%212sus%214v1737747331503%215m2%211sen%212sus&z=7" />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function HeadSubhead() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-[#2c4a2e] text-center whitespace-nowrap" data-name="head + subhead">
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[24px]">
        <h1 className="block leading-[32px]">Assessing farmland in</h1>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[40px]">
        <h1 className="block leading-[48px]">Duplin County, NC</h1>
      </div>
    </div>
  );
}

function MajesticonsArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="majesticons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="majesticons:arrow-right">
          <path d={svgPaths.p20e5d100} id="Vector" stroke="var(--stroke-0, #D9D2C4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function EnterAddress() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="enter address">
      <button className="bg-[#f5f0e8] cursor-pointer flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="desktop small or mobile large input fields - light bg">
        <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[24px] relative shrink-0 text-[#969696] text-[16px] text-left whitespace-nowrap">Enter a different zip code or address</p>
        </div>
      </button>
      <div className="bg-[#f5f0e8] content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0" data-name="small icon button">
        <div aria-hidden className="absolute border border-[#d9d2c4] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <MajesticonsArrowRight />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px pt-[48px] relative" data-name="left">
      <Map />
      <HeadSubhead />
      <EnterAddress />
    </div>
  );
}

function QuestionExplainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-[#2c4a2e] w-full" data-name="question + explainer">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-center whitespace-nowrap">
        <h1 className="block leading-[28px]">What are you currently farming?</h1>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <h1 className="block leading-[24px]">This helps us understand what infrastructure you have and what transition paths make sense.</h1>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#d9d2c4] relative rounded-[16px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[40px] relative size-full">
          <QuestionExplainer />
          <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="desktop small or mobile large input fields - light bg">
            <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[24px] relative shrink-0 text-[#2c4a2e] text-[16px] text-left whitespace-nowrap">E.g. beef cattle, dairy cattle, poultry...</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function MajesticonsArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="majesticons:arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="majesticons:arrow-right">
          <path d={svgPaths.p20e5d100} id="Vector" stroke="var(--stroke-0, #8B6A14)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="text + icon">
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] whitespace-nowrap">
        <h1 className="block leading-[24px]">Next</h1>
      </div>
      <MajesticonsArrowRight1 />
    </div>
  );
}

function Right() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="right">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[24px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[16px] text-center w-[min-content]">
            <h1 className="block leading-[24px]">We need some more information to complete your assessment:</h1>
          </div>
          <Container />
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="tertiary cta - next">
            <TextIcon />
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.7px_-1.27%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.4 1.4">
                  <path d="M0.7 0.7H55.7" id="Line 1" stroke="var(--stroke-0, #8B6A14)" strokeLinecap="round" strokeWidth="1.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Map1() {
  return (
    <section className="relative shrink-0 w-full" data-name="Map 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pb-[56px] pt-[128px] px-[56px] relative size-full">
          <Left />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Right />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhPlantFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ph:plant-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ph:plant-fill">
          <path d={svgPaths.p207bdd00} fill="var(--fill-0, #2C4A2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="copyright">
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap">Copyright © 2026 Fallow - All Rights Reserved.</p>
      <PhPlantFill />
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex-[1_0_0] min-h-px relative w-[1280px]" data-name="footer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[32px] relative size-full">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="logo">
      <div className="h-[40px] relative shrink-0 w-[108px]" data-name="logo green 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoGreen1} />
      </div>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#1a1a18] text-[12px] whitespace-nowrap">For farmers ready for what’s next.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f5f0e8] left-0 top-0 w-[1280px]" data-name="header">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[16px] relative rounded-[inherit] size-full">
        <Logo />
        <div className="bg-[#2c4a2e] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button - desktop">
          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Get started</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#8b6a14] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Map1 />
      <Footer />
      <Header />
    </div>
  );
}