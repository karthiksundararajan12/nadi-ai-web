import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://nadiai.com'),
  title: 'NADI AI — The AI Operating System for Modern Clinics',
  description: 'Automate appointment booking, clinical documentation, prescription drafting, and patient follow-ups with one intelligent platform.',
  openGraph: {
    title: 'NADI AI — The AI Operating System for Modern Clinics',
    description: 'From appointment booking to AI-generated clinical notes, prescription drafting, and patient monitoring — NADI AI automates the complete patient journey.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NADI AI — The AI Operating System for Modern Clinics',
    description: 'Automate the complete patient journey with AI.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
