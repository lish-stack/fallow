import { createContext, useContext, useState, type ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LocationData {
  lat: number;
  lon: number;
  county: string;
  state: string;
  formatted: string;
}

export interface CropMatch {
  name: string;
  match: "Strong match" | "Good match" | "Worth exploring";
  why: string;
  earningPotential: string;
  timeToIncome: string;
  conversionCost: string;
}

export interface ReadinessScores {
  landSuitability: number;
  infrastructure: number;
  financialPosition: number;
  marketAccess: number;
  summary: string;
}

export interface AssessmentResult {
  landSummary: string;
  infrastructureTags: string[];
  crops: CropMatch[];
  readiness: ReadinessScores;
  obstacleHeadline: string;
  obstacleBody: string;
  resourceName: string;
  resourceDescription: string;
  resourceUrl: string;
}

interface AssessmentState {
  location: LocationData | null;
  farmType: string;
  concern: string;
  result: AssessmentResult | null;
  loading: boolean;
  error: string | null;
  setLocation: (loc: LocationData) => void;
  setFarmType: (type: string) => void;
  setConcern: (concern: string) => void;
  runAssessment: () => Promise<void>;
  reset: () => void;
}

const AssessmentContext = createContext<AssessmentState | null>(null);

// ─── Geocoding ────────────────────────────────────────────────────────────────

export async function geocodeAddress(address: string): Promise<LocationData | null> {
  try {
    const encoded = encodeURIComponent(address + ", USA");
    const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&addressdetails=1&limit=1&countrycodes=us`;
    const res = await fetch(url, { headers: { "Accept-Language": "en-US" } });
    const data = await res.json();
    if (data && data.length > 0) {
      const r = data[0];
      const addr = r.address || {};
      return {
        lat: parseFloat(r.lat),
        lon: parseFloat(r.lon),
        county: addr.county || addr.city || addr.town || addr.village || "",
        state: addr.state || "",
        formatted: r.display_name || address,
      };
    }
    return null;
  } catch {
    return null;
  }
}

// ─── Claude API call ──────────────────────────────────────────────────────────

async function generateAssessment(params: {
  location: LocationData;
  farmType: string;
  concern: string;
}): Promise<AssessmentResult | null> {
  const { location, farmType, concern } = params;

  const prompt = `You are an expert agricultural advisor helping a US farmer transition away from industrial animal agriculture toward plant-based farming.

Farmer details:
- Location: ${location.county}, ${location.state}
- Currently farming: ${farmType}
- Biggest concern about transitioning: ${concern}

Give this farmer a warm, honest, plain-language assessment. They are stressed, skeptical, and need real, specific information — not marketing language. Use regional knowledge of ${location.county}, ${location.state} where possible (soil type, climate, nearby markets, dominant integrators in that region if relevant to their farm type).

Respond ONLY with raw JSON in this exact shape, no markdown fences, no commentary:

{
  "landSummary": "2-3 sentences in plain language about what their land/region can likely support — soil, climate, water. Sound like a knowledgeable neighbor, not a brochure.",
  "infrastructureTags": ["short tag", "short tag", "short tag", "short tag"],
  "crops": [
    {
      "name": "Crop name",
      "match": "Strong match",
      "why": "1-2 sentences specific to their location, farm type, and existing infrastructure",
      "earningPotential": "e.g. $3,000 - $6,000 per month",
      "timeToIncome": "e.g. 4 - 6 months",
      "conversionCost": "e.g. $12,000 - $18,000"
    }
  ],
  "readiness": {
    "landSuitability": 85,
    "infrastructure": 78,
    "financialPosition": 40,
    "marketAccess": 60,
    "summary": "Moderately ready"
  },
  "obstacleHeadline": "Your biggest obstacle is [their stated concern, reframed specifically]",
  "obstacleBody": "3-5 sentences directly addressing their stated concern with real, specific guidance. Acknowledge the difficulty honestly, note this is solvable, and give one concrete first action.",
  "resourceName": "Name of a real, relevant organization (e.g. Transfarmation Project, Animal Outlook, or a USDA program)",
  "resourceDescription": "1-2 sentences on what this resource offers and why it fits this farmer's situation",
  "resourceUrl": "A real, plausible URL for that organization"
}

Provide exactly 3 crops, ordered by match strength: one "Strong match", one "Good match", one "Worth exploring". infrastructureTags should be exactly 4 short phrases (3-6 words each) about likely acreage, infrastructure, debt/integrator situation, and land ownership — inferred reasonably from farm type and region, framed as regional generalizations. The readiness scores should be realistic integers 0-100 that vary based on the farmer's specific concern (e.g. if concern is financial viability, financialPosition should be lower).`;

  try {
    const response = await fetch("/api/assess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    if (!response.ok) return null;
    const data = await response.json();
    const text: string = data.content?.[0]?.text ?? "";
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean) as AssessmentResult;
  } catch {
    return null;
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [farmType, setFarmType] = useState("");
  const [concern, setConcern] = useState("");
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runAssessment() {
    if (!location || !farmType || !concern) {
      setError("Missing information needed to generate your assessment.");
      return;
    }
    setLoading(true);
    setError(null);
    const res = await generateAssessment({ location, farmType, concern });
    if (!res) {
      setError("We couldn't generate your assessment. Please try again.");
      setLoading(false);
      return;
    }
    setResult(res);
    setLoading(false);
  }

  function reset() {
    setLocation(null);
    setFarmType("");
    setConcern("");
    setResult(null);
    setError(null);
  }

  return (
    <AssessmentContext.Provider
      value={{
        location,
        farmType,
        concern,
        result,
        loading,
        error,
        setLocation,
        setFarmType,
        setConcern,
        runAssessment,
        reset,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment(): AssessmentState {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}
