'use server';

import { getSupabaseAdminClient } from '../lib/supabase-admin';

export async function submitDemoRequest(formData) {
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const phone = formData.get('phone')?.trim();
  const clinicName = formData.get('clinic_name')?.trim();
  const specialization = formData.get('specialization')?.trim();
  const doctorCount = formData.get('doctor_count')?.trim();
  const challenge = formData.get('challenge')?.trim();
  const notes = formData.get('notes')?.trim();

  const errors = {};
  if (!name) errors.name = 'Full name is required';
  if (!email) {
    errors.email = 'Email address is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!phone) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s+\-()]{7,20}$/.test(phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  if (!clinicName) errors.clinic_name = 'Clinic / hospital name is required';
  if (!specialization) errors.specialization = 'Please select a specialization';
  if (!doctorCount) errors.doctor_count = 'Please select the number of doctors';

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const supabase = getSupabaseAdminClient();
    const { error } = await supabase.from('demo_requests').insert({
      name,
      email,
      phone,
      clinic_name: clinicName,
      specialization,
      doctor_count: doctorCount,
      challenge: challenge || null,
      notes: notes || null,
      status: 'new',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return {
        success: false,
        errors: {
          _form:
            process.env.NODE_ENV === 'development'
              ? `Database error: ${error.message}`
              : 'Unable to submit your request. Please try again.',
        },
      };
    }

    return { success: true, data: { name, clinicName } };
  } catch (err) {
    console.error('Submission error:', err);
    return { success: false, errors: { _form: 'A network error occurred. Please try again.' } };
  }
}
