'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, FileText, Heart, CalendarCheck, Zap, Users, Accessibility, ShieldCheck, Activity, Building2 } from 'lucide-react';

const columns = [
  {
    title: 'For Doctors',
    icon: Heart,
    color: 'nadi-primary',
    bgColor: 'bg-nadi-primary/10',
    iconTextColor: 'text-nadi-primary',
    bgColorLight: 'bg-nadi-primary/5',
    items: [
      { icon: Clock, label: 'Save hours daily on documentation' },
      { icon: FileText, label: 'Reduce documentation burden' },
      { icon: Heart, label: 'Focus on what matters — patients' },
    ],
  },
  {
    title: 'For Clinics',
    icon: Building2,
    color: 'nadi-secondary',
    bgColor: 'bg-nadi-secondary/10',
    iconTextColor: 'text-nadi-secondary',
    bgColorLight: 'bg-nadi-secondary/5',
    items: [
      { icon: CalendarCheck, label: 'Reduce no-shows by 40%' },
      { icon: Zap, label: 'Increase operational efficiency' },
      { icon: Users, label: 'Improve patient retention' },
    ],
  },
  {
    title: 'For Patients',
    icon: Accessibility,
    color: 'nadi-accent',
    bgColor: 'bg-nadi-accent/10',
    iconTextColor: 'text-nadi-accent',
    bgColorLight: 'bg-nadi-accent/5',
    items: [
      { icon: Accessibility, label: 'Better access to care' },
      { icon: ShieldCheck, label: 'Faster care delivery' },
      { icon: Activity, label: 'Continuous health monitoring' },
    ],
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">Benefits</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-nadi-text">
            Better for <span className="text-gradient-primary">everyone</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="group p-8 rounded-2xl bg-nadi-bg border border-nadi-border/60 hover:border-nadi-primary/20 hover:shadow-xl hover:shadow-nadi-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${col.bgColor} flex items-center justify-center mb-6`}>
                <col.icon className={`w-6 h-6 ${col.iconTextColor}`} />
              </div>
              <h3 className="text-xl font-bold text-nadi-text mb-6">{col.title}</h3>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-lg ${col.bgColorLight} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <item.icon className={`w-3.5 h-3.5 ${col.iconTextColor}`} />
                    </div>
                    <span className="text-sm text-nadi-muted leading-relaxed">{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
