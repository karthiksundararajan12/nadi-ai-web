'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '4,999',
    period: '/month',
    description: 'For solo practitioners getting started with AI-powered care.',
    features: [
      'Up to 50 patients/month',
      'WhatsApp appointment booking',
      'AI Scribe (50 sessions/mo)',
      'Basic prescription drafting',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Clinic',
    price: '14,999',
    period: '/month',
    description: 'For growing clinics that need the full patient journey automated.',
    features: [
      'Up to 300 patients/month',
      'WhatsApp booking + reminders',
      'Unlimited AI Scribe sessions',
      'Advanced prescription drafting',
      'Remote Patient Monitoring',
      'Automated follow-ups',
      'Priority support',
    ],
    cta: 'Book Demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For hospital networks and multi-location clinic groups.',
    features: [
      'Unlimited patients',
      'Multi-location support',
      'Custom AI model training',
      'HL7/FHIR integration',
      'Dedicated account manager',
      'On-premise deployment option',
      '24/7 phone support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-white" id="pricing" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-nadi-text">
            Simple, transparent <span className="text-gradient-primary">pricing</span>
          </h2>
          <p className="mt-4 text-lg text-nadi-muted max-w-xl mx-auto">Choose the plan that fits your practice. All plans include a 14-day free trial.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-nadi-primary text-white border-nadi-primary shadow-2xl shadow-nadi-primary/20 scale-[1.02]'
                  : 'bg-white border-nadi-border/60 hover:border-nadi-primary/20 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-nadi-accent rounded-full text-xs font-semibold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" /> Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-nadi-text'}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? 'text-white/70' : 'text-nadi-muted'}`}>{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-nadi-text'}`}>
                  {plan.price === 'Custom' ? '' : '₹'}{plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-nadi-muted'}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white/80' : 'text-nadi-success'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-nadi-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/book-demo"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? 'bg-white text-nadi-primary hover:shadow-lg'
                    : 'gradient-primary text-white hover:shadow-lg hover:shadow-nadi-primary/20'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
