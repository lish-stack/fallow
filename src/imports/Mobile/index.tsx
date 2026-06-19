import svgPaths from "./svg-sayf7wwu7v";
import imgMobile from "./34f69273496b38a632bb28accf4a00a56beb7cc8.png";
import imgLogoGreen1 from "./4bbb69a71a9c77bc7e7a2edf944709e6282e2e0e.png";

function Word() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 whitespace-nowrap" data-name="word">
      <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[48px]">
        <h1 className="block leading-[56px]">fal · low</h1>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#8b6a14] text-[32px]">
        <h1 className="block leading-[40px]">/ˈfalō/</h1>
      </div>
    </div>
  );
}

function Definition() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-[#2c4a2e] text-[20px] w-[343px]" data-name="definition">
      <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 whitespace-nowrap">
        <h1 className="block leading-[28px]">adjective</h1>
      </div>
      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 w-[min-content]">
        <h1 className="block leading-[28px] whitespace-pre-wrap">
          {`(of farmland) `}
          <br aria-hidden />
          {`left unseeded after plowing; `}
          <br aria-hidden />
          resting, ready to become something new
        </h1>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-center leading-[0] relative shrink-0 text-center w-full" data-name="Text">
      <Word />
      <Definition />
    </div>
  );
}

function MajesticonsArrowRight() {
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

function EnterAddress() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="enter address">
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[16px] text-center w-[min-content]">
        <p className="leading-[24px]">Start your free land assessment:</p>
      </div>
      <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="desktop small or mobile large input fields - dark bg">
        <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[24px] relative shrink-0 text-[#2c4a2e] text-[16px] text-left whitespace-nowrap">Your farm’s address or zip code</p>
        </div>
      </button>
      <div className="bg-[#f5f0e8] content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0" data-name="small icon button">
        <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <MajesticonsArrowRight />
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[24px] py-[32px] relative rounded-[16px] shrink-0 w-[343px]" data-name="cta section">
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d9d2c4] text-[18px] text-center w-full">
        <p className="leading-[26px]">Contract livestock farming was never designed to make you wealthy.</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d9d2c4] text-[18px] text-center w-full">
        <p className="leading-[26px]">It was designed to make you dependent.</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[24px] text-center w-full">
        <p className="leading-[32px] whitespace-pre-wrap">
          {`There's a better way to `}
          <br aria-hidden />
          use this land.
        </p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.8px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 0.8">
            <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="294.6" y1="0.4" y2="0.4" />
          </svg>
        </div>
      </div>
      <EnterAddress />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative shrink-0 w-full" data-name="Hero 1">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[56px] pt-[128px] px-[16px] relative size-full">
          <Text />
          <CtaSection />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <div className="bg-[#d9d2c4] content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[28px] relative rounded-[16px] shrink-0 w-[311px]" data-name="contact">
      <div aria-hidden className="absolute border-[#8b6a14] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Drop us a line</p>
      </div>
      <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - light bg">
        <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Name</p>
        </div>
      </button>
      <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - light bg">
        <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Email address</p>
        </div>
      </button>
      <button className="bg-[#f5f0e8] cursor-pointer h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - light bg">
        <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Message</p>
        </div>
      </button>
      <div className="content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0" data-name="Secondary button - mobile">
        <div aria-hidden className="absolute border border-[#8b6a14] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Submit</p>
        </div>
      </div>
    </div>
  );
}

function PhPlantFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ph:plant-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ph:plant-fill">
          <path d={svgPaths.p207bdd00} fill="var(--fill-0, #F5F0E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="copyright">
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[#f5f0e8] text-[14px] whitespace-nowrap">Copyright © 2026 Fallow - All Rights Reserved.</p>
      <PhPlantFill />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <Contact />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

function LogoSlogan() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="logo + slogan">
      <div className="h-[40px] relative shrink-0 w-[108px]" data-name="logo green 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoGreen1} />
      </div>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#1a1a18] text-[12px] whitespace-nowrap">For farmers ready for what’s next.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f5f0e8] left-0 top-0 w-[375px]" data-name="header">
      <div className="content-stretch flex items-center justify-between overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <LogoSlogan />
        <div className="bg-[#2c4a2e] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0" data-name="Primary button - mobile">
          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Get started</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#8b6a14] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-80 overflow-hidden">
          <img alt="" className="absolute h-full left-[-104.26%] max-w-none top-0 w-[308.52%]" src={imgMobile} />
        </div>
        <div className="absolute bg-gradient-to-b from-1/2 from-[rgba(139,106,20,0)] inset-0 to-[#8b6a14]" />
      </div>
      <Hero />
      <Footer />
      <Header />
    </div>
  );
}