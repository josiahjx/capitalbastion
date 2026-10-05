"use client";

import { useState } from "react";
import Link from "next/link";

const serviceLinks = [
  { href: "/services#private-keys", label: "Lost Private Key Recovery" },
  { href: "/services#hacked-accounts", label: "Stolen & Hacked Account Tracing" },
  { href: "/services#inheritance", label: "Estate & Inheritance Recovery" },
  { href: "/services#exchange", label: "Exchange & Corporate Investigations" },
];

function Mark({ className = "h-8 w-8" }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-lg bg-iris text-white ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
      </svg>
    </span>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(120,108,243,0.12)] bg-[#fffcfc]/90 backdrop-blur-md">
      <div className="site-wrap flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Mark />
          <span className="font-display text-[1.15rem] font-semibold tracking-tight text-navy">
            CapitalBastion
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] text-ink lg:flex">
          <Link href="/about" className="transition hover:text-iris">About</Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className="inline-flex items-center gap-1.5 transition hover:text-iris">
              Services
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
              </svg>
            </Link>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="soft-card overflow-hidden py-2 shadow-[0_16px_40px_rgba(10,22,83,0.08)]">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-ink transition hover:bg-blue-50 hover:text-iris"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/faq" className="transition hover:text-iris">FAQ</Link>
          <Link href="/contact" className="transition hover:text-iris">Contact</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">Submit Your Case</Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"} text-lg`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(120,108,243,0.12)] bg-paper px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1 text-[15px] text-ink">
            <Link href="/about" className="rounded-lg px-2 py-2.5 hover:bg-blue-50" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" className="rounded-lg px-2 py-2.5 hover:bg-blue-50" onClick={() => setOpen(false)}>Services</Link>
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-2 py-2 pl-5 text-sm text-muted hover:bg-blue-50" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/faq" className="rounded-lg px-2 py-2.5 hover:bg-blue-50" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/contact" className="rounded-lg px-2 py-2.5 hover:bg-blue-50" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact" className="btn-primary mt-3" onClick={() => setOpen(false)}>Submit Your Case</Link>
          </div>
        </div>
      )}
    </header>
  );
}
