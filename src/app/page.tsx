import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Palette,
  Gem,
  Shirt,
  Wand2,
  BookOpen,
  Check,
  Mail,
  MapPin,
  ArrowRight,
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

const GUIDE = [
  "Your ideal colour palette",
  "Your exact best jewelry metals",
  "Flattering clothing combinations",
  "62 makeup products (eyeshadow, mascara, lipstick, highlighter, bronzer, blush, eyeliner, nail polish)",
  "Your best hair colour options to enhance your palette",
];
const WALLET = [
  "Your unique seasonal colour swatches",
  "Jewelry suggestions that complement your undertone",
  "Additional hair colour ideas",
  "Colour names to help you shop confidently online",
];
const INSIGHT = [
  "How to tell the difference between cool and warm colours",
  "Which colours are universally flattering (yes, they exist)",
  "Try on fake bang pieces to test hair colours instantly",
  "Explore lipstick assessors to see what works vs. what to avoid",
  "Spot undertones in clothing and makeup so you stop wasting money",
  "Try your best lipstick shade with samples from MAC",
  "We go through your makeup bag and tell you what works for your season",
  "Bonus extended help after your appointment when you're shopping",
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

          <div className="pp-container relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
            <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
              <p className="font-display text-lg italic text-blush">Port Moody, BC</p>
              <h1 className="mt-2 font-display text-4xl leading-tight text-white drop-shadow-sm md:text-6xl">
                Curated Colour Consulting with Naomi
              </h1>
              <p className="mt-5 font-display text-2xl italic text-gold md:text-3xl">
                Stop guessing, start glowing.
              </p>
              <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-white/85 lg:mx-0">
                I&apos;m Naomi Ciarallo, a Coquitlam-based stylist who elevates your
                style through personalized colour analysis. Discover how the right
                colours can enhance your natural beauty and transform the way you
                shop, dress, and feel.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
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

            <Reveal className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative mx-auto max-w-xs">
                <div className="overflow-hidden rounded-[9999px_9999px_16px_16px] border-[6px] border-white/90 shadow-2xl">
                  <Image
                    src="/images/IMG_5002.jpeg"
                    alt="Naomi Ciarallo, Certified Colour Specialist"
                    width={600}
                    height={900}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  Certified Colour Specialist
                </div>
              </div>
            </Reveal>
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
                      {card.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* quick value row */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Gem, t: "Best jewelry metals" },
                { icon: Shirt, t: "Flattering combinations" },
                { icon: Sparkles, t: "MAC lipstick match" },
              ].map((v) => (
                <div key={v.t} className="flex items-center justify-center gap-3 rounded-2xl bg-mist px-5 py-4 text-center">
                  <v.icon className="h-5 w-5 text-plum" />
                  <span className="font-display text-lg text-teal">{v.t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet Naomi ── */}
        <section className="bg-mist py-20 md:py-24">
          <div className="pp-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[9999px_9999px_16px_16px] border-[6px] border-white shadow-xl mx-auto max-w-xs">
                <Image
                  src="/images/IMG_4875.jpeg"
                  alt="Naomi Ciarallo"
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
                  Based in Coquitlam, BC, I help clients across the Lower Mainland find
                  the colours that let them shine. Colour analysis changed how I shop,
                  dress, and feel about myself, and I love guiding others to that same
                  clarity and confidence.
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-ink/80">
                  Every session is warm, unhurried, and completely personalized. You
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
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm">
                    <Image
                      src={`/images/${img}`}
                      alt="Persona in Palette colour analysis"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-plum/0 opacity-0 transition group-hover:bg-plum/30 group-hover:opacity-100">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                  </div>
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
            <a href="#" className="flex items-center gap-2 transition hover:text-white">
              <Instagram className="h-4 w-4 text-blush" /> @persona.in.palette
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
