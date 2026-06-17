'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Home, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessCard({ name, clinicName }) {
  const whatsappMessage = encodeURIComponent(
    `Hi NADI AI Team,\n\nI just requested a demo.\n\nName: ${name}\nClinic: ${clinicName}\n\nLooking forward to learning more about NADI AI.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-20 h-20 rounded-full bg-nadi-success/10 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-nadi-success" />
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold text-nadi-text mb-3">Demo Request Received</h2>

      <p className="text-nadi-muted leading-relaxed max-w-md mx-auto mb-8">
        Thank you for your interest in NADI AI. Our team will contact you within 24 hours to schedule your personalized demo.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-nadi-primary bg-white border border-nadi-border rounded-xl hover:border-nadi-primary/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <Home className="w-4 h-4" />
          Return Home
        </Link>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white gradient-primary rounded-xl hover:shadow-lg hover:shadow-nadi-primary/20 transition-all duration-200 hover:-translate-y-0.5"
        >
          Watch Product Tour
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="pt-8 border-t border-nadi-border">
        <p className="text-sm text-nadi-muted mb-4">Need a quicker response?</p>
        <a
          href={`https://wa.me/?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          Chat with us on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
