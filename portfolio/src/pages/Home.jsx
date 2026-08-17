import Hero from '../components/home/Hero';
import SelectedWork from '../components/home/SelectedWork';
import Problems from '../components/home/Problems';
import Services from '../components/home/Services';
import WhyMe from '../components/home/WhyMe';
import Process from '../components/home/Process';
import Experience from '../components/home/Experience';
import Pricing from '../components/home/Pricing';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Problems />
      <Services />
      <WhyMe />
      <Process />
      <Experience />
      <Pricing />
      <FinalCTA />
    </>
  );
}