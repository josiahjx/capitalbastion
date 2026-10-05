import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="site-wrap grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="font-display text-xl font-semibold">CapitalBastion</Link>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Blockchain forensics and cryptocurrency recovery for individuals, companies, and legal teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><Link href="/services#private-keys" className="hover:text-white">Private key recovery</Link></li>
            <li><Link href="/services#hacked-accounts" className="hover:text-white">Stolen asset tracing</Link></li>
            <li><Link href="/services#exchange" className="hover:text-white">Exchange recovery</Link></li>
            <li><Link href="/services#inheritance" className="hover:text-white">Estate & inheritance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-white">Offices</h4>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/65">
            <li>New York · London</li>
            <li>Singapore · Dubai</li>
            <li>help@CapitalBastionforensics.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-wrap flex flex-col gap-3 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CapitalBastion Forensics. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/privacy" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
