'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Mail, AlertTriangle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';

const LAST_UPDATED = 'June 17, 2026';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing, browsing, or using the NADI AI website, platform, applications, or related
          services (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of
          Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you must not access or
          use the Service.
        </p>
        <p>
          If you are using the Service on behalf of a clinic, hospital, or other organization, you
          represent that you have authority to bind that organization to these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'description',
    title: 'Description of Service',
    content: (
      <>
        <p>
          NADI AI provides AI-powered healthcare documentation, transcription, clinical workflow
          automation, and related tools designed to assist healthcare professionals and clinic
          teams. Our platform may include features such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>AI-assisted medical scribing and clinical documentation</li>
          <li>SOAP note and consultation summary generation</li>
          <li>Appointment and patient engagement workflows</li>
          <li>Integration with clinic operations and communication tools</li>
        </ul>
        <p className="mt-4">
          Features may change over time as we improve and expand the platform.
        </p>
      </>
    ),
  },
  {
    id: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    content: (
      <>
        <div className="rounded-xl border border-amber-300/40 bg-amber-50 p-5 sm:p-6 space-y-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="font-semibold text-amber-900 uppercase tracking-wide text-sm">
              Important Notice
            </p>
          </div>
          <p className="text-amber-950 font-medium">
            NADI AI is an assistive technology platform.
          </p>
          <p className="text-amber-900/90">
            NADI AI does not provide medical advice, diagnosis, treatment, or clinical
            decision-making services.
          </p>
          <p className="text-amber-900/90">
            Healthcare professionals remain solely responsible for patient care, documentation
            review, diagnosis, treatment decisions, and compliance with applicable laws and
            regulations.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'user-accounts',
    title: 'User Accounts',
    content: (
      <>
        <p>
          Certain features of the Service require registration. You are responsible for maintaining
          the confidentiality of your account credentials and for all activities that occur under
          your account.
        </p>
        <p>
          You agree to provide accurate information, promptly update account details as needed, and
          notify us immediately of any unauthorized access or security breach.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    content: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Violate any applicable local, national, or international law or regulation</li>
          <li>Attempt unauthorized access to systems, accounts, or data</li>
          <li>Upload viruses, malware, or other harmful code</li>
          <li>Reverse engineer, decompile, or attempt to extract source code from the platform</li>
          <li>Interfere with or disrupt the integrity or performance of the Service</li>
          <li>Use the Service for unlawful, fraudulent, or abusive activities</li>
        </ul>
        <p className="mt-4">
          We reserve the right to investigate and take appropriate action against violations of
          these restrictions.
        </p>
      </>
    ),
  },
  {
    id: 'ai-content',
    title: 'AI-Generated Content',
    content: (
      <>
        <p>
          NADI AI uses artificial intelligence to generate clinical documentation, transcriptions,
          summaries, and related outputs. These outputs are intended to assist healthcare
          professionals and are not a substitute for professional medical judgment.
        </p>
        <p>
          Users are solely responsible for reviewing, validating, editing, and approving all
          AI-generated content before use in clinical, administrative, or legal contexts.
        </p>
        <p>
          NADI AI does not guarantee the accuracy, completeness, reliability, or suitability of
          AI-generated outputs. You assume full responsibility for how generated content is used.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <>
        <p>
          All software, technology, trademarks, branding, logos, content, designs, and platform
          features are the exclusive property of NADI AI or its licensors and are protected by
          applicable intellectual property laws.
        </p>
        <p>
          Except as expressly permitted, you may not copy, modify, distribute, sell, or create
          derivative works from any part of the Service without prior written consent.
        </p>
      </>
    ),
  },
  {
    id: 'service-availability',
    title: 'Service Availability',
    content: (
      <>
        <p>
          We strive to maintain reliable access to the Service but do not guarantee uninterrupted
          availability. NADI AI may modify, suspend, or discontinue any part of the Service at any
          time, with or without notice.
        </p>
        <p>
          We are not liable for any modification, suspension, or discontinuation of the Service.
        </p>
      </>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy',
    content: (
      <>
        <p>
          Your use of the Service is also governed by our{' '}
          <Link href="/privacy-policy" className="text-violet-600 hover:text-violet-700 font-medium underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          , which explains how we collect, use, and protect information. By using NADI AI, you
          consent to our data practices as described in the Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimer-warranties',
    title: 'Disclaimer of Warranties',
    content: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED ON AN
          &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND,
          WHETHER EXPRESS, IMPLIED, OR STATUTORY.
        </p>
        <p>
          NADI AI DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE
          WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-liability',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NADI AI AND ITS AFFILIATES, OFFICERS, DIRECTORS,
          EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER
          INTANGIBLE LOSSES, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE.
        </p>
        <p>
          Our total liability for any claim arising out of or relating to these Terms or the
          Service shall not exceed the amount paid by you to NADI AI for the Service in the twelve
          (12) months preceding the claim, or one hundred U.S. dollars (USD $100), whichever is
          greater, where permitted by law.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    content: (
      <>
        <p>
          NADI AI may suspend or terminate your access to the Service at any time, with or without
          notice, for conduct that we believe violates these Terms or is harmful to other users,
          us, or third parties.
        </p>
        <p>
          Upon termination, your right to use the Service ceases immediately. Provisions that by
          their nature should survive termination shall remain in effect.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: (
      <>
        <p>
          We may update these Terms from time to time. When we make material changes, we will post
          the updated Terms on this page and revise the &ldquo;Last Updated&rdquo; date.
        </p>
        <p>
          Your continued use of the Service after changes become effective constitutes acceptance
          of the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          jurisdiction in which NADI AI operates, without regard to conflict of law principles.
        </p>
        <p>
          Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of
          the courts in that jurisdiction, unless otherwise required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
      <>
        <p>If you have questions about these Terms, contact us:</p>
        <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <p className="font-semibold text-nadi-text">NADI AI</p>
          <p>
            Email:{' '}
            <a href="mailto:hello@nadi-ai.com" className="text-violet-600 hover:text-violet-700 font-medium">
              hello@nadi-ai.com
            </a>
          </p>
          <p>
            Website:{' '}
            <a
              href="https://nadi-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:text-violet-700 font-medium"
            >
              https://nadi-ai.com
            </a>
          </p>
        </div>
      </>
    ),
  },
];

function TableOfContents({ activeId, onNavigate }) {
  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wider text-nadi-muted mb-4">On this page</p>
      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => onNavigate(section.id)}
                className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200 border-l-2 ${
                  isActive
                    ? 'border-violet-500 text-violet-700 bg-violet-50 font-medium'
                    : 'border-transparent text-nadi-muted hover:text-nadi-primary hover:bg-nadi-primary/5'
                }`}
              >
                {section.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function TermsOfServicePage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white text-nadi-text pt-20">
        {/* Hero */}
        <section className="relative py-12 lg:py-16 overflow-hidden border-b border-nadi-border/60 bg-gradient-to-b from-nadi-bg to-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.06)_0%,_transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(45,108,223,0.05)_0%,_transparent_50%)] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-nadi-muted hover:text-nadi-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200/60 mb-5">
                <FileText className="w-4 h-4 text-violet-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Legal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-nadi-text">Terms of Service</h1>
              <p className="mt-4 text-lg text-nadi-muted max-w-2xl leading-relaxed">
                The rules and conditions governing the use of NADI AI.
              </p>
              <p className="mt-3 text-sm text-nadi-muted/80">Last updated: {LAST_UPDATED}</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:hidden mb-6">
              <label htmlFor="terms-toc-mobile" className="sr-only">
                Jump to section
              </label>
              <select
                id="terms-toc-mobile"
                value={activeId}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-white border border-nadi-border text-sm text-nadi-text focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-300"
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:grid lg:grid-cols-[240px_minmax(0,900px)] lg:justify-center lg:gap-10 xl:gap-14">
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <TableOfContents activeId={activeId} onNavigate={scrollToSection} />
                </div>
              </aside>

              <article className="bg-white rounded-2xl sm:rounded-3xl border border-nadi-border/80 shadow-sm shadow-slate-200/50 text-nadi-text">
                <div className="px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14 space-y-14">
                  {sections.map((section, index) => (
                    <section
                      key={section.id}
                      id={section.id}
                      aria-labelledby={`${section.id}-heading`}
                      className="scroll-mt-28"
                    >
                      <h2
                        id={`${section.id}-heading`}
                        className="text-xl sm:text-2xl font-bold text-nadi-text tracking-tight mb-4"
                      >
                        <span className="text-violet-500/80 text-sm font-semibold mr-2">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {section.title}
                      </h2>
                      <div className="prose-policy text-[15px] sm:text-base text-nadi-muted leading-relaxed space-y-4">
                        {section.content}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 lg:pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative rounded-2xl overflow-hidden gradient-primary shadow-lg shadow-nadi-primary/15">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_60%)]" aria-hidden="true" />
              <div className="relative px-6 py-10 sm:px-10 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Questions About These Terms?</h2>
                <p className="mt-3 text-white/75 leading-relaxed max-w-lg mx-auto">
                  If you have questions regarding our Terms of Service, please contact our team.
                </p>
                <a
                  href="mailto:hello@nadi-ai.com"
                  className="mt-7 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-nadi-primary rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-white/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
