'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, UserCheck, Shield, CheckCircle2, MessageCircle, Stethoscope, FileText, Pill, HeartPulse, Phone } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import DemoForm from '../../components/DemoForm';

const journeySteps = [
  { icon: MessageCircle, label: 'WhatsApp Booking', color: '#22c55e' },
  { icon: Stethoscope, label: 'Doctor Consultation', color: '#0F4C81' },
  { icon: FileText, label: 'AI Scribe', color: '#2D6CDF' },
  { icon: Pill, label: 'Prescription Draft', color: '#1D8F6E' },
  { icon: HeartPulse, label: 'RPM & Follow-Up', color: '#f43f5e' },
];

const benefits = [
  'Save Hours Every Day',
  'Reduce Documentation Burden',
  'Improve Patient Retention',
  'Increase Clinic Efficiency',
];

const trustBadges = [
  { icon: Clock, label: '30-Minute Live Demo' },
  { icon: UserCheck, label: 'Personalized for Your Practice' },
  { icon: Shield, label: 'No Commitment Required' },
];

export default function BookDemoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-nadi-bg pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-nadi-muted hover:text-nadi-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-5xl font-bold text-nadi-text leading-tight">
              Book a <span className="text-gradient-primary">Personalized Demo</span>
            </h1>
            <p className="mt-4 text-lg text-nadi-muted max-w-2xl leading-relaxed">
              See how NADI AI automates WhatsApp appointment booking, consultation documentation, prescription drafting, and patient follow-up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4 lg:gap-6"
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-nadi-border/60">
                <badge.icon className="w-4 h-4 text-nadi-primary" />
                <span className="text-sm font-medium text-nadi-text">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl border border-nadi-border/60 p-6 lg:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-nadi-text mb-6">The Complete Patient Journey</h3>

                <div className="space-y-4">
                  {journeySteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${step.color}10` }}>
                        <step.icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <span className="text-sm font-medium text-nadi-text">{step.label}</span>
                      {i < journeySteps.length - 1 && (
                        <div className="hidden sm:block ml-auto">
                          <div className="w-px h-4 bg-nadi-border" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-nadi-border/50">
                  <h4 className="text-sm font-semibold text-nadi-text mb-4">Key Benefits</h4>
                  <div className="space-y-3">
                    {benefits.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-nadi-success flex-shrink-0" />
                        <span className="text-sm text-nadi-muted">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-nadi-border/60 p-6 lg:p-8 shadow-sm">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-nadi-primary/5 to-nadi-accent/5 rounded-2xl blur-xl" />
                  <div className="relative glass rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-nadi-text">NADI AI Dashboard</h4>
                        <p className="text-xs text-nadi-muted">Live preview</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-nadi-success animate-pulse" />
                        <span className="text-xs font-medium text-nadi-success">Active</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-nadi-primary/5 rounded-lg text-center">
                        <p className="text-lg font-bold text-nadi-primary">147</p>
                        <p className="text-[10px] text-nadi-muted">Patients This Month</p>
                      </div>
                      <div className="p-3 bg-nadi-secondary/5 rounded-lg text-center">
                        <p className="text-lg font-bold text-nadi-secondary">94%</p>
                        <p className="text-[10px] text-nadi-muted">Show-up Rate</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-xs font-medium text-nadi-text">Appointments</span>
                        </div>
                        <span className="text-xs font-semibold text-green-600">+23 today</span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-nadi-accent" />
                          <span className="text-xs font-medium text-nadi-text">SOAP Notes</span>
                        </div>
                        <span className="text-xs font-semibold text-nadi-accent">18 generated</span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg">
                        <div className="flex items-center gap-2">
                          <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                          <span className="text-xs font-medium text-nadi-text">RPM Active</span>
                        </div>
                        <span className="text-xs font-semibold text-rose-500">52 patients</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl border border-nadi-border/60 p-6 lg:p-8 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-nadi-text mb-1">Request Your Demo</h3>
                <p className="text-sm text-nadi-muted mb-6">Fill in the details below and our team will reach out within 24 hours.</p>
                <DemoForm />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
