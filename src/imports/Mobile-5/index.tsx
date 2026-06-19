import svgPaths from "./svg-bf06g0v0cr";
import imgLogoWhite1 from "./5274b57671e4506dbf24f1f056a066d970a98d7b.png";
import imgLogoGreen1 from "./4bbb69a71a9c77bc7e7a2edf944709e6282e2e0e.png";

function LogInCta() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[6px] items-start justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[14px] text-center w-full whitespace-nowrap" data-name="log in cta">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[22px]">Already have an account?</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[22px] underline">Log in</p>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-[#2c4a2e] relative rounded-[16px] shrink-0 w-full" data-name="cta section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative size-full">
          <div className="h-[30px] relative shrink-0 w-[81px]" data-name="logo white 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite1} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[24px] text-center w-[min-content]">
            <p className="leading-[32px]">Let’s start working on your business plan.</p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 0.8">
                <line id="Line 2" stroke="var(--stroke-0, #969696)" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="278.6" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[16px] text-center w-[min-content]">
            <p className="leading-[24px]">Create your free Fallow account to save your progress and pick up right where you left off.</p>
          </div>
          <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - dark bg">
            <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Full name</p>
            </div>
          </button>
          <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - dark bg">
            <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Email address</p>
            </div>
          </button>
          <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - dark bg">
            <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Password</p>
            </div>
          </button>
          <button className="bg-[#f5f0e8] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="mobile small input fields - dark bg">
            <div aria-hidden className="absolute border border-[#969696] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Light',sans-serif] font-light leading-[22px] relative shrink-0 text-[#2c4a2e] text-[14px] text-left whitespace-nowrap">Re-type password</p>
            </div>
          </button>
          <div className="bg-[#8b6a14] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0" data-name="Secondary button - mobile">
            <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[24px]">Create my account</p>
            </div>
          </div>
          <LogInCta />
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <section className="relative shrink-0 w-full" data-name="Map 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[120px] px-[16px] relative size-full">
          <CtaSection />
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
    <footer className="flex-[1_0_0] min-h-px relative w-full" data-name="footer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full">
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
      <div aria-hidden className="absolute border-[#8b6a14] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Map />
      <Footer />
      <Header />
    </div>
  );
}