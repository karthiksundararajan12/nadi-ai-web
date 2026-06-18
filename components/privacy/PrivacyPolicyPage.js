'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Mail } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';

const LAST_UPDATED = 'June 17, 2026';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          NADI AI (&ldquo;NADI AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides an
          AI-powered clinic operating system designed to help healthcare providers automate
          documentation, patient engagement, and clinical workflows.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard information when
          you visit our website, use our platform, request a demo, or otherwise interact with our
          services. We are committed to protecting the privacy of clinics, providers, staff, and
          patients whose data may be processed through our systems.
        </p>
        <p>
          By accessing or using NADI AI, you acknowledge that you have read and understood this
          Privacy Policy. If you do not agree with our practices, please do not use our services.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <h3 className="text-base font-semibold text-nadi-text mt-6 mb-2">Information you provide</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Contact details such as name, email address, phone number, and clinic name</li>
          <li>Account and profile information for authorized users</li>
          <li>Demo requests, support inquiries, and communications with our team</li>
          <li>Clinical and operational data entered into the platform by authorized users</li>
        </ul>
        <h3 className="text-base font-semibold text-nadi-text mt-6 mb-2">Information collected automatically</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Device, browser, and usage data such as IP address, pages visited, and interaction logs</li>
          <li>Authentication and security logs</li>
          <li>Cookies and similar technologies as described below</li>
        </ul>
        <h3 className="text-base font-semibold text-nadi-text mt-6 mb-2">Healthcare-related information</h3>
        <p>
          Where our services are used by clinics, we may process protected health information (PHI)
          and other clinical data solely on behalf of our customers and in accordance with applicable
          agreements, including Business Associate Agreements where required.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    content: (
      <>
        <p>We use collected information to:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Provide, operate, maintain, and improve the NADI AI platform</li>
          <li>Generate clinical documentation, summaries, and workflow automations</li>
          <li>Respond to demo requests, support inquiries, and customer communications</li>
          <li>Authenticate users and protect against fraud, abuse, and security threats</li>
          <li>Analyze product usage to improve performance, reliability, and user experience</li>
          <li>Comply with legal obligations and enforce our terms and policies</li>
          <li>Send service-related notices and, where permitted, product updates or marketing communications</li>
        </ul>
        <p className="mt-4">
          We do not sell personal information. We do not use patient data for unrelated advertising
          purposes.
        </p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: (
      <>
        <p>Where applicable under data protection laws, we process personal information based on:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Contractual necessity</strong> — to provide services requested by our customers</li>
          <li><strong>Legitimate interests</strong> — to secure, improve, and promote our platform, balanced against your rights</li>
          <li><strong>Legal obligation</strong> — to comply with applicable laws and regulatory requirements</li>
          <li><strong>Consent</strong> — where required for specific activities such as certain cookies or marketing communications</li>
        </ul>
      </>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    content: (
      <>
        <p>We may share information in the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Service providers</strong> — with trusted vendors who assist with hosting, analytics, communications, security, and support, subject to contractual safeguards</li>
          <li><strong>Healthcare customers</strong> — clinical data is controlled by the clinic or organization using NADI AI</li>
          <li><strong>Legal and safety</strong> — when required by law, regulation, legal process, or to protect rights, safety, and security</li>
          <li><strong>Business transfers</strong> — in connection with a merger, acquisition, financing, or sale of assets, with appropriate notice where required</li>
        </ul>
        <p className="mt-4">
          We require third parties that process data on our behalf to maintain appropriate security
          and confidentiality measures.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: (
      <>
        <p>
          We implement administrative, technical, and organizational safeguards designed to protect
          information against unauthorized access, alteration, disclosure, or destruction. These
          measures may include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Encryption in transit and at rest where appropriate</li>
          <li>Role-based access controls and authentication mechanisms</li>
          <li>Monitoring, logging, and incident response procedures</li>
          <li>Vendor risk management and secure development practices</li>
        </ul>
        <p className="mt-4">
          No method of transmission or storage is completely secure. While we strive to protect
          your information, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: (
      <>
        <p>
          We retain information only for as long as necessary to fulfill the purposes described in
          this policy, unless a longer retention period is required or permitted by law, contractual
          obligation, or legitimate business need.
        </p>
        <p>
          Retention periods for clinical and account data may be determined by customer agreements,
          applicable healthcare regulations, and backup or disaster recovery requirements.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking Technologies',
    content: (
      <>
        <p>
          We use cookies and similar technologies to operate our website, remember preferences,
          analyze traffic, and improve our services. These may include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li><strong>Essential cookies</strong> — required for core site functionality</li>
          <li><strong>Analytics cookies</strong> — to understand how visitors use our website</li>
          <li><strong>Preference cookies</strong> — to remember settings and improve experience</li>
        </ul>
        <p className="mt-4">
          You can manage cookie preferences through your browser settings. Disabling certain cookies
          may affect site functionality.
        </p>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    content: (
      <>
        <p>
          NADI AI may process and store information in countries other than where it was originally
          collected. When we transfer personal information internationally, we implement appropriate
          safeguards consistent with applicable data protection laws.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: (
      <>
        <p>Depending on your location, you may have rights to:</p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Access, correct, or delete your personal information</li>
          <li>Object to or restrict certain processing activities</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request data portability where applicable</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p className="mt-4">
          To exercise your rights, contact us using the details below. We may need to verify your
          identity before responding. Patients seeking access to medical records should contact their
          healthcare provider directly.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Our website and services are not directed to children under 18. We do not knowingly collect
          personal information from children. If you believe a child has provided us with personal
          information, please contact us so we can take appropriate action.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    content: (
      <>
        <p>
          Our website may contain links to third-party websites or services. We are not responsible
          for the privacy practices of those third parties. We encourage you to review their privacy
          policies before providing any information.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will
          post the updated policy on this page and revise the &ldquo;Last Updated&rdquo; date. Your
          continued use of our services after changes become effective constitutes acceptance of the
          revised policy.
        </p>
      </>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
        <div className="mt-4 p-5 rounded-xl bg-nadi-bg border border-nadi-border/60 space-y-2">
          <p className="font-semibold text-nadi-text">NADI AI</p>
          <p>
            Email:{' '}
            <a href="mailto:privacy@nadiai.com" className="text-violet-600 hover:text-violet-700 font-medium">
              privacy@nadiai.com
            </a>
          </p>
          <p>
            General inquiries:{' '}
            <a href="mailto:hello@nadiai.com" className="text-violet-600 hover:text-violet-700 font-medium">
              hello@nadiai.com
            </a>
          </p>
          <p className="text-nadi-muted">Mumbai, India</p>
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

export default function PrivacyPolicyPage() {
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
                <Shield className="w-4 h-4 text-violet-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Legal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-nadi-text">Privacy Policy</h1>
              <p className="mt-4 text-lg text-nadi-muted max-w-2xl leading-relaxed">
                How NADI AI collects, uses, and protects your information.
              </p>
              <p className="mt-3 text-sm text-nadi-muted/80">Last updated: {LAST_UPDATED}</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-6">
              <label htmlFor="privacy-toc-mobile" className="sr-only">
                Jump to section
              </label>
              <select
                id="privacy-toc-mobile"
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

        {/* Footer CTA */}
        <section className="pb-16 lg:pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative rounded-2xl overflow-hidden gradient-primary shadow-lg shadow-nadi-primary/15">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_60%)]" aria-hidden="true" />
              <div className="relative px-6 py-10 sm:px-10 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Questions About Privacy?</h2>
                <p className="mt-3 text-white/75 leading-relaxed max-w-lg mx-auto">
                  Our team is here to help with any privacy or data security questions.
                </p>
                <a
                  href="mailto:privacy@nadiai.com"
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
