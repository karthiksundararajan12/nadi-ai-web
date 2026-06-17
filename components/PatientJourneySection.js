'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  Calendar,
  Bell,
  Stethoscope,
  Mic,
  ClipboardList,
  FileText,
  MessageCircle,
  Activity,
  Check,
  Hospital,
} from 'lucide-react';

const workflowSteps = [
  {
    step: 1,
    title: 'Appointment Booking',
    description: 'Patients book appointments through WhatsApp, web, or clinic staff.',
    icon: Calendar,
    color: '#2D6CDF',
    bg: 'bg-blue-500/10',
  },
  {
    step: 2,
    title: 'Smart Reminders',
    description: 'Automated appointment reminders reduce no-shows.',
    icon: Bell,
    color: '#7C3AED',
    bg: 'bg-violet-500/10',
  },
  {
    step: 3,
    title: 'Doctor Consultation',
    description: 'Capture consultations with real-time AI assistance.',
    icon: Stethoscope,
    color: '#0F4C81',
    bg: 'bg-nadi-primary/10',
  },
  {
    step: 4,
    title: 'AI Medical Scribe',
    description: 'Generate structured SOAP notes automatically.',
    icon: Mic,
    color: '#4F46E5',
    bg: 'bg-indigo-500/10',
  },
  {
    step: 5,
    title: 'Prescription Drafting',
    description: 'Create prescriptions and clinical summaries faster.',
    icon: ClipboardList,
    color: '#1D8F6E',
    bg: 'bg-emerald-500/10',
  },
  {
    step: 6,
    title: 'Patient Records',
    description: 'Maintain a complete patient timeline and history.',
    icon: FileText,
    color: '#2563EB',
    bg: 'bg-sky-500/10',
  },
  {
    step: 7,
    title: 'Automated Follow-Ups',
    description: 'Send reminders, instructions, and follow-up messages through WhatsApp.',
    icon: MessageCircle,
    color: '#22C55E',
    bg: 'bg-green-500/10',
  },
  {
    step: 8,
    title: 'Remote Patient Monitoring',
    description: 'Track patient health and engagement beyond the clinic visit.',
    icon: Activity,
    color: '#F43F5E',
    bg: 'bg-rose-500/10',
  },
];

const platformFeatures = [
  'AI-Powered Documentation',
  'SOAP Note Generation',
  'Appointment Automation',
  'Patient Timeline',
  'WhatsApp Communication',
  'Follow-Up Management',
  'Analytics & Insights',
  'Remote Patient Monitoring',
];

function WorkflowConnector({ vertical = false }) {
  return (
    <div
      className={`flex items-center justify-center shrink-0 ${
        vertical ? 'py-1' : 'px-1 lg:px-2'
      }`}
      aria-hidden="true"
    >
      <div
        className={`${
          vertical
            ? 'w-px h-8 bg-gradient-to-b from-indigo-300/60 to-violet-300/30'
            : 'hidden lg:block w-8 xl:w-12 h-px bg-gradient-to-r from-indigo-300/60 to-violet-300/30'
        }`}
      />
      <span
        className={`text-indigo-400/70 text-lg font-light ${
          vertical ? '' : 'hidden lg:inline mx-1'
        }`}
      >
        ↓
      </span>
      {vertical && null}
    </div>
  );
}

export default function PatientJourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="patient-journey"
      ref={ref}
      aria-labelledby="patient-journey-heading"
      className="relative py-20 lg:py-28 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-nadi-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-200/50 bg-white/70 mb-6">
            <Hospital className="w-4 h-4 text-indigo-600" aria-hidden="true" />
            <span className="text-sm font-semibold text-indigo-700">
              Complete Clinic Operating System
            </span>
          </div>
          <h2
            id="patient-journey-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nadi-text tracking-tight"
          >
            The Complete Patient Journey,{' '}
            <span className="text-gradient-primary">Powered by AI</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-nadi-muted leading-relaxed">
            From the first patient interaction to ongoing care, NADI AI automates clinical
            workflows, documentation, communication, and follow-ups in one intelligent platform.
          </p>
        </motion.div>

        {/* Workflow — horizontal scroll on tablet+, vertical on mobile */}
        <div className="mb-16 lg:mb-20">
          {/* Desktop horizontal timeline */}
          <div className="hidden xl:block overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex items-stretch min-w-max gap-0">
              {workflowSteps.map((step, i) => (
                <div key={step.title} className="flex items-stretch">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.05 + i * 0.06 }}
                    className="group w-[200px] flex flex-col"
                  >
                    <div className="relative flex-1 p-5 rounded-2xl glass border border-white/70 bg-white/60 hover:bg-white/80 hover:border-indigo-200/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-5 h-5" style={{ color: step.color }} aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500/80">
                        Step {step.step}
                      </span>
                      <h3 className="mt-1 text-sm font-bold text-nadi-text leading-snug">{step.title}</h3>
                      <p className="mt-2 text-xs text-nadi-muted leading-relaxed">{step.description}</p>
                    </div>
                  </motion.article>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex items-center px-1 self-center" aria-hidden="true">
                      <div className="w-6 h-px bg-gradient-to-r from-indigo-300/50 to-violet-300/30" />
                      <span className="text-indigo-400/60 text-sm mx-0.5">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet 2-col grid */}
          <div className="hidden md:grid xl:hidden grid-cols-2 gap-4">
            {workflowSteps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.06 }}
                className="group relative p-5 rounded-2xl glass border border-white/70 bg-white/60 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500/80">
                      Step {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-nadi-text">{step.title}</h3>
                    <p className="mt-1.5 text-xs text-nadi-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden flex flex-col items-center">
            {workflowSteps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center w-full max-w-sm">
                <motion.article
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.05 + i * 0.06 }}
                  className="w-full p-5 rounded-2xl glass border border-white/70 bg-white/60"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <step.icon className="w-5 h-5" style={{ color: step.color }} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500/80">
                        Step {step.step}
                      </span>
                      <h3 className="text-sm font-bold text-nadi-text">{step.title}</h3>
                      <p className="mt-1.5 text-xs text-nadi-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.article>
                {i < workflowSteps.length - 1 && <WorkflowConnector vertical />}
              </div>
            ))}
          </div>
        </div>

        {/* Platform features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-14 lg:mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-[0.04]" aria-hidden="true" />
            <div className="relative glass-dark border border-nadi-primary/10 rounded-3xl p-8 sm:p-10 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-nadi-text text-center mb-8 lg:mb-10">
                One Platform. <span className="text-gradient-primary">Every Clinical Workflow.</span>
              </h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {platformFeatures.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.45 + i * 0.05 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/60 border border-white/80 hover:border-indigo-200/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-nadi-text leading-snug">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" aria-hidden="true" />

            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to Transform Your Clinic Operations?
              </h3>
              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
                See how NADI AI helps healthcare teams reduce administrative workload and
                improve patient care.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-nadi-primary rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-nadi-primary"
                >
                  Book Demo
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
