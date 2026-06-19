import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router";
import { AssessmentProvider, useAssessment, geocodeAddress } from "./AssessmentContext";

// ─── SVG path imports ─────────────────────────────────────────────────────────
import svgDesktop from "@/imports/Desktop/svg-l2arygfuta";
import svgD1 from "@/imports/Desktop-1/svg-3rw82vv18g";
import svgD2 from "@/imports/Desktop-2/svg-wraff2n6ln";
import svgD3 from "@/imports/Desktop-3/svg-tqkbvcj8dd";
import svgD4 from "@/imports/Desktop-4/svg-zaovixv1d5";
import svgD5 from "@/imports/Desktop-5/svg-j1di66uskl";
import svgM from "@/imports/Mobile/svg-sayf7wwu7v";
import svgM1 from "@/imports/Mobile-1/svg-1f3pih7fr0";
import svgM2 from "@/imports/Mobile-2/svg-bhcd57nqc6";
import svgM3 from "@/imports/Mobile-3/svg-o7cn5x6m46";
import svgM4 from "@/imports/Mobile-4/svg-lc4nm0n8vq";
import svgM5 from "@/imports/Mobile-5/svg-bf06g0v0cr";
import svgD7 from "@/imports/Desktop-7/svg-eam2edikl1";
import svgM7 from "@/imports/Mobile-7/svg-rmeypbeqlp";
import svgD8 from "@/imports/Desktop-8/svg-5vzwlzo77u";
import svgM8 from "@/imports/Mobile-8/svg-gbjrq0t46l";
import svgD9 from "@/imports/Desktop-9/svg-dgeajyx9hc";
import svgM9 from "@/imports/Mobile-9/svg-a40sohznbm";

// ─── Image imports ────────────────────────────────────────────────────────────
import imgDesktopBg from "@/imports/Desktop/34f69273496b38a632bb28accf4a00a56beb7cc8.png";
import imgMobileBg from "@/imports/Mobile/34f69273496b38a632bb28accf4a00a56beb7cc8.png";
import imgLogoGreen from "@/imports/Desktop/4bbb69a71a9c77bc7e7a2edf944709e6282e2e0e.png";
import imgLogoWhite from "@/imports/Desktop-5/5274b57671e4506dbf24f1f056a066d970a98d7b.png";

type Page = "landing" | "assess1" | "assess2" | "results" | "dashboard" | "signup" | "login";

// ─── Responsive hook ──────────────────────────────────────────────────────────
function useMobile() {
  const [mobile, setMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

// ─── Shared primitives ────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="h-[40px] relative shrink-0 w-[108px]">
        <img alt="Fallow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoGreen} />
      </div>
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#1a1a18] text-[12px] whitespace-nowrap">For farmers ready for what's next.</p>
    </div>
  );
}

function PlantIcon({ svgData, color = "#2C4A2E" }: { svgData: any; color?: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgData.p207bdd00} fill={color} />
      </svg>
    </div>
  );
}

function Copyright({ svgData, textColor = "#2c4a2e" }: { svgData: any; textColor?: string }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: textColor }}>
        Copyright © 2026 Fallow - All Rights Reserved.
      </p>
      <PlantIcon svgData={svgData} color={textColor} />
    </div>
  );
}

// Large icon button (desktop) with hover state
function LargeIconBtn({ onClick }: { onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0 cursor-pointer border transition-colors ${hov ? "bg-[#8b6a14] border-[#8b6a14]" : "bg-[#f5f0e8] border-[#8b6a14]"}`}
    >
      <div className="relative shrink-0 size-[24px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d="M13 18L19 12L13 6M19 12H5" stroke={hov ? "#F5F0E8" : "#8B6A14"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </button>
  );
}

// Small icon button (mobile/assessment) with hover state
function SmallIconBtn({ onClick, svgData, disabled }: { onClick?: () => void; svgData: any; disabled?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => !disabled && setHov(true)}
      onMouseLeave={() => setHov(false)}
      disabled={disabled}
      className={`content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0 border transition-colors ${disabled ? "bg-[#f5f0e8] border-[#d9d2c4] cursor-default" : hov ? "bg-[#8b6a14] border-[#8b6a14] cursor-pointer" : "bg-[#f5f0e8] border-[#d9d2c4] cursor-pointer"}`}
    >
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgData.p20e5d100} stroke={disabled ? "#D9D2C4" : hov ? "#F5F0E8" : "#D9D2C4"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </svg>
      </div>
    </button>
  );
}

// Tertiary CTA: Next
function TertiaryNext({ onClick, svgData }: { onClick: () => void; svgData: any }) {
  const [hov, setHov] = useState(false);
  const c = hov ? "#2c4a2e" : "#8b6a14";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 cursor-pointer"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
        <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[16px] leading-[24px] transition-colors" style={{ color: c }}>Next</span>
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgData.p20e5d100} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="border-t absolute w-full top-0 transition-colors" style={{ borderColor: c }} />
      </div>
    </button>
  );
}

// Tertiary CTA: Back
function TertiaryBack({ onClick, svgData }: { onClick: () => void; svgData: any }) {
  const [hov, setHov] = useState(false);
  const c = hov ? "#2c4a2e" : "#8b6a14";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 cursor-pointer"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
        <div className="relative size-[16px] rotate-180">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgData.p20e5d100} stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          </svg>
        </div>
        <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[16px] leading-[24px] transition-colors" style={{ color: c }}>Back</span>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="border-t absolute w-full top-0 transition-colors" style={{ borderColor: c }} />
      </div>
    </button>
  );
}

// Radio button with selected state
function RadioBtn({ selected, onSelect, label, textSize = "16px", leading = "24px" }: { selected: boolean; onSelect: () => void; label: string; textSize?: string; leading?: string }) {
  if (selected) {
    return (
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" onClick={onSelect}>
        <div className="relative rounded-[100px] shrink-0 size-[16px] border-[1.4px] border-[#2c4a2e] bg-[#2c4a2e] flex items-center justify-center">
          <div className="bg-[#f5f0e8] rounded-full size-[4.8px] shrink-0" />
        </div>
        <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#1a1a18] text-left flex-1" style={{ fontSize: textSize, lineHeight: leading }}>{label}</p>
      </div>
    );
  }
  return (
    <button onClick={onSelect} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer">
      <div className="relative rounded-[8px] shrink-0 size-[16px] border-[1.4px] border-[#2c4a2e]" style={{ background: "rgba(26,26,24,0.05)" }} />
      <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#1a1a18] text-left flex-1" style={{ fontSize: textSize, lineHeight: leading }}>{label}</p>
    </button>
  );
}

// Map iframe
function MapEmbed({ height = "284px" }: { height?: string }) {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full border-[#2c4a2e] border-[1.4px]" style={{ height }}>
      <iframe
        allowFullScreen
        style={{ border: 0, width: "100%", height: "100%", borderRadius: "inherit" }}
        src="https://maps.google.com/maps?output=embed&pb=%211m18%211m12%211m3%211d12613.824338295351%212d-122.42694877416335%213d37.779349961439706%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x808580999d2acfb3%3A0x687352ddeebecb93%212sSan+Francisco%2C+CA+94102%215e0%213m2%211sen%212sus%214v1737747331503%215m2%211sen%212sus&z=7"
      />
    </div>
  );
}

// Check icon (for dashboard step 1 completed)
function CheckIcon({ svgData }: { svgData: any }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <mask id="ck-mask" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" height="22" x="0" y="0">
              <g>
                <path d={svgData.p1c70eaf0} fill="white" stroke="white" strokeLinejoin="round" strokeWidth="2" />
                <path d="M7.00001 11L10 14L16 8.00001" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </mask>
            <g mask="url(#ck-mask)">
              <path d={svgData.p1ef3b100} fill="#8B6A14" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function StepNum({ n, active }: { n: number; active: boolean }) {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]">
      <div className="absolute left-0 size-[20px] top-[2px]">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="10" fill={active ? "#2C4A2E" : "#D9D2C4"} stroke={active ? "#2C4A2E" : "#D9D2C4"} strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-4px)] top-1/2 whitespace-nowrap">
        <p className="leading-[24px] text-[16px]" style={{ color: active ? "#f5f0e8" : "#969696" }}>{n}</p>
      </div>
    </div>
  );
}

const CONCERNS = [
  "I'm not sure it's financially viable",
  "I have debt tied to my current operation",
  "I don't know what I'd grow instead",
  "Family or community pressure",
  "I don't know where I'd sell my crops",
  "Something else",
];

// ─── Desktop Header ───────────────────────────────────────────────────────────
function DHeader({ btnLabel, onBtn }: { btnLabel: string; onBtn: () => void }) {
  return (
    <div className="absolute bg-[#f5f0e8] left-0 top-0 w-full z-10">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[16px] relative size-full">
        <Logo />
        <button
          onClick={onBtn}
          className="bg-[#2c4a2e] hover:bg-[#8b6a14] transition-colors content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer"
        >
          <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[20px] leading-[28px]">{btnLabel}</span>
        </button>
      </div>
      <div aria-hidden className="absolute border-[#8b6a14] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

// ─── Mobile Header ────────────────────────────────────────────────────────────
function MHeader({ btnLabel, onBtn }: { btnLabel: string; onBtn: () => void }) {
  return (
    <div className="absolute bg-[#f5f0e8] left-0 top-0 w-full z-10">
      <div className="content-stretch flex items-center justify-between overflow-clip p-[16px] relative size-full">
        <Logo />
        <button
          onClick={onBtn}
          className="bg-[#2c4a2e] hover:bg-[#8b6a14] transition-colors content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 cursor-pointer"
        >
          <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[16px] leading-[24px]">{btnLabel}</span>
        </button>
      </div>
      <div aria-hidden className="absolute border-[#8b6a14] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

// ─── Input field helpers ──────────────────────────────────────────────────────
//
// All inputs follow the Figma component spec:
//   • Placeholder state  → Source Sans 3 Light (300), color #2c4a2e (green)
//   • Typed-text state   → Source Sans 3 Medium (500), color #1a1a18 (near-black)
//   • Border focus ring  → green #2c4a2e (light-bg context) or gold #8b6a14 (dark-bg)
//
// Implemented via: font-medium + text-[#1a1a18] on the <input> itself (typed text),
// and placeholder:font-light + placeholder:text-[#2c4a2e] on the ::placeholder.
// "Dark bg" variants use gold focus border because they sit inside dark-green cards.
// "Gray placeholder" variants show #969696 for secondary / re-entry address fields.

// Desktop large — light-bg context — px-16 py-10 — text-20 — green focus border
function DInputLg({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
        <input
          type={type}
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[20px] leading-[28px] w-full outline-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Desktop large — dark-bg context (inside dark-green card) — gold focus border
function DInputLgDark({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#8b6a14] transition-colors">
      <div className="content-stretch flex items-start px-[16px] py-[10px] relative size-full">
        <input
          type={type}
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[20px] leading-[28px] w-full outline-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Desktop small / mobile large — light-bg — px-12 py-8 — text-16 — green focus border — green placeholder
function DInputSm({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
        <input
          type={type}
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[16px] leading-[24px] w-full outline-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Desktop small / mobile large — light-bg — gray placeholder (for address re-entry fields)
function DInputSmGray({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
        <input
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[16px] leading-[24px] w-full outline-none placeholder:font-light placeholder:text-[#969696]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Desktop small / mobile large — dark-bg context — gold focus border — green placeholder
function DInputSmDark({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#8b6a14] transition-colors">
      <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
        <input
          type={type}
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[16px] leading-[24px] w-full outline-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Mobile small — light-bg — px-10 py-8 — text-14 — green focus border — green placeholder
function MInputSm({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
        <input
          type={type}
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[14px] leading-[22px] w-full outline-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Mobile small — light-bg — gray placeholder (address re-entry)
function MInputSmGray({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
        <input
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[14px] leading-[22px] w-full outline-none placeholder:font-light placeholder:text-[#969696]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Mobile small — dark-bg context — gold focus border — green placeholder
function MInputSmDark({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full border border-[#969696] focus-within:border-[#8b6a14] transition-colors">
      <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
        <input
          type={type}
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[14px] leading-[22px] w-full outline-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Textarea — desktop small / mobile large — light-bg — text-16
function DTextareaSm({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full h-[120px] border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
        <textarea
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[16px] leading-[24px] w-full h-full outline-none resize-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Textarea — mobile small — text-14
function MTextareaSm({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-[#f5f0e8] relative rounded-[8px] w-full h-[120px] border border-[#969696] focus-within:border-[#2c4a2e] transition-colors">
      <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
        <textarea
          className="bg-transparent font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#1a1a18] text-[14px] leading-[22px] w-full h-full outline-none resize-none placeholder:font-light placeholder:text-[#2c4a2e]"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// ─── DESKTOP SCREENS ──────────────────────────────────────────────────────────

function DLanding({ navigate }: { navigate: (p: Page) => void }) {
  const { setLocation } = useAssessment();
  const [address, setAddress] = useState("");
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");

  async function handleStart() {
    if (!address.trim() || geoLoading) return;
    setGeoLoading(true);
    setGeoError("");
    const loc = await geocodeAddress(address.trim());
    setGeoLoading(false);
    if (!loc) {
      setGeoError("We couldn't find that location. Try a zip code or \"County, State\".");
      return;
    }
    setLocation(loc);
    navigate("assess1");
  }

  return (
    <div className="content-stretch flex flex-col items-center relative min-h-screen w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <img alt="" className="absolute left-0 top-[1.3%] w-full max-w-none" src={imgDesktopBg} style={{ height: "116.82%" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#8b6a14]" />
      </div>

      <section className="content-stretch flex flex-col gap-[32px] items-center overflow-clip pt-[128px] px-[56px] pb-[56px] relative shrink-0 w-full">
        {/* Word + Definition */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[0] relative shrink-0 text-center">
          <div className="flex flex-col gap-[8px] items-center">
            <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[64px]">
              <h1 className="block leading-[72px]">fal · low</h1>
            </div>
            <div className="flex flex-col font-['Playfair_Display:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#8b6a14] text-[48px]">
              <h1 className="block leading-[56px]">/ˈfalō/</h1>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-center text-[#2c4a2e] text-[32px]">
            <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0">
              <h1 className="block leading-[40px]">adjective</h1>
            </div>
            <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-center">
              <h1 className="block leading-[40px]">(of farmland) left unseeded after plowing;<br />resting, ready to become something new</h1>
            </div>
          </div>
        </div>

        {/* CTA box */}
        <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[128px] py-[48px] relative rounded-[16px] shrink-0 w-full max-w-[970px]">
          <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] text-[#d9d2c4] text-[24px] text-center w-full">Contract livestock farming was never designed to make you wealthy.</p>
          <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[32px] text-[#d9d2c4] text-[24px] text-center w-full">It was designed to make you dependent.</p>
          <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[36px] text-[#f5f0e8] text-[28px] text-center w-full">{"There's a better way to use this land."}</p>
          <div className="border-t border-[#969696] w-full" />
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <div className="flex-[1_0_0] min-w-px">
                <DInputLgDark
                  placeholder="Enter your farm's address or zip code to start your free land assessment"
                  value={address}
                  onChange={setAddress}
                />
              </div>
              <LargeIconBtn onClick={handleStart} />
            </div>
            {geoLoading && (
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#d9d2c4] text-[14px] leading-[20px] px-[4px]">Finding your farm...</p>
            )}
            {geoError && (
              <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#ffb4a8] text-[14px] leading-[20px] px-[4px]">{geoError}</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer with contact */}
      <footer className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip p-[32px] relative shrink-0 w-full">
        <div className="bg-[#d9d2c4] content-stretch flex flex-col gap-[20px] items-center px-[28px] py-[32px] relative rounded-[16px] shrink-0 w-[387px] border-[1.4px] border-[#8b6a14]">
          <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] text-[#2c4a2e] text-[24px] text-center">Drop us a line</p>
          <DInputSm placeholder="Name" value={contactName} onChange={setContactName} />
          <DInputSm placeholder="Email address" value={contactEmail} onChange={setContactEmail} type="email" />
          <DTextareaSm placeholder="Message" value={contactMsg} onChange={setContactMsg} />
          <button className="group content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 border border-[#8b6a14] cursor-pointer hover:bg-[#8b6a14] transition-colors">
            <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#8b6a14] group-hover:text-[#f5f0e8] text-[16px] leading-[24px] transition-colors">Submit</span>
          </button>
        </div>
        <Copyright svgData={svgD5} textColor="#f5f0e8" />
      </footer>

      <DHeader btnLabel="Get started" onBtn={() => navigate("assess1")} />
    </div>
  );
}

function DAssess1({ navigate }: { navigate: (p: Page) => void }) {
  const { location, setLocation, farmType, setFarmType } = useAssessment();
  const [reAddress, setReAddress] = useState("");
  const [reLoading, setReLoading] = useState(false);

  async function handleReGeocode() {
    if (!reAddress.trim() || reLoading) return;
    setReLoading(true);
    const loc = await geocodeAddress(reAddress.trim());
    setReLoading(false);
    if (loc) {
      setLocation(loc);
      setReAddress("");
    }
  }

  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";

  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex gap-[32px] items-center pb-[56px] pt-[128px] px-[56px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px pt-[48px] relative">
            <MapEmbed />
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#2c4a2e]">
              <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[24px]"><h1 className="block leading-[32px]">Assessing farmland in</h1></div>
              <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[40px]"><h1 className="block leading-[48px]">{countyLabel}</h1></div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="flex-[1_0_0] min-w-px"><DInputSmGray placeholder="Enter a different zip code or address" value={reAddress} onChange={setReAddress} /></div>
              <SmallIconBtn svgData={svgD1} onClick={handleReGeocode} disabled={reLoading} />
            </div>
          </div>
          <div className="flex-[1_0_0] h-full min-w-px relative">
            <div className="content-stretch flex flex-col gap-[24px] items-center px-[24px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#2c4a2e] text-[16px] text-center w-full">We need some more information to complete your assessment:</p>
              <div className="bg-[#d9d2c4] relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-center p-[40px] relative size-full">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#2c4a2e] w-full">
                    <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[20px]"><h1 className="block leading-[28px]">What are you currently farming?</h1></div>
                    <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[16px]"><h1 className="block leading-[24px]">This helps us understand what infrastructure you have and what transition paths make sense.</h1></div>
                  </div>
                  <DInputSm placeholder="E.g. beef cattle, dairy cattle, poultry..." value={farmType} onChange={setFarmType} />
                </div>
              </div>
              <TertiaryNext onClick={() => navigate("assess2")} svgData={svgD1} />
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[32px] relative size-full"><Copyright svgData={svgD1} /></div>
      </footer>
      <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

function DAssess2({ navigate }: { navigate: (p: Page) => void }) {
  const { location, setLocation, concern, setConcern } = useAssessment();
  const [reAddress, setReAddress] = useState("");
  const [reLoading, setReLoading] = useState(false);
  const selectedIndex = CONCERNS.indexOf(concern);

  async function handleReGeocode() {
    if (!reAddress.trim() || reLoading) return;
    setReLoading(true);
    const loc = await geocodeAddress(reAddress.trim());
    setReLoading(false);
    if (loc) {
      setLocation(loc);
      setReAddress("");
    }
  }

  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";

  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex gap-[32px] items-center pb-[56px] pt-[128px] px-[56px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px pt-[48px] relative">
            <MapEmbed />
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#2c4a2e]">
              <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[24px]"><h1 className="block leading-[32px]">Assessing farmland in</h1></div>
              <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[40px]"><h1 className="block leading-[48px]">{countyLabel}</h1></div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
              <div className="flex-[1_0_0] min-w-px"><DInputSmGray placeholder="Enter a different zip code or address" value={reAddress} onChange={setReAddress} /></div>
              <SmallIconBtn svgData={svgD2} onClick={handleReGeocode} disabled={reLoading} />
            </div>
          </div>
          <div className="flex-[1_0_0] h-full min-w-px relative">
            <div className="content-stretch flex flex-col gap-[24px] items-center px-[24px] relative size-full">
              <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[26px] text-[#2c4a2e] text-[18px] text-center w-full">Who can help you right now:</p>
              <div className="bg-[#d9d2c4] relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#2c4a2e] w-full">
                    <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[20px]"><h1 className="block leading-[28px]">{"What's your biggest concern about transitioning?"}</h1></div>
                    <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[16px]"><h1 className="block leading-[24px]">Be honest — this shapes the guidance we give you.</h1></div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    {CONCERNS.map((label, i) => (
                      <RadioBtn key={i} selected={selectedIndex === i} onSelect={() => setConcern(label)} label={label} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0">
                <TertiaryBack onClick={() => navigate("assess1")} svgData={svgD2} />
                <TertiaryNext onClick={() => navigate("results")} svgData={svgD2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[32px] relative size-full"><Copyright svgData={svgD2} /></div>
      </footer>
      <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

function DResults({ navigate }: { navigate: (p: Page) => void }) {
  const { location, farmType, concern, result, loading, error, runAssessment } = useAssessment();

  useEffect(() => {
    if (location && farmType && concern && !result && !loading) {
      runAssessment();
    }
  }, [location, farmType, concern]);

  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";

  if (!location || !farmType || !concern) {
    return (
      <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
        <section className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pb-[56px] pt-[160px] px-[56px] relative size-full">
            <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[40px] leading-[48px] text-center">Let's start your assessment</h1>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#1a1a18] text-[18px] leading-[26px] text-center max-w-[500px]">We need your location, farm type, and biggest concern before we can build your assessment.</p>
            <button onClick={() => navigate("landing")} className="bg-[#2c4a2e] hover:bg-[#8b6a14] transition-colors content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[20px] leading-[28px]">Start assessment</span>
            </button>
          </div>
        </section>
        <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
      </div>
    );
  }

  if (loading || (!result && !error)) {
    return (
      <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
        <section className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pb-[56px] pt-[160px] px-[56px] relative size-full">
            <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[40px] leading-[48px] text-center">Building your assessment...</h1>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#1a1a18] text-[18px] leading-[26px] text-center max-w-[500px]">Pulling regional data for {countyLabel} and matching it to your situation. This takes about 15 seconds.</p>
          </div>
        </section>
        <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
        <section className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pb-[56px] pt-[160px] px-[56px] relative size-full">
            <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[40px] leading-[48px] text-center">Something went wrong</h1>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#1a1a18] text-[18px] leading-[26px] text-center max-w-[500px]">{error || "We couldn't generate your assessment."}</p>
            <button onClick={() => runAssessment()} className="bg-[#2c4a2e] hover:bg-[#8b6a14] transition-colors content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[20px] leading-[28px]">Try again</span>
            </button>
          </div>
        </section>
        <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
      </div>
    );
  }

  const matchBadgeStyle: Record<string, { bg: string; border: string; text: string }> = {
    "Strong match": { bg: "bg-[#e9f0ea]", border: "border-[#2c4a2e]", text: "text-[#2c4a2e]" },
    "Good match": { bg: "bg-[#f5f0e8]", border: "border-[#8b6a14]", text: "text-[#8b6a14]" },
    "Worth exploring": { bg: "bg-[#ffdad3]", border: "border-[#8b6a14]", text: "text-[#8b6a14]" },
  };

  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pb-[56px] pt-[128px] px-[56px] relative size-full">

            {/* Page title */}
            <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[48px] w-[min-content]">
              <h1 className="block leading-[56px]">Your Fallow assessment is ready!</h1>
            </div>

            {/* Info banner */}
            <div className="bg-[#d9d2c4] relative rounded-[12px] shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
                <div className="relative shrink-0 size-[32px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <path d={svgD9.p3034a0f0} fill="#1A1A18" />
                  </svg>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1a18] text-[16px]">
                  <p className="leading-[24px]">{`This assessment is based on your three answers plus regional data for ${countyLabel}. Some details — like acreage and infrastructure — are estimated from what's typical for ${farmType.toLowerCase()} farms in your area. Your actual situation may vary.`}</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Left */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[536px] items-start justify-center min-w-px relative">
                <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="flex-[1_0_0] min-h-px relative w-full">
                      <iframe allowFullScreen className="embed overflow-clip size-full" style={{ border: 0, width: "100%", height: "100%" }} src={`https://maps.google.com/maps?q=${encodeURIComponent(countyLabel)}&output=embed&z=9`} />
                    </div>
                  </div>
                  <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32"><path d={svgD9.pd41c500} fill="#2C4A2E" /></svg>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[32px] text-center whitespace-nowrap">
                    <h1 className="block leading-[40px]">{countyLabel}</h1>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <div className="overflow-clip relative shrink-0 size-[32px]">
                      <div className="absolute inset-[11.27%_12.71%_8.33%_12.31%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9941 25.7266">
                          <path d={svgD9.p5133800} fill="#8B6A14" /><path clipRule="evenodd" d={svgD9.p318a1980} fill="#8B6A14" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[20px] whitespace-nowrap">
                      <p className="leading-[28px]">{farmType}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <div className="overflow-clip relative shrink-0 size-[32px]">
                      <div className="absolute inset-[8.33%_12.5%]"><div className="absolute inset-[-2.81%_-3.13%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4999 28.1667">
                          <path d={svgD9.p2fed7700} stroke="#C4432A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgD9.pa4f8280} stroke="#C4432A" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgD9.p49fd040} stroke="#C4432A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div></div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c4432a] text-[20px] whitespace-nowrap">
                      <p className="leading-[28px]">{concern}</p>
                    </div>
                  </div>
                </div>
                <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
                  {result.infrastructureTags.map((tag, i) => (
                    <div key={i} className="bg-[#d9d2c4] content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[24px] shrink-0">
                      <div className="relative shrink-0 size-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16"><path d={svgD9.pd1d5b00} fill="#2C4A2E" /></svg></div>
                      <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap"><p className="leading-[22px]">{tag}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
                {/* Summary */}
                <div className="relative shrink-0 w-full">
                  <div aria-hidden className="absolute border-[#2c4a2e] border-l-[4.2px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] px-[32px] py-[8px] relative size-full">
                      <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[28px] w-full">
                        <p className="leading-[36px]">What we know about your land</p>
                      </div>
                      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[20px] w-full">
                        <p className="leading-[28px]">{result.landSummary}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Readiness */}
                <div className="relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[24px] w-full">
                      <p className="leading-[32px]">Transition readiness</p>
                    </div>
                    <div className="bg-[#e9f0ea] relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
                          <div className="relative shrink-0 size-[32px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32"><path d={svgD9.p12cdf500} fill="#2C4A2E" /></svg></div>
                          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[20px] whitespace-nowrap">
                            <p className="leading-[28px]">{result.readiness.summary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[32px] items-center px-[16px] relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Land suitability</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgD9.p3e349e80} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.landSuitability}%</p></div>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Infrastructure</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgD9.p3943a580} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.infrastructure}%</p></div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Financial position</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgD9.p9901500} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.financialPosition}%</p></div>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Market access</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgD9.p24b82e40} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.marketAccess}%</p></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards — h-[464px] flex row */}
            <div className="content-stretch flex gap-[16px] h-[464px] items-start relative shrink-0 w-full">
              {result.crops.map((crop, i) => {
                const style = matchBadgeStyle[crop.match] ?? matchBadgeStyle["Worth exploring"];
                return (
                  <article key={i} className="bg-[#d9d2c4] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
                            <div className="relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
                                <div className={`${style.bg} content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0`}>
                                  <div aria-hidden className={`absolute border ${style.border} border-solid inset-0 pointer-events-none rounded-[8px]`} />
                                  <div className={`[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${style.text} text-[18px] whitespace-nowrap`}><p className="leading-[26px]">{crop.match}</p></div>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]"><h5 className="block leading-[28px]">{crop.name}</h5></div>
                                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]"><p className="leading-[24px]">{crop.why}</p></div>
                              </div>
                            </div>
                            <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-0.8px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.667 0.8"><line stroke="#969696" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="330.267" y1="0.4" y2="0.4" /></svg></div></div>
                            <div className="relative shrink-0 w-full">
                              <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] p-[8px] relative size-full text-[14px]">
                                <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 text-[#2c4a2e] w-[115px]">
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[18px]">Earning potential</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[18px]">Time to income</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[18px]">Est. conversion cost</p></div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative text-[#1a1a18] text-right">
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[22px]">{crop.earningPotential}</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[22px]">{crop.timeToIncome}</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[22px]">{crop.conversionCost}</p></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  </article>
                );
              })}
            </div>

            {/* Section */}
            <div className="content-stretch flex flex-col gap-[32px] items-center py-[32px] relative shrink-0 w-full">
              <div className="max-w-[773px] relative shrink-0 w-full">
                <div aria-hidden className="absolute border-[#c4432a] border-l-[4.2px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] max-w-[inherit] px-[24px] py-[4px] relative size-full">
                    <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#c4432a] text-[24px] w-full">
                      <p className="leading-[32px]">{result.obstacleHeadline}</p>
                    </div>
                    <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[18px] w-full">
                      <p className="leading-[26px]">{result.obstacleBody}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[800px]"><div className="absolute inset-[-0.8px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 0.8"><line stroke="#D9D2C4" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="799.6" y1="0.4" y2="0.4" /></svg></div></div>
              <div className="content-stretch flex flex-col gap-[24px] items-center px-[64px] relative shrink-0 w-[773px]">
                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[18px] text-center w-full">
                  <p className="leading-[26px]">Here's a free resource to check out:</p>
                </div>
                <article className="bg-[#e9f0ea] relative rounded-[16px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[32px] pt-[24px] px-[24px] relative size-full">
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                            <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[20px] w-full"><h5 className="block leading-[28px]">{result.resourceName}</h5></div>
                            <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[16px] w-full"><p className="leading-[24px]">{result.resourceDescription}</p></div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                            <a href={result.resourceUrl} target="_blank" rel="noreferrer" className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] whitespace-nowrap"><span className="block leading-[24px]">Visit their website</span></div>
                              <div className="relative shrink-0 size-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16"><path d={svgD9.p20e5d100} stroke="#8B6A14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg></div>
                            </a>
                            <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-0.7px_-0.48%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.4 1.4"><path d="M0.7 0.7H145.7" stroke="#8B6A14" strokeLinecap="round" strokeWidth="1.4" /></svg></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </article>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[64px] py-[48px] relative rounded-[16px] shrink-0 w-[970px]">
              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#d9d2c4] text-[24px] text-center w-[min-content]"><p className="leading-[32px]">We've assessed your land.</p></div>
              <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[28px] text-center w-[min-content]"><p className="leading-[36px]">Now let's turn it into a plan that unlocks funding.</p></div>
              <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-0.8px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 842 0.8"><line stroke="#969696" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="841.6" y1="0.4" y2="0.4" /></svg></div></div>
              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[20px] text-center w-[min-content]"><p className="leading-[28px]">{`Most transition grants — including USDA EQIP and the Transfarmation R&I Grant — require a basic business plan. Fallow builds it with you, section by section, using everything we already know about your land. It takes about 20 minutes and gives you a document you can submit directly.`}</p></div>
              <button onClick={() => navigate("signup")} className="bg-[#8b6a14] hover:bg-[#6e5210] transition-colors content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer">
                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[20px] text-center whitespace-nowrap"><p className="leading-[28px]">Start my plan</p></div>
              </button>
            </div>

          </div>
        </div>
      </section>
      <footer className="content-stretch flex flex-col items-center justify-end overflow-clip p-[32px] relative shrink-0 w-full">
        <Copyright svgData={svgD9} />
      </footer>
      <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}


function DDashboard({ navigate }: { navigate: (p: Page) => void }) {
  const { location } = useAssessment();
  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[56px] pt-[128px] px-[56px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#2c4a2e] text-[32px]">
            <h1 className="block leading-[40px]">Welcome back.</h1>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0"><CheckIcon svgData={svgD4} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#8b6a14] text-[18px] leading-[26px]">Assess</span></div>
            <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d="M13 18L19 12L13 6M19 12H5" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0"><StepNum n={2} active={true} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#2c4a2e] text-[18px] leading-[26px]">Plan</span></div>
            <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d="M13 18L19 12L13 6M19 12H5" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0"><StepNum n={3} active={false} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#969696] text-[18px] leading-[26px]">Connect</span></div>
            <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d="M13 18L19 12L13 6M19 12H5" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0"><StepNum n={4} active={false} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#969696] text-[18px] leading-[26px]">Grow</span></div>
          </div>
          <div className="bg-[#d9d2c4] rounded-[16px] w-full p-[40px] border-[1.4px] border-[#2c4a2e] mt-[8px]">
            <p className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[28px] leading-[36px] mb-[16px]">{"Your business plan is in progress."}</p>
            <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[#1a1a18] text-[18px] leading-[26px]">{`We're building your transition plan based on your assessment. Continue below to complete each section — we'll use your ${countyLabel} data to pre-fill as much as possible.`}</p>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[32px] relative size-full"><Copyright svgData={svgD4} /></div>
      </footer>
      <DHeader btnLabel="Log out" onBtn={() => navigate("landing")} />
    </div>
  );
}

function DSignup({ navigate }: { navigate: (p: Page) => void }) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [pass2, setPass2] = useState("");
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center pb-[56px] pt-[128px] px-[56px] relative size-full">
          <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip p-[64px] relative rounded-[16px] shrink-0 w-[576px]">
            <div className="h-[30px] relative shrink-0 w-[81px]"><img alt="Fallow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite} /></div>
            <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[36px] text-[#f5f0e8] text-[28px] text-center w-full">{"Let's start working on your business plan."}</p>
            <div className="border-t border-[#969696] w-full" />
            <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[28px] text-[#f5f0e8] text-[20px] text-center w-full">Create your free Fallow account to save your progress and pick up right where you left off.</p>
            <DInputLgDark placeholder="Full name" value={name} onChange={setName} />
            <DInputLgDark placeholder="Email address" value={email} onChange={setEmail} type="email" />
            <DInputLgDark placeholder="Password" value={pass} onChange={setPass} type="password" />
            <DInputLgDark placeholder="Re-type password" value={pass2} onChange={setPass2} type="password" />
            <button onClick={() => navigate("dashboard")} className="bg-[#8b6a14] hover:bg-[#6e5210] transition-colors content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer w-full">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[20px] leading-[28px]">Create my account</span>
            </button>
            <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[6px] items-start justify-center relative shrink-0 text-[#f5f0e8] text-[16px] text-center w-full whitespace-nowrap">
              <span className="leading-[24px]">Already have an account?</span>
              <button onClick={() => navigate("login")} className="leading-[24px] underline cursor-pointer hover:text-[#d9d2c4] transition-colors">Log in</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[32px] relative size-full"><Copyright svgData={svgD5} /></div>
      </footer>
      <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

function DLogin({ navigate }: { navigate: (p: Page) => void }) {
  const [email, setEmail] = useState(""); const [pass, setPass] = useState("");
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[56px] pt-[128px] px-[56px] relative size-full">
          <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip p-[64px] relative rounded-[16px] shrink-0 w-[576px]">
            <div className="h-[30px] relative shrink-0 w-[81px]"><img alt="Fallow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite} /></div>
            <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[36px] text-[#f5f0e8] text-[28px] text-center w-full">Pick up right where you left off.</p>
            <div className="border-t border-[#969696] w-full" />
            <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#f5f0e8] text-[16px] text-center w-full">Log in to your Fallow account to continue your business plan.</p>
            <DInputLgDark placeholder="Email address" value={email} onChange={setEmail} type="email" />
            <DInputLgDark placeholder="Password" value={pass} onChange={setPass} type="password" />
            <button onClick={() => navigate("dashboard")} className="bg-[#8b6a14] hover:bg-[#6e5210] transition-colors content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer w-full">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[20px] leading-[28px]">Log in</span>
            </button>
            <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[6px] items-start justify-center relative shrink-0 text-[#f5f0e8] text-[16px] text-center w-full whitespace-nowrap">
              <span className="leading-[24px]">{"Don't have an account yet?"}</span>
              <button onClick={() => navigate("landing")} className="leading-[24px] underline cursor-pointer hover:text-[#d9d2c4] transition-colors">Start your assessment</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[32px] relative size-full"><Copyright svgData={svgD5} /></div>
      </footer>
      <DHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

// ─── MOBILE SCREENS ───────────────────────────────────────────────────────────

function MLanding({ navigate }: { navigate: (p: Page) => void }) {
  const [address, setAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");

  return (
    <div className="content-stretch flex flex-col items-center relative min-h-screen w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <img alt="" className="absolute top-0 max-w-none" src={imgMobileBg} style={{ height: "100%", left: "-104.26%", width: "308.52%" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-[#8b6a14]" />
      </div>

      <section className="relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center pb-[56px] pt-[128px] px-[16px] relative size-full">
            {/* Word + Definition */}
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-center leading-[0] relative shrink-0 text-center w-full">
              <div className="flex flex-col gap-[8px] items-center whitespace-nowrap">
                <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[#2c4a2e] text-[48px]"><h1 className="block leading-[56px]">fal · low</h1></div>
                <div className="flex flex-col font-['Playfair_Display:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center text-[#8b6a14] text-[32px]"><h1 className="block leading-[40px]">/ˈfalō/</h1></div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-[#2c4a2e] text-[20px] w-[343px]">
                <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center whitespace-nowrap"><h1 className="block leading-[28px]">adjective</h1></div>
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center w-full">
                  <h1 className="block leading-[28px]">(of farmland) <br />left unseeded after plowing; <br />resting, ready to become something new</h1>
                </div>
              </div>
            </div>

            {/* CTA box */}
            <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip px-[24px] py-[32px] relative rounded-[16px] shrink-0 w-[343px]">
              <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[26px] text-[#d9d2c4] text-[18px] text-center w-full">Contract livestock farming was never designed to make you wealthy.</p>
              <p className="[word-break:break-word] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[26px] text-[#d9d2c4] text-[18px] text-center w-full">It was designed to make you dependent.</p>
              <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] text-[#f5f0e8] text-[24px] text-center w-full">{"There's a better way to \nuse this land."}</p>
              <div className="border-t border-[#969696] w-full" />
              <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
                <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#f5f0e8] text-[16px] text-center w-full">Start your free land assessment:</p>
                <div className="w-full">
                  <DInputSmDark placeholder="Your farm's address or zip code" value={address} onChange={setAddress} />
                </div>
                <button
                  onClick={() => navigate("assess1")}
                  className="bg-[#f5f0e8] hover:bg-[#8b6a14] group content-stretch flex items-center p-[8px] relative rounded-[40px] shrink-0 border border-[#8b6a14] cursor-pointer transition-colors"
                >
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgM.p20e5d100} stroke="#8B6A14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" className="group-hover:hidden" />
                      <path d={svgM.p20e5d100} stroke="#F5F0E8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" className="hidden group-hover:block" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
            <div className="bg-[#d9d2c4] content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[28px] relative rounded-[16px] shrink-0 w-[311px] border-[1.4px] border-[#8b6a14]">
              <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[28px] text-[#2c4a2e] text-[20px] text-center">Drop us a line</p>
              <MInputSm placeholder="Name" value={contactName} onChange={setContactName} />
              <MInputSm placeholder="Email address" value={contactEmail} onChange={setContactEmail} type="email" />
              <MTextareaSm placeholder="Message" value={contactMsg} onChange={setContactMsg} />
              <button className="group content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 border border-[#8b6a14] cursor-pointer hover:bg-[#8b6a14] transition-colors">
                <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#8b6a14] group-hover:text-[#f5f0e8] text-[16px] leading-[24px] transition-colors">Submit</span>
              </button>
            </div>
            <Copyright svgData={svgM} textColor="#f5f0e8" />
          </div>
        </div>
      </footer>

      <MHeader btnLabel="Get started" onBtn={() => navigate("assess1")} />
    </div>
  );
}

function MAssess1({ navigate }: { navigate: (p: Page) => void }) {
  const { location, setLocation, farmType, setFarmType } = useAssessment();
  const [reAddress, setReAddress] = useState("");
  const [reLoading, setReLoading] = useState(false);

  async function handleReGeocode() {
    if (!reAddress.trim() || reLoading) return;
    setReLoading(true);
    const loc = await geocodeAddress(reAddress.trim());
    setReLoading(false);
    if (loc) {
      setLocation(loc);
      setReAddress("");
    }
  }

  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";

  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center pt-[120px] px-[16px] relative size-full">
          {/* Left */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
              <MapEmbed height="232px" />
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 text-[#2c4a2e] w-full">
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[20px]"><h1 className="block leading-[28px]">Assessing farmland in</h1></div>
                <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[32px]"><h1 className="block leading-[40px]">{countyLabel}</h1></div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <div className="flex-[1_0_0] min-w-px"><DInputSmGray placeholder="Enter a different zip code or address" value={reAddress} onChange={setReAddress} /></div>
                <SmallIconBtn svgData={svgM1} onClick={handleReGeocode} disabled={reLoading} />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="content-stretch flex flex-col gap-[16px] items-center py-[16px] relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[22px] text-[#2c4a2e] text-[14px] text-center w-full">We need some more information to complete your assessment:</p>
            <div className="bg-[#d9d2c4] relative rounded-[16px] shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative size-full">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#2c4a2e] w-full">
                  <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[18px] w-full"><h1 className="block leading-[26px]">What are you currently farming?</h1></div>
                  <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[14px] w-full"><h1 className="block leading-[22px]">This helps us understand the infrastructure you have and identify which transition paths make sense.</h1></div>
                </div>
                <MInputSm placeholder="E.g. beef cattle, dairy cattle, poultry..." value={farmType} onChange={setFarmType} />
              </div>
            </div>
            <TertiaryNext onClick={() => navigate("assess2")} svgData={svgM1} />
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full"><Copyright svgData={svgM1} /></div>
      </footer>
      <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

function MAssess2({ navigate }: { navigate: (p: Page) => void }) {
  const { location, setLocation, concern, setConcern } = useAssessment();
  const [reAddress, setReAddress] = useState("");
  const [reLoading, setReLoading] = useState(false);
  const selectedIndex = CONCERNS.indexOf(concern);

  async function handleReGeocode() {
    if (!reAddress.trim() || reLoading) return;
    setReLoading(true);
    const loc = await geocodeAddress(reAddress.trim());
    setReLoading(false);
    if (loc) {
      setLocation(loc);
      setReAddress("");
    }
  }

  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";

  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center pt-[120px] px-[16px] relative size-full">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
              <MapEmbed height="232px" />
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 text-[#2c4a2e] w-full">
                <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[20px]"><h1 className="block leading-[28px]">Assessing farmland in</h1></div>
                <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[32px]"><h1 className="block leading-[40px]">{countyLabel}</h1></div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <div className="flex-[1_0_0] min-w-px"><DInputSmGray placeholder="Enter a different zip code or address" value={reAddress} onChange={setReAddress} /></div>
                <SmallIconBtn svgData={svgM2} onClick={handleReGeocode} disabled={reLoading} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-center py-[16px] relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[26px] text-[#2c4a2e] text-[18px] text-center w-full">Who can help you right now:</p>
            <div className="bg-[#d9d2c4] relative rounded-[16px] shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#2c4a2e] w-full">
                  <div className="flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center text-[18px] w-full"><h1 className="block leading-[26px]">{"What's your biggest concern about transitioning?"}</h1></div>
                  <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center text-[14px] w-full"><h1 className="block leading-[22px]">Be honest — this shapes the guidance we give you.</h1></div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  {CONCERNS.map((label, i) => (
                    <RadioBtn key={i} selected={selectedIndex === i} onSelect={() => setConcern(label)} label={label} textSize="14px" leading="22px" />
                  ))}
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
              <TertiaryBack onClick={() => navigate("assess1")} svgData={svgM2} />
              <TertiaryNext onClick={() => navigate("results")} svgData={svgM2} />
            </div>
          </div>
        </div>
      </section>
      <footer className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full"><Copyright svgData={svgM2} /></div>
      </footer>
      <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

function MResults({ navigate }: { navigate: (p: Page) => void }) {
  const { location, farmType, concern, result, loading, error, runAssessment } = useAssessment();

  useEffect(() => {
    if (location && farmType && concern && !result && !loading) {
      runAssessment();
    }
  }, [location, farmType, concern]);

  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";

  if (!location || !farmType || !concern) {
    return (
      <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
        <section className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center pt-[140px] px-[16px] pb-[56px] relative size-full">
            <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[28px] leading-[36px] text-center">Let's start your assessment</h1>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#1a1a18] text-[16px] leading-[24px] text-center">We need your location, farm type, and biggest concern first.</p>
            <button onClick={() => navigate("landing")} className="bg-[#2c4a2e] hover:bg-[#8b6a14] transition-colors content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 cursor-pointer">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[16px] leading-[24px]">Start assessment</span>
            </button>
          </div>
        </section>
        <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
      </div>
    );
  }

  if (loading || (!result && !error)) {
    return (
      <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
        <section className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center pt-[140px] px-[16px] pb-[56px] relative size-full">
            <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[28px] leading-[36px] text-center">Building your assessment...</h1>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#1a1a18] text-[16px] leading-[24px] text-center">Pulling regional data for {countyLabel}. About 15 seconds.</p>
          </div>
        </section>
        <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
        <section className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center pt-[140px] px-[16px] pb-[56px] relative size-full">
            <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[28px] leading-[36px] text-center">Something went wrong</h1>
            <p className="font-['Source_Sans_3:Regular',sans-serif] text-[#1a1a18] text-[16px] leading-[24px] text-center">{error || "We couldn't generate your assessment."}</p>
            <button onClick={() => runAssessment()} className="bg-[#2c4a2e] hover:bg-[#8b6a14] transition-colors content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 cursor-pointer">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[16px] leading-[24px]">Try again</span>
            </button>
          </div>
        </section>
        <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
      </div>
    );
  }

  const matchBadgeStyle: Record<string, { bg: string; border: string; text: string }> = {
    "Strong match": { bg: "bg-[#e9f0ea]", border: "border-[#2c4a2e]", text: "text-[#2c4a2e]" },
    "Good match": { bg: "bg-[#f5f0e8]", border: "border-[#8b6a14]", text: "text-[#8b6a14]" },
    "Worth exploring": { bg: "bg-[#ffdad3]", border: "border-[#8b6a14]", text: "text-[#8b6a14]" },
  };

  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pt-[120px] px-[16px] relative size-full">

            <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[32px] w-full">
              <h1 className="block leading-[40px]">Your Fallow assessment is ready!</h1>
            </div>

            {/* Info */}
            <div className="bg-[#d9d2c4] relative rounded-[12px] shrink-0 w-full">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-center px-[24px] py-[20px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[14px] w-[min-content]">
                    <p className="leading-[22px]">{`This assessment is based on your three answers plus regional data for ${countyLabel}. Some details — like acreage and infrastructure — are estimated from what's typical for ${farmType.toLowerCase()} farms in your area. Your actual situation may vary.`}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              {/* Left */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[16px] relative size-full">
                    <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                        <div className="flex-[1_0_0] min-h-px relative w-full">
                          <iframe allowFullScreen className="embed overflow-clip size-full" style={{ border: 0, width: "100%", height: "100%" }} src={`https://maps.google.com/maps?q=${encodeURIComponent(countyLabel)}&output=embed&z=9`} />
                        </div>
                      </div>
                      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    </div>
                    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgM9.p3aac8400} fill="#2C4A2E" /></svg></div>
                      <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[24px] text-center whitespace-nowrap"><h1 className="block leading-[32px]">{countyLabel}</h1></div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[11.27%_12.71%_8.33%_12.31%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9956 19.295"><path d={svgM9.p36650b00} fill="#8B6A14" /><path clipRule="evenodd" d={svgM9.p223b6260} fill="#8B6A14" fillRule="evenodd" /></svg></div></div>
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#8b6a14] text-[18px]"><p className="leading-[26px]">{farmType}</p></div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[8.33%_12.5%]"><div className="absolute inset-[-3.75%_-4.17%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 21.5"><path d={svgM9.p3ae90880} stroke="#C4432A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d={svgM9.p16796500} stroke="#C4432A" strokeLinejoin="round" strokeWidth="1.5" /><path d={svgM9.pb617ef0} stroke="#C4432A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg></div></div></div>
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#c4432a] text-[18px]"><p className="leading-[26px]">{concern}</p></div>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-[12px_20px] items-start relative shrink-0 w-full">
                      {result.infrastructureTags.map((tag, i) => (
                        <div key={i} className="bg-[#d9d2c4] content-center flex flex-wrap gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[24px] shrink-0">
                          <div className="relative shrink-0 size-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16"><path d={svgM9.pd1d5b00} fill="#2C4A2E" /></svg></div>
                          <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[14px] whitespace-nowrap"><p className="leading-[22px]">{tag}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div aria-hidden className="absolute border-[#2c4a2e] border-l-[4.2px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] px-[32px] py-[8px] relative size-full">
                      <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[24px] w-full"><p className="leading-[32px]">What we know about your land</p></div>
                      <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[18px] w-full"><p className="leading-[26px]">{result.landSummary}</p></div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[20px] w-full"><p className="leading-[28px]">Transition readiness</p></div>
                    <div className="bg-[#e9f0ea] relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative size-full">
                          <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgM9.p1cafa280} fill="#2C4A2E" /></svg></div>
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#2c4a2e] text-[18px]"><p className="leading-[26px]">{result.readiness.summary}</p></div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[8px] relative size-full">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Land suitability</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgM9.p3e349e80} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.landSuitability}%</p></div>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Infrastructure</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgM9.p3943a580} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.infrastructure}%</p></div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Financial position</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgM9.p9901500} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.financialPosition}%</p></div>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#969696] text-[16px]"><p className="leading-[24px]">Market access</p></div>
                              <div className="relative shrink-0 size-[24px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d={svgM9.p24b82e40} fill="#8B6A14" /></svg></div>
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] w-[30px]"><p className="leading-[24px]">{result.readiness.marketAccess}%</p></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards — stacked */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {result.crops.map((crop, i) => {
                const style = matchBadgeStyle[crop.match] ?? matchBadgeStyle["Worth exploring"];
                return (
                  <article key={i} className="bg-[#d9d2c4] relative rounded-[16px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
                            <div className="relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
                                <div className={`${style.bg} content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0`}>
                                  <div aria-hidden className={`absolute border ${style.border} border-solid inset-0 pointer-events-none rounded-[8px]`} />
                                  <div className={`[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${style.text} text-[18px] whitespace-nowrap`}><p className="leading-[26px]">{crop.match}</p></div>
                                </div>
                                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#2c4a2e] text-[20px] w-[min-content]"><h5 className="block leading-[28px]">{crop.name}</h5></div>
                                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a18] text-[16px] w-[min-content]"><p className="leading-[24px]">{crop.why}</p></div>
                              </div>
                            </div>
                            <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-0.8px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 0.8"><line stroke="#969696" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="294.6" y1="0.4" y2="0.4" /></svg></div></div>
                            <div className="relative shrink-0 w-full">
                              <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] p-[8px] relative size-full">
                                <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 text-[#2c4a2e] text-[14px] w-[115px]">
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[18px]">Earning potential</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[18px]">Time to income</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[18px]">Est. conversion cost</p></div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px relative text-[#1a1a18] text-[12px] text-right">
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[20px]">{crop.earningPotential}</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[20px]">{crop.timeToIncome}</p></div>
                                  <div className="flex flex-col justify-center relative shrink-0 w-full"><p className="leading-[20px]">{crop.conversionCost}</p></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  </article>
                );
              })}
            </div>

            {/* Section */}
            <div className="content-stretch flex flex-col gap-[32px] items-center py-[16px] relative shrink-0 w-full">
              <div className="max-w-[773px] relative shrink-0 w-full">
                <div aria-hidden className="absolute border-[#c4432a] border-l-[4.2px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] max-w-[inherit] px-[24px] py-[4px] relative size-full">
                    <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#c4432a] text-[20px] w-full"><p className="leading-[28px]">{result.obstacleHeadline}</p></div>
                    <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[16px] w-full"><p className="leading-[24px]">{result.obstacleBody}</p></div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[800px]"><div className="absolute inset-[-0.8px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 0.8"><line stroke="#D9D2C4" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="799.6" y1="0.4" y2="0.4" /></svg></div></div>
              <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2c4a2e] text-[16px] text-center w-full"><p className="leading-[24px]">Here's a free resource to check out:</p></div>
                <article className="bg-[#e9f0ea] relative rounded-[16px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative size-full">
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                            <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[18px] w-full"><h5 className="block leading-[26px]">{result.resourceName}</h5></div>
                            <div className="flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1a18] text-[16px] w-full"><p className="leading-[24px]">{result.resourceDescription}</p></div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                            <a href={result.resourceUrl} target="_blank" rel="noreferrer" className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8b6a14] text-[16px] whitespace-nowrap"><span className="block leading-[24px]">Visit their website</span></div>
                              <div className="relative shrink-0 size-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16"><path d={svgM9.p20e5d100} stroke="#8B6A14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg></div>
                            </a>
                            <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-0.7px_-0.48%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.4 1.4"><path d="M0.7 0.7H145.7" stroke="#8B6A14" strokeLinecap="round" strokeWidth="1.4" /></svg></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden className="absolute border-[#2c4a2e] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </article>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2c4a2e] relative rounded-[16px] shrink-0 w-full">
              <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#d9d2c4] text-[18px] text-center w-[min-content]"><p className="leading-[26px]">We've assessed your land.</p></div>
                  <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[24px] text-center w-[min-content]"><p className="leading-[32px]">Now let's turn it into a plan that unlocks funding.</p></div>
                  <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-0.8px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 0.8"><line stroke="#969696" strokeLinecap="round" strokeWidth="0.8" x1="0.4" x2="278.6" y1="0.4" y2="0.4" /></svg></div></div>
                  <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#f5f0e8] text-[16px] text-center w-[min-content]"><p className="leading-[24px]">{`Most transition grants — including USDA EQIP and the Transfarmation R&I Grant — require a basic business plan. Fallow builds it with you, section by section, using everything we already know about your land. It takes about 20 minutes and gives you a document you can submit directly.`}</p></div>
                  <button onClick={() => navigate("signup")} className="bg-[#8b6a14] hover:bg-[#6e5210] transition-colors content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 cursor-pointer">
                    <div className="[word-break:break-word] flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f5f0e8] text-[16px] text-center whitespace-nowrap"><p className="leading-[24px]">Start my plan</p></div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <footer className="relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full">
            <Copyright svgData={svgM9} />
          </div>
        </div>
      </footer>
      <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}


function MDashboard({ navigate }: { navigate: (p: Page) => void }) {
  const { location } = useAssessment();
  const countyLabel = location ? `${location.county}, ${location.state}` : "your area";
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="content-stretch flex flex-col gap-[24px] items-center pt-[120px] relative shrink-0 w-full">
        <div className="[word-break:break-word] flex flex-col font-['Playfair_Display:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c4a2e] text-[24px] text-center w-full px-[16px]">
          <h1 className="block leading-[32px]">Welcome back.</h1>
        </div>
        {/* Mobile step nav: no arrows between steps */}
        <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full px-[16px]">
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0"><CheckIcon svgData={svgM4} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#8b6a14] text-[16px] leading-[24px]">Assess</span></div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0"><StepNum n={2} active={true} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#2c4a2e] text-[16px] leading-[24px]">Plan</span></div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0"><StepNum n={3} active={false} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#969696] text-[16px] leading-[24px]">Connect</span></div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0"><StepNum n={4} active={false} /><span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#969696] text-[16px] leading-[24px]">Grow</span></div>
        </div>
        <div className="bg-[#d9d2c4] rounded-[16px] w-full p-[24px] border-[1.4px] border-[#2c4a2e] mx-[16px] self-stretch">
          <p className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[22px] leading-[30px] mb-[12px]">{"Your business plan is in progress."}</p>
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal text-[#1a1a18] text-[16px] leading-[24px]">{`We're building your transition plan based on your assessment. Continue below to complete each section — we'll use your ${countyLabel} data to pre-fill as much as possible.`}</p>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full"><Copyright svgData={svgM4} /></div>
      </footer>
      <MHeader btnLabel="Log out" onBtn={() => navigate("landing")} />
    </div>
  );
}

function MSignup({ navigate }: { navigate: (p: Page) => void }) {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [pass2, setPass2] = useState("");
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-center pt-[120px] px-[16px] relative size-full">
          <div className="bg-[#2c4a2e] relative rounded-[16px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative size-full">
              <div className="h-[30px] relative shrink-0 w-[81px]"><img alt="Fallow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite} /></div>
              <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] text-[#f5f0e8] text-[24px] text-center w-full">{"Let's start working on your business plan."}</p>
              <div className="border-t border-[#969696] w-full" />
              <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#f5f0e8] text-[16px] text-center w-full">Create your free Fallow account to save your progress and pick up right where you left off.</p>
              <MInputSmDark placeholder="Full name" value={name} onChange={setName} />
              <MInputSmDark placeholder="Email address" value={email} onChange={setEmail} type="email" />
              <MInputSmDark placeholder="Password" value={pass} onChange={setPass} type="password" />
              <MInputSmDark placeholder="Re-type password" value={pass2} onChange={setPass2} type="password" />
              <button onClick={() => navigate("dashboard")} className="bg-[#8b6a14] hover:bg-[#6e5210] transition-colors content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 cursor-pointer w-full">
                <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[16px] leading-[24px]">Create my account</span>
              </button>
              <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[6px] items-start justify-center relative shrink-0 text-[#f5f0e8] text-[14px] text-center w-full whitespace-nowrap">
                <span className="leading-[22px]">Already have an account?</span>
                <button onClick={() => navigate("login")} className="leading-[22px] underline cursor-pointer hover:text-[#d9d2c4] transition-colors">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full"><Copyright svgData={svgM5} /></div>
      </footer>
      <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

function MLogin({ navigate }: { navigate: (p: Page) => void }) {
  const [email, setEmail] = useState(""); const [pass, setPass] = useState("");
  return (
    <div className="bg-[#f5f0e8] content-stretch flex flex-col items-center relative min-h-screen w-full">
      <section className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pt-[120px] px-[16px] relative size-full">
          <div className="bg-[#2c4a2e] content-stretch flex flex-col gap-[24px] items-center overflow-clip p-[32px] relative rounded-[16px] shrink-0 w-[343px]">
            <div className="h-[30px] relative shrink-0 w-[81px]"><img alt="Fallow" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite} /></div>
            <p className="[word-break:break-word] font-['Playfair_Display:Medium',sans-serif] font-medium leading-[32px] text-[#f5f0e8] text-[24px] text-center w-full">Pick up right where you left off.</p>
            <div className="border-t border-[#969696] w-full" />
            <p className="[word-break:break-word] font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] text-[#f5f0e8] text-[16px] text-center w-full">Log in to your Fallow account to continue your business plan.</p>
            <MInputSmDark placeholder="Email address" value={email} onChange={setEmail} type="email" />
            <MInputSmDark placeholder="Password" value={pass} onChange={setPass} type="password" />
            <button onClick={() => navigate("dashboard")} className="bg-[#8b6a14] hover:bg-[#6e5210] transition-colors content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 cursor-pointer w-full">
              <span className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#f5f0e8] text-[16px] leading-[24px]">Log in</span>
            </button>
            <div className="[word-break:break-word] content-stretch flex font-['Source_Sans_3:Regular',sans-serif] font-normal gap-[6px] items-start justify-center relative shrink-0 text-[#f5f0e8] text-[14px] text-center w-full whitespace-nowrap">
              <span className="leading-[22px]">{"Don't have an account yet?"}</span>
              <button onClick={() => navigate("landing")} className="leading-[22px] underline cursor-pointer hover:text-[#d9d2c4] transition-colors">Start your assessment</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex-[1_0_0] min-h-px relative w-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-[32px] relative size-full"><Copyright svgData={svgM5} /></div>
      </footer>
      <MHeader btnLabel="Get started" onBtn={() => navigate("landing")} />
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

// ─── Routing helpers ─────────────────────────────────────────────────────────

const PAGE_PATHS: Record<Page, string> = {
  landing:   "/",
  assess1:   "/assess",
  assess2:   "/assess/concerns",
  results:   "/results",
  dashboard: "/dashboard",
  signup:    "/signup",
  login:     "/login",
};

/** Drop-in replacement for the old `navigate(pageName)` prop. */
function useAppNav(): (p: Page) => void {
  const navigate = useNavigate();
  return (page: Page) => {
    navigate(PAGE_PATHS[page]);
    window.scrollTo(0, 0);
  };
}

// ─── Route components (responsive wrappers) ───────────────────────────────────

function LandingRoute()   { const m = useMobile(); const n = useAppNav(); return m ? <MLanding   navigate={n} /> : <DLanding   navigate={n} />; }
function Assess1Route()   { const m = useMobile(); const n = useAppNav(); return m ? <MAssess1   navigate={n} /> : <DAssess1   navigate={n} />; }
function Assess2Route()   { const m = useMobile(); const n = useAppNav(); return m ? <MAssess2   navigate={n} /> : <DAssess2   navigate={n} />; }
function ResultsRoute()   { const m = useMobile(); const n = useAppNav(); return m ? <MResults   navigate={n} /> : <DResults   navigate={n} />; }
function DashboardRoute() { const m = useMobile(); const n = useAppNav(); return m ? <MDashboard navigate={n} /> : <DDashboard navigate={n} />; }
function SignupRoute()    { const m = useMobile(); const n = useAppNav(); return m ? <MSignup    navigate={n} /> : <DSignup    navigate={n} />; }
function LoginRoute()     { const m = useMobile(); const n = useAppNav(); return m ? <MLogin     navigate={n} /> : <DLogin     navigate={n} />; }

function NotFound() {
  const n = useAppNav();
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f5f0e8]">
      <p className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[#2c4a2e] text-[32px] mb-4">Page not found</p>
      <button onClick={() => n("landing")} className="font-['Source_Sans_3:Medium',sans-serif] font-medium text-[#8b6a14] underline cursor-pointer">Go home</button>
    </div>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────

const router = createBrowserRouter([
  { path: "/",                  Component: LandingRoute },
  { path: "/assess",            Component: Assess1Route },
  { path: "/assess/concerns",   Component: Assess2Route },
  { path: "/results",           Component: ResultsRoute },
  { path: "/dashboard",         Component: DashboardRoute },
  { path: "/signup",            Component: SignupRoute },
  { path: "/login",             Component: LoginRoute },
  { path: "*",                  Component: NotFound },
]);

export default function App() {
  return (
    <AssessmentProvider>
      <RouterProvider router={router} />
    </AssessmentProvider>
  );
}
