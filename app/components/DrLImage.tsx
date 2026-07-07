// Hero image — replace /dr-l-hero.png with /dr-l-hero.mp4 when Gemini video is ready
export default function DrLImage() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#c9a84c]/10 blur-3xl rounded-full" />
      <img
        src="/dr-l-hero.png"
        alt="dr L — Creative Innovation Lab"
        className="relative z-10 w-full rounded-2xl object-cover"
        style={{ maxHeight: "72vh", objectPosition: "center top" }}
      />
    </div>
  );
}
