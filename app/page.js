import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import WhyClinicsChooseSection from '../components/WhyClinicsChooseSection';
import ScreenshotsSection from '../components/ScreenshotsSection';
import PatientJourneySection from '../components/PatientJourneySection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <BenefitsSection />
        <WhyClinicsChooseSection />
        <ScreenshotsSection />
        <PatientJourneySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
