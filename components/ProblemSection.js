'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileEdit, CalendarX, Clock, ClipboardList, AlertTriangle } from 'lucide-react';

const painPoints = [
  { icon: FileEdit, title: 'Manual SOAP Notes', desc: 'Hours spent on clinical documentation instead of patient care' },
  { icon: CalendarX, title: 'Appointment Management', desc: 'Juggling schedules, no-shows, and last-minute cancellations' },
  { icon: Clock, title: 'Missed Follow-ups', desc: 'Patients lost in the system after their initial visit' },
  { icon: ClipboardList, title: 'Administrative Burden', desc: 'Staff overwhelmed with repetitive administrative tasks' },
  { icon: AlertTriangle, title: 'Documentation Fatigue', desc: 'Burnout from end-of-day charting and compliance paperwork' },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-nadi-bg" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold text-nadi-secondary uppercase tracking-wider mb-3">The Problem</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-nadi-text leading-tight">
            Doctors Should Focus on Patients,{' '}
            <span className="text-nadi-primary">Not Paperwork</span>
          </h2>
          <p className="mt-6 text-lg text-nadi-muted leading-relaxed">
            Healthcare professionals spend 2+ hours daily on documentation. That&apos;s time stolen from the patients who need you most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group p-6 lg:p-8 bg-white rounded-2xl border border-nadi-border/60 hover:border-rose-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                <point.icon className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-nadi-text mb-2">{point.title}</h3>
              <p className="text-sm text-nadi-muted leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-rose-50 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span className="text-sm font-medium text-rose-700">Average doctor spends 49% of time on administrative tasks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
