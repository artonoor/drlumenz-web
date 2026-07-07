import Seal from "./components/Seal";
import HeroStory from "./components/HeroStory";
import DrLImage from "./components/DrLImage";

const IMPRINTS = [
  { name: "Art Noor", role: "Creator · Paipo's Fun Fables · franchise & media", emoji: "🦜" },
  { name: "Dr Aslam Shems", role: "Non-fiction · thought leadership", emoji: "🧠" },
  { name: "Dr Lumenz", role: "Self-help · gratitude · spiritual journals", emoji: "💡" },
  { name: "SARY", role: "Poetry · art · visual storytelling", emoji: "✦" },
  { name: "Paipo's Fun Fables", role: "Children's fables · Aesop · Panchtantra · Arabian Nights", emoji: "📖" },
];

const GIFTS = [
  {
    type: "Book of the Month",
    title: "Free, every month. Forever.",
    body: "One dr L title — yours to keep. No catch. No card. Just subscribe and it arrives.",
    icon: "📚",
    cta: "Claim this month's book →",
  },
  {
    type: "Mind Games",
    title: "The Wisdom Labyrinth",
    body: "A browser game with a hidden tower nobody tells you about. Navigate. Discover. Own the secret.",
    icon: "🌀",
    cta: "Play free →",
    badge: "Coming soon",
  },
  {
    type: "Free Download",
    title: "The Light Collector",
    body: "A meditative puzzle. Arrange fragments of thought until something illuminates. Five minutes. Stays with you.",
    icon: "✦",
    cta: "Download free →",
    badge: "Coming soon",
  },
];

const L3 = [
  {
    word: "Learn",
    body: "Fables, education, the books that teach a child to think.",
    num: "01",
  },
  {
    word: "Love",
    body: "Gratitude journals and the quiet books that teach a heart to feel.",
    num: "02",
  },
  {
    word: "Light",
    body: "Self-help and spiritual work — the books that teach a mind to see.",
    num: "03",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#0d1b24] text-[#e8dfc8]">

      {/* NAV */}
      <header className="flex items-center justify-between px-8 py-6 md:px-16 border-b border-white/5">
        <div className="flex items-center gap-3">
          <Seal size={36} color="#c9a84c" />
          <span className="font-[family-name:var(--font-serif)] text-lg tracking-wide text-[#c9a84c]">
            dr L
          </span>
        </div>
        <nav className="hidden gap-8 text-sm tracking-widest uppercase sm:flex text-[#7a9aaa]">
          <a href="#gifts" className="hover:text-[#c9a84c] transition-colors">Free Gifts</a>
          <a href="#mark" className="hover:text-[#c9a84c] transition-colors">The Mark</a>
          <a href="#catalog" className="hover:text-[#c9a84c] transition-colors">Catalog</a>
          <a href="#house" className="hover:text-[#c9a84c] transition-colors">The House</a>
        </nav>
      </header>

      <main className="flex flex-col">

        {/* HERO — full dark, character front and centre */}
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-8 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[120px]" />
          </div>

          <DrLImage />

          <div className="relative z-10 flex flex-col items-center gap-6 mt-10">
            <Seal size={100} color="#c9a84c" />
            <h1 className="font-[family-name:var(--font-serif)] text-7xl md:text-8xl tracking-tight text-[#c9a84c]">
              dr L
            </h1>
            <p className="text-xs uppercase tracking-[0.4em] text-[#7a9aaa]">
              Illuminating Hearts · Born 7·0·7·0·7
            </p>
            <div className="mt-4 max-w-lg">
              <HeroStory />
            </div>
            <a
              href="#gifts"
              className="mt-8 inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d1b24] font-semibold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#e0c068] transition-colors"
            >
              Enter the Lab →
            </a>
          </div>
        </section>

        {/* FREE GIFTS */}
        <section id="gifts" className="px-8 py-32 md:px-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col gap-16">
            <div className="text-center flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c]">From dr L · With Love</p>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl">
                Real gifts.<br />No strings.
              </h2>
              <p className="text-[#7a9aaa] text-base max-w-lg mx-auto leading-8">
                dr L believes the best ideas should be free. Every month, every visitor, every curious mind — gets something of real value.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {GIFTS.map((g) => (
                <div key={g.type} className="relative flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/3 p-8 hover:border-[#c9a84c]/30 transition-colors">
                  {g.badge && (
                    <span className="absolute top-4 right-4 text-xs bg-[#c9a84c]/15 text-[#c9a84c] px-2 py-1 rounded-full">
                      {g.badge}
                    </span>
                  )}
                  <span className="text-3xl">{g.icon}</span>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#7a9aaa]">{g.type}</p>
                  <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#e8dfc8]">{g.title}</h3>
                  <p className="text-sm leading-7 text-[#7a9aaa]">{g.body}</p>
                  <a href="#" className="mt-auto text-sm text-[#c9a84c] hover:underline">{g.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE MARK — L³ */}
        <section id="mark" className="px-8 py-32 md:px-16 border-t border-white/5 bg-[#0a1520]">
          <div className="max-w-4xl mx-auto flex flex-col gap-16 items-center">
            <div className="text-center flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c]">The Seal</p>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl">
                dr L³
              </h2>
              <p className="text-[#7a9aaa] max-w-lg mx-auto text-base leading-8">
                Two letters. Three lines — because light doesn&apos;t sit still. It travels and spreads. Every dr L book is trying to do three things, carried in one small mark instead of three separate words.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 w-full">
              {L3.map((m) => (
                <div key={m.word} className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/3 p-8">
                  <span className="text-xs text-[#c9a84c]/50 font-mono">{m.num}</span>
                  <span className="font-[family-name:var(--font-serif)] text-3xl text-[#c9a84c]">{m.word}</span>
                  <p className="text-sm leading-7 text-[#7a9aaa]">{m.body}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 text-center max-w-md">
              <Seal size={80} color="#c9a84c" />
              <p className="text-xs text-[#7a9aaa] leading-6 italic">
                The grey disc is not a backdrop. It is the sun — Shems itself. The source of all light. The mark is secretly a self-portrait. It reveals more the longer you sit with it.
              </p>
            </div>
          </div>
        </section>

        {/* CATALOG */}
        <section id="catalog" className="px-8 py-32 md:px-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-16">
            <div className="text-center flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c]">The Universe</p>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl">
                Every Imprint.<br />One House.
              </h2>
              <p className="text-[#7a9aaa] max-w-lg mx-auto text-base leading-8">
                99 books. Five voices. One publisher of record. Every title — children&apos;s fable, gratitude journal, or thought-leadership — traces back to the same seal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {IMPRINTS.map((imp) => (
                <div key={imp.name} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-[#c9a84c]/30 transition-colors">
                  <span className="text-2xl mt-0.5">{imp.emoji}</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-serif)] text-lg text-[#e8dfc8]">{imp.name}</span>
                    <span className="text-sm text-[#7a9aaa]">{imp.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE HOUSE */}
        <section id="house" className="px-8 py-32 md:px-16 border-t border-white/5 bg-[#0a1520]">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c]">The House</p>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl">
              Built for the curious.<br />Designed to last.
            </h2>
            <p className="text-[#7a9aaa] text-base leading-9">
              Dr Lumenz Publishing starts digital — on KDP, on screens, in pockets. But the vision is bricks and mortar. A real publishing house. Real shelves. Real books that a child picks up in a library forty years from now and finds a hidden tower nobody told them about.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-xl text-[#c9a84c] italic">
              &ldquo;The best books have a tower. You find it yourself. Nobody tells you. And when you do — you own it forever.&rdquo;
            </p>
            <p className="text-xs text-[#7a9aaa]/50">— dr L</p>

            <a
              href="mailto:hello@artnoor.com"
              className="mx-auto inline-flex items-center gap-2 border border-[#c9a84c]/30 text-[#c9a84c] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#c9a84c]/10 transition-colors"
            >
              Write to dr L → hello@artnoor.com
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 px-8 py-10 text-center text-xs text-[#7a9aaa]/50 md:px-16 tracking-widest uppercase">
        © {new Date().getFullYear()} Dr Lumenz Publishing · Born 7·0·7·0·7 · Powered by IdeaPower.AI
      </footer>

    </div>
  );
}
