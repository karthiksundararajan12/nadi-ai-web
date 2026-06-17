'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  Clock,
  Heart,
  FileText,
  MessageCircle,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';

const featureCards = [
  {
    icon: Clock,
    title: 'Save Hours Every Week',
    description:
      'Reduce time spent on documentation, note-taking, and repetitive administrative work.',
    accent: 'from-blue-500/20 to-indigo-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: Heart,
    title: 'Focus on Patient Care',
    description:
      'Spend more time with patients and less time typing clinical notes.',
    accent: 'from-violet-500/20 to-purple-500/10',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-600',
  },
  {
    icon: FileText,
    title: 'AI-Powered Clinical Documentation',
    description:
      'Generate structured SOAP notes and consultation summaries in seconds.',
    accent: 'from-indigo-500/20 to-blue-500/10',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-600',
  },
  {
    icon: MessageCircle,
    title: 'Intelligent Patient Engagement',
    description:
      'Automate reminders, follow-ups, and communication through WhatsApp.',
    accent: 'from-emerald-500/20 to-teal-500/10',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description:
      'Built with healthcare-grade privacy, security, and access controls.',
    accent: 'from-sky-500/20 to-cyan-500/10',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-600',
  },
  {
    icon: Building2,
    title: 'Built to Scale',
    description:
      'Designed for solo practitioners, specialty clinics, and multi-doctor practices.',
    accent: 'from-purple-500/20 to-violet-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
  },
];

const stats = [
  { emoji: '📝', label: 'AI-Generated SOAP Notes' },
  { emoji: '⚡', label: 'Faster Clinical Documentation' },
  { emoji: '📱', label: 'Automated Patient Follow-Ups' },
  { emoji: '🏥', label: 'End-to-End Clinic Workflow Automation' },
];

export default function WhyClinicsChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="why-nadi"
      ref={ref}
      aria-labelledby="why-nadi-heading"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-nadi-bg to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-br from-indigo-500/8 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-nadi-primary/6 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-200/50 bg-white/60 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-indigo-700">
              Built for Modern Healthcare
            </span>
          </div>

          <h2
            id="why-nadi-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nadi-text tracking-tight"
          >
            Why Clinics Choose{' '}
            <span className="text-gradient-primary">NADI AI</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-nadi-muted leading-relaxed">
            NADI AI helps doctors and clinics reduce administrative burden, streamline
            documentation, and deliver better patient experiences through intelligent
            automation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featureCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              />
              <div className="relative h-full p-6 lg:p-7 rounded-2xl glass border border-white/60 bg-white/50 hover:bg-white/70 hover:border-indigo-200/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-nadi-text mb-2.5">{card.title}</h3>
                <p className="text-sm text-nadi-muted leading-relaxed">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:mt-14"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-[0.06]" aria-hidden="true" />
            <div className="relative glass-dark border border-nadi-primary/10 rounded-2xl px-5 py-6 sm:px-8 sm:py-7">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, i) => (
                  <motion.li
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">
                      {stat.emoji}
                    </span>
                    <span className="text-sm font-semibold text-nadi-text leading-snug">
                      {stat.label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 lg:mt-14"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" aria-hidden="true" />

            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Modernize Your Clinic?
              </h3>
              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
                See how NADI AI can help your practice save time, improve efficiency, and
                deliver a better patient experience.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-nadi-primary rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-nadi-primary"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white border border-white/25 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-nadi-primary"
                >
                  <Play className="w-4 h-4" aria-hidden="true" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
