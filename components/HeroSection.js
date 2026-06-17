'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageCircle, Stethoscope, FileText, Pill, HeartPulse, Phone } from 'lucide-react';

const flowSteps = [
  { icon: MessageCircle, label: 'WhatsApp Booking', barColor: '#22c55e', iconBg: 'rgba(34,197,94,0.1)', iconColor: '#22c55e' },
  { icon: Stethoscope, label: 'Consultation', barColor: '#0F4C81', iconBg: 'rgba(15,76,129,0.1)', iconColor: '#0F4C81' },
  { icon: FileText, label: 'AI Scribe', barColor: '#2D6CDF', iconBg: 'rgba(45,108,223,0.1)', iconColor: '#2D6CDF' },
  { icon: Pill, label: 'Prescription', barColor: '#1D8F6E', iconBg: 'rgba(29,143,110,0.1)', iconColor: '#1D8F6E' },
  { icon: HeartPulse, label: 'RPM', barColor: '#f43f5e', iconBg: 'rgba(244,63,94,0.1)', iconColor: '#f43f5e' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-nadi-bg via-white to-slate-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nadi-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-nadi-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-nadi-primary/5 border border-nadi-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-nadi-secondary animate-pulse-slow" />
              <span className="text-sm font-medium text-nadi-primary">AI-Powered Clinic Operating System</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-nadi-text leading-[1.08] tracking-tight">
              The AI Operating System for{' '}
              <span className="text-gradient-primary">Modern Clinics</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-nadi-muted leading-relaxed max-w-xl">
              From appointment booking to AI-generated clinical notes, prescription drafting, and patient monitoring — NADI AI automates the complete patient journey.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white gradient-primary rounded-xl hover:shadow-xl hover:shadow-nadi-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-nadi-primary bg-white border border-nadi-border rounded-xl hover:border-nadi-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-nadi-muted">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-nadi-success/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-nadi-success" />
                </div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-nadi-success/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-nadi-success" />
                </div>
                HIPAA Compliant
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-nadi-primary/10 to-nadi-accent/10 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-2xl p-6 shadow-2xl shadow-nadi-primary/5">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-nadi-text">Patient Journey</h3>
                    <p className="text-xs text-nadi-muted">Real-time workflow</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-nadi-success animate-pulse" />
                    <span className="text-xs font-medium text-nadi-success">Live</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {flowSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: step.iconBg }}>
                        <step.icon className="w-5 h-5" style={{ color: step.iconColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-nadi-text">{step.label}</span>
                          <span className="text-xs text-nadi-success font-medium">Active</span>
                        </div>
                        <div className="mt-1.5 w-full bg-nadi-border/50 rounded-full h-1.5">
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: `${85 + Math.random() * 15}%` }}
                            transition={{ duration: 1.5, delay: 0.8 + index * 0.2, ease: 'easeOut' }}
                            className="h-1.5 rounded-full"
                            style={{ backgroundColor: step.barColor }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-nadi-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-nadi-secondary/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-nadi-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-nadi-text">Follow-up</p>
                        <p className="text-xs text-nadi-muted">Automated</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-nadi-success/10 rounded-full">
                      <span className="text-xs font-semibold text-nadi-success">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-nadi-secondary/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-nadi-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-nadi-muted">New Appointment</p>
                    <p className="text-xs font-semibold text-nadi-text">+3 today</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 glass rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-nadi-accent/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-nadi-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-nadi-muted">SOAP Notes</p>
                    <p className="text-xs font-semibold text-nadi-text">AI Generated</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
