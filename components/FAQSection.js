'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does NADI AI ensure data security and privacy?',
    a: 'NADI AI uses end-to-end encryption, secure cloud infrastructure, and complies with healthcare data protection regulations. All patient data is encrypted at rest and in transit, and we never share data with third parties.',
  },
  {
    q: 'Is the AI Prescription feature safe?',
    a: 'Absolutely. AI drafts prescriptions as suggestions — the doctor always reviews and approves before any prescription is finalized. The AI assists, but clinical decision-making remains with the healthcare professional.',
  },
  {
    q: 'How long does it take to set up NADI AI?',
    a: 'Most clinics are fully operational within 24-48 hours. Our onboarding team helps configure your workflows, import existing patient data, and train your staff.',
  },
  {
    q: 'Can patients book appointments without downloading an app?',
    a: 'Yes! NADI AI uses WhatsApp for patient interactions. Patients simply message your clinic&apos;s WhatsApp number to book, reschedule, or get reminders — no app download required.',
  },
  {
    q: 'Does NADI AI integrate with existing EHR systems?',
    a: 'NADI AI supports HL7/FHIR integration with major EHR systems. Our Enterprise plan includes custom integration support to connect with your existing infrastructure.',
  },
  {
    q: 'What happens if the AI makes a mistake in transcription?',
    a: 'All AI-generated content is clearly marked and requires doctor review. You can edit, correct, or discard any AI output before it becomes part of the official record. The system also learns from corrections to improve accuracy over time.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, all plans come with a 14-day free trial. No credit card required. You get full access to features so you can evaluate NADI AI in your real clinical workflow.',
  },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <div className="border-b border-nadi-border/60 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-nadi-text group-hover:text-nadi-primary transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-nadi-muted flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-nadi-muted leading-relaxed max-w-3xl">{faq.a}</p>
      </motion.div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-20 lg:py-28 bg-nadi-bg" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-nadi-text">Frequently asked questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl border border-nadi-border/60 p-6 lg:p-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
