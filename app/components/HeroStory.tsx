"use client";

const LINES = [
  "1982.",
  "A young man watches his professor draw a sun. Ink. A compass. An hour, by hand.",
  "He pays him everything he has.",
  "Forty-four years later, he builds another mark. Same way. No shortcuts.",
  "Two letters. Three lines, cascading — because light doesn’t sit still. It travels.",
  "One story: Light. Love. Learn.",
];

export default function HeroStory() {
  return (
    <div className="flex max-w-xl flex-col gap-3 text-center">
      {LINES.map((line, i) => (
        <p
          key={i}
          className="animate-hero-line text-base leading-8 text-[#3d5a70] opacity-0"
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          {line}
        </p>
      ))}
      <p
        className="animate-hero-line pt-2 text-lg italic leading-8 text-[#1e3d56] opacity-0"
        style={{ animationDelay: `${LINES.length * 0.6}s` }}
      >
        What will yours illuminate?
      </p>
    </div>
  );
}
