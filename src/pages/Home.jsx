import React from 'react';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import About from '../components/About';
import ContactButtons from '../components/ContactButtons';
import Footer from '../components/Footer';
import HowWeWork from '../components/HowWeWork';


export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <About />
      <HowWeWork />
      <ContactButtons />
      <Footer />
    </main>
  );
}
