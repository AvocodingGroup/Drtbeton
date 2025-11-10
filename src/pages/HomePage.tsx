import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
