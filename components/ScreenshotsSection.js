'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Mic, Pill, HeartPulse } from 'lucide-react';

const products = [
  {
    title: 'WhatsApp Assistant',
    description: 'Seamless patient communication through WhatsApp — bookings, reminders, and follow-ups.',
    icon: MessageCircle,
    gradient: 'from-green-500 to-emerald-600',
    mockupBg: 'bg-green-50',
    accentColor: '#22c55e',
  },
  {
    title: 'AI Scribe',
    description: 'Real-time consultation transcription with automatic SOAP note generation.',
    icon: Mic,
    gradient: 'from-nadi-primary to-nadi-accent',
    mockupBg: 'bg-blue-50',
    accentColor: '#0F4C81',
  },
  {
    title: 'AI Prescription',
    description: 'Intelligent prescription drafting with dosage suggestions. Doctor always approves.',
    icon: Pill,
    gradient: 'from-nadi-secondary to-emerald-500',
    mockupBg: 'bg-emerald-50',
    accentColor: '#1D8F6E',
  },
  {
    title: 'RPM Dashboard',
    description: 'Real-time patient vitals monitoring with automated alerts and follow-up scheduling.',
    icon: HeartPulse,
    gradient: 'from-rose-500 to-pink-600',
    mockupBg: 'bg-rose-50',
    accentColor: '#f43f5e',
  },
];

export default function ScreenshotsSection() {
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
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">Product</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-nadi-text">
            See NADI AI <span className="text-gradient-primary">in action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="group relative rounded-2xl border border-nadi-border/60 bg-nadi-bg overflow-hidden hover:shadow-xl hover:border-nadi-primary/20 transition-all duration-300"
            >
              <div className={`h-48 lg:h-56 ${product.mockupBg} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${product.accentColor}15 0%, transparent 70%)` }} />
                </div>
                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${product.accentColor}15` }}>
                    <product.icon className="w-8 h-8" style={{ color: product.accentColor }} />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: j === 1 ? product.accentColor : `${product.accentColor}30` }} />
                    ))}
                  </div>
                  <div className="mt-2 w-48 h-2 rounded-full" style={{ backgroundColor: `${product.accentColor}10` }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: `${product.accentColor}40`, width: `${60 + i * 10}%` }} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-lg">
                  <span className="text-[10px] font-medium" style={{ color: product.accentColor }}>Live Preview</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-nadi-text mb-2">{product.title}</h3>
                <p className="text-sm text-nadi-muted leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
