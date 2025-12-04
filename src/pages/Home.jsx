import React from 'react';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import About from '../components/About';
import ContactButtons from '../components/ContactButtons';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <About />
      <ContactButtons />
      <Footer />
    </main>
  );
}
