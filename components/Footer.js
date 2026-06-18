'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'AI Scribe', href: '#features' },
      { label: 'Clinical Documentation', href: '#features' },
      { label: 'SOAP Notes', href: '#features' },
      { label: 'Integrations', href: '#features' },
      { label: 'Security', href: '#why-nadi' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Solo Practitioners', href: '#solution' },
      { label: 'Clinics', href: '#solution' },
      { label: 'Hospitals', href: '#solution' },
      { label: 'Telehealth', href: '#solution' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Book Demo', href: '/book-demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'HIPAA Compliance', href: '#', comingSoon: true },
    ],
  },
];

const contactInfo = [
  { icon: Mail, text: 'karthik.sundararajan12@gmail.com', href: 'mailto:karthik.sundararajan12@gmail.com' },
  { icon: Phone, text: '+91 9840227132', href: 'tel:+919840227132' },
  { icon: MapPin, text: 'Bangalore, India', href: null },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/nadi-ai/?viewAsMember=true' },
];

function FooterLink({ label, href, comingSoon = false }) {
  if (comingSoon) {
    return (
      <span className="group inline-flex items-center gap-1.5 text-sm text-slate-500 cursor-default">
        {label}
        <span className="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-violet-500/10 text-violet-300/80 border border-violet-500/20">
          Coming Soon
        </span>
      </span>
    );
  }

  const isExternal = href.startsWith('/') || href.startsWith('mailto:') || href.startsWith('tel:');
  const className =
    'group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-0.5';

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {label}
        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-violet-400" />
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
      {!isExternal && (
        <span className="w-0 h-px bg-violet-400 group-hover:w-3 transition-all duration-200" aria-hidden="true" />
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1628] text-white overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.12)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(45,108,223,0.08)_0%,_transparent_45%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" aria-label="NADI AI home" className="inline-flex flex-col gap-2.5 mb-6">
                <span className="flex items-center gap-3">
                  <span className="relative h-11 w-11 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt=""
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </span>
                  <span className="text-2xl font-bold tracking-tight leading-none">
                    NADI <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">AI</span>
                  </span>
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 pl-[3.25rem]">
                  AI-Powered Clinic OS
                </span>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-8">
                The AI operating system for modern clinics. Automate documentation, patient
                engagement, and clinical workflows in one intelligent platform.
              </p>

              <div className="space-y-3 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.text} className="flex items-center gap-3">
                    <info.icon className="w-4 h-4 text-violet-400/70 flex-shrink-0" />
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-500/15 hover:border-violet-500/30 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-5">
                    {column.title}
                  </h4>
                  <ul className="space-y-3.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink {...link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 NADI AI. All rights reserved.</p>
          <p className="text-xs text-slate-600">
            Built for healthcare teams who want less admin and better patient care.
          </p>
        </div>
      </div>
    </footer>
  );
}
