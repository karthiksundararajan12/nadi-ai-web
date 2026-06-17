'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageCircle, CalendarCheck, Bell, UserCheck,
  Mic, Users, FileText, ListChecks,
  Pill, Beaker, AlertCircle,
  HeartPulse, Activity, Syringe, Clock,
} from 'lucide-react';

const features = [
  {
    title: 'WhatsApp Appointment Assistant',
    description: 'Let patients book, reschedule, and manage appointments through WhatsApp — no app required.',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    items: [
      { icon: CalendarCheck, label: 'Appointment booking' },
      { icon: Clock, label: 'Rescheduling' },
      { icon: Bell, label: 'Automated reminders' },
      { icon: UserCheck, label: 'No-show reduction' },
    ],
    mockup: 'whatsapp',
  },
  {
    title: 'AI Scribe',
    description: 'Real-time transcription and automatic SOAP note generation during consultations.',
    icon: Mic,
    color: 'from-nadi-primary to-nadi-accent',
    bgColor: 'bg-nadi-primary/5',
    iconColor: 'text-nadi-primary',
    items: [
      { icon: Mic, label: 'Real-time transcription' },
      { icon: Users, label: 'Speaker identification' },
      { icon: FileText, label: 'SOAP generation' },
      { icon: ListChecks, label: 'Clinical summaries' },
    ],
    mockup: 'scribe',
  },
  {
    title: 'AI Prescription Draft',
    description: 'AI-generated prescription suggestions with dosage recommendations, always doctor-approved.',
    icon: Pill,
    color: 'from-nadi-secondary to-emerald-500',
    bgColor: 'bg-nadi-secondary/5',
    iconColor: 'text-nadi-secondary',
    items: [
      { icon: Pill, label: 'Prescription suggestions' },
      { icon: Beaker, label: 'Dosage suggestions' },
      { icon: AlertCircle, label: 'Clinical recommendations' },
    ],
    mockup: 'prescription',
    notice: 'AI drafts. Doctor approves.',
  },
  {
    title: 'Remote Patient Monitoring',
    description: 'Continuous health tracking and automated follow-ups to keep patients engaged between visits.',
    icon: HeartPulse,
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    items: [
      { icon: Activity, label: 'BP & heart rate tracking' },
      { icon: Syringe, label: 'Vaccine reminders' },
      { icon: Pill, label: 'Medication reminders' },
      { icon: Clock, label: 'Follow-up automation' },
    ],
    mockup: 'rpm',
  },
];

function WhatsAppMockup() {
  return (
    <div className="bg-white rounded-xl border border-nadi-border overflow-hidden shadow-sm">
      <div className="bg-green-600 px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">NADI AI Assistant</p>
          <p className="text-[10px] text-green-100">Online</p>
        </div>
      </div>
      <div className="p-4 space-y-3 bg-green-50/30">
        <div className="flex justify-end">
          <div className="bg-green-100 rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-xs text-green-900">I need to book an appointment</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
            <p className="text-xs text-nadi-text">Of course! Dr. Patel has availability tomorrow at 10:00 AM and 2:30 PM. Which works best?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-green-100 rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-xs text-green-900">10:00 AM please</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
            <p className="text-xs text-nadi-text">Done! Appointment confirmed for tomorrow at 10:00 AM with Dr. Patel. You&apos;ll receive a reminder 1 hour before.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScribeMockup() {
  return (
    <div className="bg-white rounded-xl border border-nadi-border overflow-hidden shadow-sm">
      <div className="bg-nadi-primary px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mic className="w-4 h-4 text-white" />
          <p className="text-sm font-semibold text-white">AI Scribe — Active</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-xs text-white/80">REC</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider font-semibold text-nadi-muted mb-2">Transcript</p>
          <div className="space-y-1.5 text-xs">
            <p><span className="font-semibold text-nadi-primary">Dr:</span> How has the blood pressure been since our last visit?</p>
            <p><span className="font-semibold text-nadi-secondary">Pt:</span> It has been better, I think around 140/90 most days.</p>
            <p><span className="font-semibold text-nadi-primary">Dr:</span> Let&apos;s adjust the Amlodipine to 10mg...</p>
          </div>
        </div>
        <div className="border-t border-nadi-border pt-3">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-nadi-muted mb-2">SOAP Note</p>
          <div className="space-y-2 text-xs">
            <div><span className="font-semibold text-nadi-primary">S:</span> Pt reports BP ~140/90 since last visit</div>
            <div><span className="font-semibold text-nadi-primary">O:</span> BP 142/92, HR 78, regular rhythm</div>
            <div><span className="font-semibold text-nadi-primary">A:</span> Essential hypertension, suboptimally controlled</div>
            <div><span className="font-semibold text-nadi-primary">P:</span> Increase Amlodipine to 10mg daily, follow up in 2 weeks</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrescriptionMockup() {
  return (
    <div className="bg-white rounded-xl border border-nadi-border overflow-hidden shadow-sm">
      <div className="bg-nadi-secondary px-4 py-3 flex items-center gap-2">
        <Pill className="w-4 h-4 text-white" />
        <p className="text-sm font-semibold text-white">AI Prescription Draft</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between px-3 py-2 bg-nadi-secondary/5 rounded-lg">
          <div>
            <p className="text-xs font-semibold text-nadi-text">Amlodipine 10mg</p>
            <p className="text-[10px] text-nadi-muted">Once daily, oral</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 bg-nadi-secondary/10 text-nadi-secondary font-medium rounded">AI Suggested</span>
        </div>
        <div className="flex items-center justify-between px-3 py-2 bg-nadi-secondary/5 rounded-lg">
          <div>
            <p className="text-xs font-semibold text-nadi-text">Metformin 500mg</p>
            <p className="text-[10px] text-nadi-muted">Twice daily, with meals</p>
          </div>
          <span className="text-[10px] px-2 py-0.5 bg-nadi-secondary/10 text-nadi-secondary font-medium rounded">AI Suggested</span>
        </div>
        <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg border border-amber-200">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
          <p className="text-[10px] font-medium text-amber-700">AI drafts. Doctor approves before sending.</p>
        </div>
      </div>
    </div>
  );
}

function RPMMockup() {
  return (
    <div className="bg-white rounded-xl border border-nadi-border overflow-hidden shadow-sm">
      <div className="bg-rose-500 px-4 py-3 flex items-center gap-2">
        <HeartPulse className="w-4 h-4 text-white" />
        <p className="text-sm font-semibold text-white">Patient Monitoring</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 bg-rose-50 rounded-lg text-center">
            <p className="text-lg font-bold text-rose-600">132/84</p>
            <p className="text-[10px] text-nadi-muted">Blood Pressure</p>
          </div>
          <div className="p-2.5 bg-blue-50 rounded-lg text-center">
            <p className="text-lg font-bold text-blue-600">74</p>
            <p className="text-[10px] text-nadi-muted">Heart Rate</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between px-2.5 py-2 bg-amber-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Syringe className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-medium text-amber-800">Vaccine due</span>
            </div>
            <span className="text-[10px] text-amber-600">In 5 days</span>
          </div>
          <div className="flex items-center justify-between px-2.5 py-2 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Pill className="w-3.5 h-3.5 text-green-600" />
              <span className="text-xs font-medium text-green-800">Medication taken</span>
            </div>
            <span className="text-[10px] text-green-600">Today 8:00 AM</span>
          </div>
          <div className="flex items-center justify-between px-2.5 py-2 bg-nadi-primary/5 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-nadi-primary" />
              <span className="text-xs font-medium text-nadi-text">Follow-up scheduled</span>
            </div>
            <span className="text-[10px] text-nadi-primary">Jun 22</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups = { whatsapp: WhatsAppMockup, scribe: ScribeMockup, prescription: PrescriptionMockup, rpm: RPMMockup };

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-nadi-bg" id="features" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-nadi-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-nadi-text">
            Intelligent tools for{' '}
            <span className="text-gradient-primary">modern care</span>
          </h2>
        </motion.div>

        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, i) => {
            const MockupComponent = mockups[feature.mockup];
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:[direction:rtl]'} [&>*:first-child]:lg:[direction:ltr]`}
              >
                <div className={isEven ? '' : 'lg:[direction:ltr] lg:order-2'}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${feature.bgColor} rounded-lg mb-4`}>
                    <feature.icon className={`w-4 h-4 ${feature.iconColor}`} />
                    <span className={`text-xs font-semibold ${feature.iconColor}`}>{feature.title}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-nadi-text mb-4">{feature.title}</h3>
                  <p className="text-nadi-muted leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-4 h-4 ${feature.iconColor}`} />
                        </div>
                        <span className="text-sm font-medium text-nadi-text">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.notice && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg border border-amber-200">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-700">{feature.notice}</span>
                    </div>
                  )}
                </div>
                <div className={isEven ? '' : 'lg:[direction:ltr] lg:order-1'}>
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${feature.color} opacity-5 rounded-3xl blur-2xl`} />
                    <div className="relative">
                      <MockupComponent />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
