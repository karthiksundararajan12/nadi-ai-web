'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MessageCircle, Stethoscope, FileText, Pill, HeartPulse, Phone, ArrowDown } from 'lucide-react';

const steps = [
  { icon: User, label: 'Patient', sublabel: 'Initiates', color: 'bg-slate-100', iconColor: 'text-slate-600' },
  { icon: MessageCircle, label: 'WhatsApp Appointment', sublabel: 'Book & Schedule', color: 'bg-green-50', iconColor: 'text-green-600' },
  { icon: Stethoscope, label: 'Consultation', sublabel: 'Doctor Visit', color: 'bg-nadi-primary/5', iconColor: 'text-nadi-primary' },
  { icon: FileText, label: 'AI Scribe', sublabel: 'Real-time Notes', color: 'bg-nadi-accent/5', iconColor: 'text-nadi-accent' },
  { icon: Pill, label: 'Prescription Draft', sublabel: 'AI-Suggested', color: 'bg-nadi-secondary/5', iconColor: 'text-nadi-secondary' },
  { icon: HeartPulse, label: 'Remote Monitoring', sublabel: 'Continuous', color: 'bg-rose-50', iconColor: 'text-rose-600' },
  { icon: Phone, label: 'Follow-Up', sublabel: 'Automated', color: 'bg-amber-50', iconColor: 'text-amber-600' },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden" id="solution">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-nadi-primary/[0.02] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">The Solution</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-nadi-text">
            One Platform.{' '}
            <span className="text-gradient-primary">Complete Patient Journey.</span>
          </h2>
          <p className="mt-6 text-lg text-nadi-muted max-w-2xl mx-auto">
            NADI AI connects every step of the patient journey into one seamless, automated workflow.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-nadi-border to-transparent -translate-x-1/2" />

          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="relative flex lg:flex-col items-center gap-4 lg:gap-0"
              >
                <div className={`flex-shrink-0 w-14 h-14 lg:w-20 lg:h-20 rounded-2xl ${step.color} flex items-center justify-center lg:mb-4`}>
                  <step.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${step.iconColor}`} />
                </div>
                <div className="lg:text-center">
                  <h3 className="text-sm lg:text-base font-semibold text-nadi-text whitespace-nowrap">{step.label}</h3>
                  <p className="text-xs lg:text-sm text-nadi-muted">{step.sublabel}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <ArrowDown className="w-4 h-4 text-nadi-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-nadi-primary/5 to-nadi-accent/5 border border-nadi-primary/10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-nadi-text">End-to-end automation</h3>
                <p className="mt-2 text-nadi-muted">Every step of the patient journey, connected and automated by AI.</p>
              </div>
              <a
                href="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white gradient-primary rounded-xl hover:shadow-lg hover:shadow-nadi-primary/20 transition-all duration-200 whitespace-nowrap"
              >
                See it in action
                <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
