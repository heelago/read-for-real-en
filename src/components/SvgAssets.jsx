// ===========================================================
// SVG ASSETS - digital humanities visual system
// ===========================================================

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 70 L50 80 L80 70 L80 30 L50 40 L20 30 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M50 80 L50 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="30" cy="20" r="4" fill="currentColor" />
      <circle cx="50" cy="15" r="5" fill="currentColor" />
      <circle cx="70" cy="25" r="3.5" fill="currentColor" />
      <path d="M50 40 L30 20 M50 40 L50 15 M50 40 L70 25 M30 20 L50 15 L70 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="flex justify-center my-14 opacity-40">
      <svg width="100%" height="12" viewBox="0 0 300 12" preserveAspectRatio="none">
        <path d="M0 6 Q 75 12, 150 6 T 300 6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" />
        <circle cx="150" cy="6" r="2" fill="currentColor" />
        <circle cx="75" cy="9" r="1.5" fill="currentColor" />
        <circle cx="225" cy="3" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export function QuestionConnector() {
  return (
    <div className="ml-7 -mb-1 mt-1 opacity-50 relative z-0">
      <svg width="8" height="40" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0 Q0 10 4 20 T4 40" stroke="var(--color-border, #ddd8cc)" strokeWidth="2" fill="none" />
        <circle cx="4" cy="20" r="1.5" fill="var(--color-border, #ddd8cc)" />
      </svg>
    </div>
  );
}

export function WelcomeIllustration() {
  return (
    <svg viewBox="0 0 800 240" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="240" fill="var(--color-parchment, #faf8f4)" />
      <path d="M0 120 L 800 120" stroke="var(--color-border, #ddd8cc)" strokeWidth="1" strokeDasharray="10 5" />

      <g stroke="var(--color-earth, #8a7d6b)" strokeWidth="6" strokeLinecap="round" opacity="0.35">
        <line x1="150" y1="160" x2="250" y2="160" />
        <line x1="150" y1="180" x2="300" y2="180" />
        <line x1="150" y1="200" x2="220" y2="200" />
        <line x1="500" y1="160" x2="650" y2="160" />
        <line x1="500" y1="180" x2="580" y2="180" />
      </g>

      <g stroke="var(--color-bark, #3d3529)" strokeWidth="1.5" fill="none" opacity="0.65">
        <path d="M 220 70 L 350 40 L 450 90 L 580 50" />
        <path d="M 350 40 L 400 130 L 500 180" />
        <path d="M 220 70 L 250 170" />
      </g>

      <g fill="var(--color-cream, #fffefa)" stroke="var(--color-moss, #6b7c5b)" strokeWidth="3">
        <circle cx="220" cy="70" r="8" />
        <circle cx="450" cy="90" r="10" />
      </g>
      <g fill="var(--color-cream, #fffefa)" stroke="var(--color-slate, #5b6b7c)" strokeWidth="3">
        <circle cx="350" cy="40" r="6" />
        <circle cx="580" cy="50" r="7" />
        <circle cx="400" cy="130" r="5" />
      </g>
    </svg>
  );
}

export function FrictionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
      <path d="M3 21 Q 5 24, 8 23 T 12 24" strokeWidth="1" />
    </svg>
  );
}

export function PhaseIcon({ phase, size = 20 }) {
  const colors = {
    Identify: "var(--color-moss, #6b7c5b)",
    Interpret: "var(--color-slate, #5b6b7c)",
    Critique: "var(--color-plum, #7c5b6b)",
  };
  const color = colors[phase] || colors.Identify;

  if (phase === "Identify") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="0.75" fill={color} stroke="none" />
        <circle cx="8" cy="9" r="1.25" fill={color} stroke="none" />
      </svg>
    );
  }

  if (phase === "Interpret") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14 L8 14 C10 14, 11 13, 12 12 L14 10" />
        <path d="M21 10 L16 10 C14 10, 13 11, 12 12 L10 14" />
        <circle cx="12" cy="10" r="2" fill={color} stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 15 V11" />
      <path d="M15 18 C17 16, 19 14, 19 10 C19 6, 16 3, 12 3 C8 3, 5 6, 5 10 C5 14, 7 16, 9 18" />
    </svg>
  );
}
