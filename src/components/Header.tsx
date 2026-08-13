"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Our Story", href: "#story" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="font-display text-[22px] leading-none text-plum">
        Persona <span className="italic text-teal">in palette</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-plum/10 bg-sage/85 backdrop-blur-md">
      <div className="pp-container flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-[14px] font-medium tracking-wide text-ink/80 transition hover:text-plum"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="#book"
            className="rounded-full bg-plum px-6 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-plum-deep"
          >
            Book now
          </Link>
        </nav>
        <button className="lg:hidden text-plum" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-plum/10 bg-sage lg:hidden">
          <nav className="pp-container flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-ink/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-plum px-6 py-3 text-center font-semibold text-white"
            >
              Book now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
