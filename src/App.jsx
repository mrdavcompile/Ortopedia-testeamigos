import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import TransformSection from './components/TransformSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Interdisciplinary from './components/Interdisciplinary.jsx';
import LabPreview from './components/LabPreview.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Markowitz from './components/Markowitz.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <TransformSection />
        <HowItWorks />
        <Interdisciplinary />
        <LabPreview />
        <BeforeAfter />
        <Markowitz />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
