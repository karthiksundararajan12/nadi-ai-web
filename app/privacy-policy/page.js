import PrivacyPolicyPage from '../../components/privacy/PrivacyPolicyPage';

export const metadata = {
  title: 'Privacy Policy | NADI AI',
  description:
    'Learn how NADI AI collects, uses, protects, and retains information for clinics, healthcare providers, and platform users.',
  openGraph: {
    title: 'Privacy Policy | NADI AI',
    description:
      'How NADI AI collects, uses, and protects your information.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage />;
}
