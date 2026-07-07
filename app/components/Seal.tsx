type SealProps = {
  size?: number;
  color?: string;
  className?: string;
};

/**
 * Placeholder seal — approximates the "dr L³" mark (calligraphic dr + bold L +
 * three brightness lines for Learn/Love/Light) agreed on with Art in Illustrator.
 * Swap the inner paths for the final exported Illustrator vector once ready.
 */
export default function Seal({ size = 120, color = "#1e3d56", className }: SealProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Dr Lumenz seal"
    >
      <circle cx="250" cy="250" r="200" fill="none" stroke={color} strokeWidth="6" />
      <path fill={color} d="M 255 95 L 275 95 L 265 300 L 250 300 Z" />
      <path fill={color} d="M 250 300 L 340 300 Q 320 320 290 315 L 240 320 Z" />
      <text
        x="175"
        y="270"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="46"
        fill={color}
      >
        dr
      </text>
      <line x1="290" y1="120" x2="322" y2="102" stroke={color} strokeWidth="7" strokeLinecap="round" />
      <line x1="290" y1="140" x2="332" y2="134" stroke={color} strokeWidth="7" strokeLinecap="round" />
      <line x1="290" y1="160" x2="320" y2="167" stroke={color} strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
