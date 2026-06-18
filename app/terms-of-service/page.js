import TermsOfServicePage from '../../components/terms/TermsOfServicePage';

export const metadata = {
  title: 'Terms of Service | NADI AI',
  description:
    'Read the Terms of Service governing use of NADI AI, including medical disclaimers, acceptable use, AI-generated content, and liability limitations.',
  openGraph: {
    title: 'Terms of Service | NADI AI',
    description: 'The rules and conditions governing the use of NADI AI.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServiceRoute() {
  return <TermsOfServicePage />;
}
