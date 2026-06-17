'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" id="demo" ref={ref}>
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Transform Your Clinic<br />with NADI AI
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Join hundreds of clinics already using NADI AI to automate their patient journey and deliver better care.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-nadi-primary rounded-xl font-semibold text-base hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Contact Sales
            </a>
          </div>
          <p className="mt-8 text-sm text-white/50">No credit card required. 14-day free trial. Cancel anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
