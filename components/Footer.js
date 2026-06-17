'use client';

import Image from 'next/image';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Patient Journey', 'Integrations', 'Security', 'Changelog'],
  Solutions: ['Solo Practitioners', 'Clinics', 'Hospitals', 'Telehealth', 'RPM'],
  Company: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Help Center', 'Community', 'Status'],
};

const contactInfo = [
  { icon: Mail, text: 'hello@nadiai.com' },
  { icon: Phone, text: '+91 22 4000 5000' },
  { icon: MapPin, text: 'Mumbai, India' },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-nadi-text text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <a href="#" aria-label="NADI AI home" className="inline-block mb-6">
                <Image
                  src="/logo-footer.png"
                  alt="NADI AI — AI-Powered Clinic OS"
                  width={1774}
                  height={887}
                  className="h-14 sm:h-16 w-auto object-contain object-left"
                />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
                The AI Operating System for Modern Clinics. Automate your complete patient journey with intelligent healthcare technology.
              </p>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div key={info.text} className="flex items-center gap-3">
                    <info.icon className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 NADI AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
