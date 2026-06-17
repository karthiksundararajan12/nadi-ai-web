'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Heart, Building2 } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Secure Cloud Infrastructure', desc: 'Enterprise-grade security' },
  { icon: Lock, label: 'Encrypted Data', desc: 'End-to-end encryption' },
  { icon: Heart, label: 'Healthcare Focused', desc: 'Built for medical workflows' },
  { icon: Building2, label: 'Built for Clinics', desc: 'Clinic-first design' },
];

const stats = [
  { value: '10,000+', label: 'Patients Managed' },
  { value: '500+', label: 'Active Clinics' },
  { value: '98%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'Doctor Satisfaction' },
];

function FadeInView({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">Trusted by Healthcare Professionals</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-nadi-text">Built for Healthcare. Trusted by Clinics.</h2>
        </FadeInView>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {badges.map((badge, i) => (
            <FadeInView key={badge.label} delay={i * 0.1}>
              <div className="group text-center p-6 lg:p-8 rounded-2xl border border-nadi-border/60 bg-white hover:border-nadi-primary/20 hover:shadow-lg hover:shadow-nadi-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-nadi-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-nadi-primary/10 transition-colors">
                  <badge.icon className="w-6 h-6 text-nadi-primary" />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-nadi-text mb-1">{badge.label}</h3>
                <p className="text-xs lg:text-sm text-nadi-muted">{badge.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <FadeInView key={stat.label} delay={0.2 + i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-nadi-bg">
                <p className="text-3xl lg:text-4xl font-bold text-nadi-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-nadi-muted">{stat.label}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
