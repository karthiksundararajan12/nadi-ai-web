'use client';

import { useState, useRef } from 'react';
import { submitDemoRequest } from '../actions/demoActions';
import SuccessCard from './SuccessCard';
import { Loader2, AlertCircle } from 'lucide-react';

const specializations = [
  'General Practice',
  'Pediatrics',
  'Cardiology',
  'Orthopedics',
  'Dermatology',
  'ENT',
  'Diabetology',
  'Multi-Specialty Clinic',
  'Hospital',
  'Other',
];

const doctorCounts = ['1', '2-5', '6-10', '11-25', '25+'];

const challenges = [
  'Documentation Burden',
  'Appointment Management',
  'Patient Follow-Up',
  'Remote Monitoring',
  'Clinic Operations',
  'Other',
];

const fieldLabels = {
  name: 'Full Name',
  email: 'Email Address',
  phone: 'Phone Number',
  clinic_name: 'Clinic / Hospital Name',
  specialization: 'Specialization',
  doctor_count: 'Number of Doctors',
  challenge: 'Current Challenge',
  notes: 'Additional Notes',
};

function SelectField({ name, label, options, required, error, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-nadi-text mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full h-11 px-3 rounded-lg border bg-white text-sm text-nadi-text focus:outline-none focus:ring-2 focus:ring-nadi-primary/20 focus:border-nadi-primary transition-colors ${
          error ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' : 'border-nadi-border'
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</p>}
    </div>
  );
}

function InputField({ name, label, type = 'text', required, error, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-nadi-text mb-1.5">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full h-11 px-3 rounded-lg border bg-white text-sm text-nadi-text placeholder:text-nadi-muted/50 focus:outline-none focus:ring-2 focus:ring-nadi-primary/20 focus:border-nadi-primary transition-colors ${
          error ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' : 'border-nadi-border'
        }`}
      />
      {error && <p className="mt-1 text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</p>}
    </div>
  );
}

export default function DemoForm() {
  const formRef = useRef(null);
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState({ name: '', clinicName: '' });
  const [errors, setErrors] = useState({});
  const [selectValues, setSelectValues] = useState({
    specialization: '',
    doctor_count: '',
    challenge: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setErrors({});

    const formData = new FormData(formRef.current);
    for (const [key, value] of Object.entries(selectValues)) {
      if (value) formData.set(key, value);
    }
    const result = await submitDemoRequest(formData);

    setPending(false);

    if (result.success) {
      setSubmitData({ name: result.data.name, clinicName: result.data.clinicName });
      setSubmitted(true);
    } else {
      setErrors(result.errors || {});
    }
  }

  function handleSelectChange(e) {
    const { name, value } = e.target;
    setSelectValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (submitted) {
    return <SuccessCard name={submitData.name} clinicName={submitData.clinicName} />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      {errors._form && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
          <p className="text-sm text-rose-600">{errors._form}</p>
        </div>
      )}

      <InputField name="name" label={fieldLabels.name} required error={errors.name} placeholder="Dr. Priya Sharma" />
      <InputField name="email" label={fieldLabels.email} type="email" required error={errors.email} placeholder="priya@clinic.com" />
      <InputField name="phone" label={fieldLabels.phone} type="tel" required error={errors.phone} placeholder="+91 98765 43210" />
      <InputField name="clinic_name" label={fieldLabels.clinic_name} required error={errors.clinic_name} placeholder="Metro Health Clinic" />

      <SelectField
        name="specialization"
        label={fieldLabels.specialization}
        options={specializations}
        required
        error={errors.specialization}
        value={selectValues.specialization}
        onChange={handleSelectChange}
      />

      <SelectField
        name="doctor_count"
        label={fieldLabels.doctor_count}
        options={doctorCounts}
        required
        error={errors.doctor_count}
        value={selectValues.doctor_count}
        onChange={handleSelectChange}
      />

      <SelectField
        name="challenge"
        label={fieldLabels.challenge}
        options={challenges}
        error={errors.challenge}
        value={selectValues.challenge}
        onChange={handleSelectChange}
      />

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-nadi-text mb-1.5">
          {fieldLabels.notes}
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Tell us more about your practice and what you're looking for..."
          className="w-full px-3 py-2.5 rounded-lg border border-nadi-border bg-white text-sm text-nadi-text placeholder:text-nadi-muted/50 focus:outline-none focus:ring-2 focus:ring-nadi-primary/20 focus:border-nadi-primary transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full h-12 gradient-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-nadi-primary/20 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Book Live Demo'
        )}
      </button>
    </form>
  );
}
