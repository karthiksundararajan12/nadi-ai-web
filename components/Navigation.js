'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solution' },
  { label: 'Journey', href: '#patient-journey' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function getHeaderOffset() {
  return window.innerWidth >= 1024 ? 88 : 72;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleSectionClick(e, href, closeMobile = false) {
    if (!href.startsWith('#')) return;

    e.preventDefault();
    const id = href.slice(1);

    if (closeMobile) {
      setMobileOpen(false);
      setTimeout(() => scrollToSection(id), 250);
    } else {
      scrollToSection(id);
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-nadi-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            aria-label="NADI AI home"
            className="flex h-full min-w-0 max-w-[62vw] sm:max-w-none items-center gap-2.5 sm:gap-3 lg:gap-3.5 shrink-0"
          >
            <span className="relative h-14 w-14 sm:h-[3.75rem] sm:w-[3.75rem] lg:h-[4.75rem] lg:w-[4.75rem] flex-shrink-0">
              <Image
                src="/logo.png"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 56px, (max-width: 1024px) 60px, 76px"
                className="object-contain"
              />
            </span>
            <span className="truncate text-lg sm:text-xl lg:text-[1.75rem] font-bold text-nadi-text tracking-tight leading-none">
              NADI <span className="text-nadi-accent">AI</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-nadi-muted hover:text-nadi-primary transition-colors rounded-lg hover:bg-nadi-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/book-demo"
              className="px-4 py-2 text-sm font-medium text-nadi-primary hover:text-nadi-primary-dark transition-colors"
            >
              Contact Sales
            </a>
            <a
              href="/book-demo"
              className="px-5 py-2.5 text-sm font-semibold text-white gradient-primary rounded-lg hover:shadow-lg hover:shadow-nadi-primary/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Demo
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-nadi-text hover:bg-nadi-primary/5 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-nadi-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href, true)}
                  className="block px-4 py-3 text-base font-medium text-nadi-muted hover:text-nadi-primary hover:bg-nadi-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-nadi-border space-y-2">
                <a
                  href="/book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 text-sm font-medium text-nadi-primary border border-nadi-primary/20 rounded-lg hover:bg-nadi-primary/5 transition-colors"
                >
                  Contact Sales
                </a>
                <a
                  href="/book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 text-sm font-semibold text-white gradient-primary rounded-lg"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
