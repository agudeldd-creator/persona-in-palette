import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Wand2,
  BookOpen,
  Check,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

type GuideItem = string | { label: string; children: string[] };

const GUIDE: GuideItem[] = [
  "100+ Pantone colour matches",
  "Your best jewelry metals",
  "Personalized styling recommendations",
  {
    label: "62+ makeup products from Sephora",
    children: [
      "Eyeshadow",
      "Mascara",
      "Lipstick",
      "Highlighter",
      "Bronzer",
      "Blush",
      "Eyeliner",
      "Nail polish",
    ],
  },
  "Your best hair colour options",
  "Nail polish colour recommendations",
  "Celebrity examples in your season",
  "Your most flattering gemstones",
  "A foundation shade guide",
  "Makeup bag essentials",
];
const WALLET: GuideItem[] = [
  "36 physical fabric swatches of all your best colours",
  "Unique swatches of neutrals and colours",
  "Jewelry suggestions that complement your undertone",
  "Additional hair colour ideas",
  "Colour names to help you shop confidently online",
];
const INSIGHT: GuideItem[] = [
  "Discover whether your undertone is warm, cool, or neutral and their differences",
  "Which colours are universally flattering (yes, they exist)",
  "Try on fake bang pieces to test hair colours instantly",
  "Explore lipstick assessors to see what works vs. what to avoid",
  "Try your best lipstick shade with samples from MAC",
  "Bring your makeup bag for review and we'll tell you what works for your season",
  "Bonus extended help after your appointment when you're shopping",
];

const TESTIMONIALS = [
  {
    quote:
      "I thought I was the moon, but I'm definitely the sun! I had such a wonderful experience with Naomi — the entire process was informative, thoughtful, relaxed and fun.",
    meta: "Warm Spring · Google Review",
  },
  {
    quote:
      "The right colours literally made my face light up, and that was with no makeup on!! My only regret is not doing it sooner.",
    meta: "Google Review",
  },
  {
    quote:
      "I found out that I was a True Summer rather than the Winter that I thought I was most of my life!",
    meta: "True Summer · Google Review",
  },
  {
    quote:
      "I ended up coming back with my best friend the following week and it was another fabulous experience and lifelong memory.",
    meta: "Google Review",
  },
  {
    quote:
      "I even got to bring my own makeup to see which products to keep and which ones to skip, super helpful! Absolutely 10/10 recommend.",
    meta: "Google Review",
  },
  {
    quote:
      "Since leaving her studio I have a newfound sense of confidence in how to articulate my wardrobe. Well worth it, 5 stars is not enough!",
    meta: "Google Review",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero (video background) ── */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden">
          {/* background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/hero-poster.jpg"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* legibility overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/85 via-plum-deep/55 to-teal-deep/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/70 via-transparent to-plum-deep/20" />

          <div className="pp-container relative py-20 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-lg italic text-blush">Port Moody, BC</p>
              <h1 className="mt-2 font-display text-4xl leading-tight text-white drop-shadow-sm md:text-6xl">
                Curated Colour Consulting with Naomi
              </h1>
              <p className="mt-5 font-display text-2xl italic text-blush md:text-3xl">
                Stop guessing, start glowing.
              </p>
              <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-white/85">
                I&apos;m Naomi Ciarallo, a Port Moody-based stylist who elevates your
                style through personalized colour analysis. Discover how the right
                colours can enhance your natural beauty and transform the way you
                shop, dress, and feel.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#book"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-plum-deep shadow-md transition hover:bg-cream"
                >
                  Book your analysis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#included"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
                >
                  What&apos;s included
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Colour Analysis ── */}
        <section id="story" className="bg-mist py-20 md:py-28">
          <div className="pp-container grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <Image
                src="/images/16-season-wheel.png"
                alt="The 16-season colour analysis wheel by Persona in Palette"
                width={640}
                height={640}
                className="mx-auto h-auto w-full max-w-md drop-shadow-md"
              />
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-display text-4xl text-teal md:text-5xl">Why colour analysis?</h2>
              </Reveal>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink/80">
                <p>
                  Investing in a colour analysis session with Persona in Palette is a
                  transformative step toward enhancing your appearance and confidence.
                  My comprehensive session reveals the shades that make you glow.
                </p>
                <p>
                  Trained by Tatum Gangi, the Colour Analysis Queen, I&apos;m passionate
                  about helping you discover the colours that minimize imperfections and
                  bring out your natural radiance.
                </p>
                <p>
                  Imagine never wasting money again on clothes, makeup, or hair colours
                  that don&apos;t suit you. My one-time analysis helps you shop smarter for
                  life.
                </p>
                <p className="font-display text-xl italic text-plum">
                  Let&apos;s embark on this colourful journey together and unveil the
                  confident you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <section id="included" className="py-20 md:py-28">
          <div className="pp-container">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-display text-lg italic text-teal">The experience</p>
                <h2 className="mt-2 font-display text-4xl text-plum md:text-5xl">
                  What&apos;s included in your colour analysis
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">
                  A personalized, in-depth session that goes far beyond just picking a
                  palette. Here&apos;s everything you receive.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { icon: BookOpen, title: "Customized Colour Guide", tag: "42-page PDF", items: GUIDE },
                { icon: Palette, title: "36-Swatch Fabric Wallet", tag: "Optional add-on", items: WALLET },
                { icon: Wand2, title: "Educational Colour Insight", tag: "Learn the why", items: INSIGHT },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border border-plum/10 bg-white p-8 shadow-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-plum/8 text-plum">
                      <card.icon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-teal">
                      {card.tag}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-plum">{card.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {card.items.map((it) =>
                        typeof it === "string" ? (
                          <li key={it} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/75">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            {it}
                          </li>
                        ) : (
                          <li key={it.label} className="text-[14px] leading-relaxed text-ink/75">
                            <details className="group/dd">
                              <summary className="flex cursor-pointer list-none items-start gap-2.5 [&::-webkit-details-marker]:hidden">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                                <span className="flex-1">{it.label}</span>
                                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-teal/60 transition-transform group-open/dd:rotate-180" />
                              </summary>
                              <ul className="mt-2 ml-6 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[13px] text-ink/60">
                                {it.children.map((c) => (
                                  <li key={c}>{c}</li>
                                ))}
                              </ul>
                            </details>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet Naomi ── */}
        <section className="bg-mist py-20 md:py-24">
          <div className="pp-container">
            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="overflow-hidden rounded-[9999px_9999px_16px_16px] border-[6px] border-white shadow-xl mx-auto max-w-xs">
                  <Image
                    src="/images/IMG_5002.jpeg"
                    alt="Naomi Ciarallo, Certified Colour Specialist"
                    width={500}
                    height={750}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <p className="font-display text-lg italic text-teal">Meet your specialist</p>
                  <h2 className="mt-2 font-display text-4xl text-plum md:text-5xl">Hi, I&apos;m Naomi</h2>
                  <p className="mt-6 text-[16px] leading-relaxed text-ink/80">
                    Based in Port Moody, BC, I help clients across the Lower Mainland find
                    the colours that let them shine. Colour analysis changed how I shop,
                    dress, and feel about myself, and I love guiding others to that same
                    clarity and confidence.
                  </p>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink/80">
                    Every session is thorough, enjoyable, and completely personalized. You
                    leave knowing exactly what works for you and why.
                  </p>
                  <Link
                    href="#book"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-[15px] font-semibold text-white shadow-md transition hover:bg-teal-deep"
                  >
                    Book your session
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>
            </div>

            {/* testimonial strip */}
            <Reveal>
              <p className="mt-20 text-center font-display text-lg italic text-teal">
                In their own words
              </p>
            </Reveal>
            <div className="mt-6 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:px-0">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.quote}
                  className="flex w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-plum/10 bg-white p-6 shadow-sm sm:w-[320px]"
                >
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {t.meta}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social ── */}
        <section id="events" className="py-20 md:py-24">
          <div className="pp-container">
            <Reveal>
              <h2 className="text-center font-display text-3xl text-teal md:text-4xl">
                Follow along for discounts, new services &amp; updates
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {["IMG_4081.png", "IMG_4089.png", "IMG_4095.png", "IMG_4096.png"].map((img, i) => (
                <Reveal key={img} delay={i * 0.08}>
                  <a
                    href="https://www.instagram.com/persona_in_palette/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Persona in Palette on Instagram"
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
                  >
                    <Image
                      src={`/images/${img}`}
                      alt="Persona in Palette colour analysis"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-plum/0 opacity-0 transition group-hover:bg-plum/30 group-hover:opacity-100">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Booking CTA ── */}
        <section id="book" className="scroll-mt-20 bg-plum py-20 text-center text-white md:py-24">
          <div className="pp-container">
            <Reveal>
              <p className="font-display text-xl italic text-blush">Your palette awaits</p>
              <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl md:text-5xl">
                Ready to discover the colours that make you glow?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/80">
                Book your one-time colour analysis and shop smarter for life. In-person
                sessions in Port Moody, BC.
              </p>
              <a
                href="mailto:persona.in.palette@gmail.com?subject=Colour%20Analysis%20Booking"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-[15px] font-semibold text-plum shadow-md transition hover:bg-cream"
              >
                Book now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer id="contact" className="bg-teal-deep py-14 text-white/85">
        <div className="pp-container grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-white">
              Persona <span className="italic">in palette</span>
            </p>
            <p className="mt-3 max-w-xs text-[14px] text-white/70">
              Certified colour analysis to help you shop, dress, and feel your best.
            </p>
          </div>
          <div className="space-y-3 text-[14px]">
            <a href="mailto:persona.in.palette@gmail.com" className="flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4 text-blush" /> persona.in.palette@gmail.com
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blush" /> Port Moody, BC, Canada
            </p>
            <a
              href="https://www.instagram.com/persona_in_palette/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Instagram className="h-4 w-4 text-blush" /> @persona_in_palette
            </a>
          </div>
          <div className="flex flex-col gap-2 text-[14px] md:items-end">
            <a href="#included" className="transition hover:text-white">What&apos;s included</a>
            <a href="#story" className="transition hover:text-white">Why colour analysis</a>
            <a href="#book" className="transition hover:text-white">Book now</a>
          </div>
        </div>
        <div className="pp-container mt-10 border-t border-white/15 pt-6 text-[12px] text-white/50">
          © {2026} Persona in Palette. All rights reserved.
        </div>
      </footer>
    </>
  );
}
