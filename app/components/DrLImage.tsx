// Placeholder for the Dr L character image — swap src for final Gemini-generated asset
export default function DrLImage() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#c9a84c]/10 blur-2xl" />
      {/* SVG placeholder character — lightbulb head android */}
      <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <rect x="140" y="230" width="120" height="130" rx="18" fill="#1a2f40" stroke="#c9a84c" strokeWidth="2"/>
        {/* Coat lapels */}
        <path d="M140 250 L190 290 L200 280 L210 290 L260 250" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
        {/* Name badge */}
        <rect x="170" y="300" width="60" height="22" rx="4" fill="#c9a84c" opacity="0.15" stroke="#c9a84c" strokeWidth="1"/>
        <text x="200" y="315" textAnchor="middle" fill="#c9a84c" fontSize="8" fontFamily="Georgia,serif">DR. LUMENZ</text>
        {/* Neck */}
        <rect x="188" y="212" width="24" height="22" rx="4" fill="#1a2f40" stroke="#c9a84c" strokeWidth="1.5"/>
        {/* Bulb head — glass dome */}
        <ellipse cx="200" cy="160" rx="70" ry="80" fill="#0d1b24" stroke="#c9a84c" strokeWidth="2.5"/>
        {/* Brain glow inside */}
        <ellipse cx="200" cy="155" rx="45" ry="50" fill="#c9a84c" opacity="0.07"/>
        <ellipse cx="200" cy="155" rx="30" ry="35" fill="#c9a84c" opacity="0.1"/>
        {/* Neural lines */}
        <path d="M175 140 Q190 130 205 145 Q215 135 225 148" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
        <path d="M178 160 Q195 148 210 162 Q220 155 230 165" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
        <path d="M180 178 Q197 168 212 180" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.4"/>
        {/* Eyes */}
        <ellipse cx="183" cy="158" rx="8" ry="9" fill="#c9a84c" opacity="0.9"/>
        <ellipse cx="217" cy="158" rx="8" ry="9" fill="#c9a84c" opacity="0.9"/>
        <ellipse cx="185" cy="158" rx="3" ry="4" fill="#0d1b24"/>
        <ellipse cx="219" cy="158" rx="3" ry="4" fill="#0d1b24"/>
        {/* Smile */}
        <path d="M188 178 Q200 188 212 178" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
        {/* Beret */}
        <ellipse cx="200" cy="88" rx="62" ry="18" fill="#1e3d56"/>
        <ellipse cx="200" cy="83" rx="55" ry="22" fill="#1a2f40" stroke="#c9a84c" strokeWidth="1.5"/>
        <ellipse cx="230" cy="78" rx="8" ry="5" fill="#c9a84c" opacity="0.3"/>
        {/* Arms */}
        <rect x="90" y="235" width="50" height="16" rx="8" fill="#1a2f40" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="260" y="235" width="50" height="16" rx="8" fill="#1a2f40" stroke="#c9a84c" strokeWidth="1.5"/>
        {/* Hands */}
        <circle cx="90" cy="243" r="12" fill="#1a2f40" stroke="#c9a84c" strokeWidth="1.5"/>
        <circle cx="310" cy="243" r="12" fill="#1a2f40" stroke="#c9a84c" strokeWidth="1.5"/>
        {/* Three light rays from top of bulb */}
        <line x1="200" y1="82" x2="200" y2="55" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="200" y1="82" x2="220" y2="58" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="200" y1="82" x2="180" y2="58" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    </div>
  );
}
