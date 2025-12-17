import React from 'react';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import About from '../components/About';
import ContactButtons from '../components/ContactButtons';
import Footer from '../components/Footer';
import HowWeWork from '../components/HowWeWork';

export default function Home({ whatsappRef }) {
  return (
    <main>
      {/* Passa a referência do WhatsApp para os componentes que têm botões de WhatsApp */}
      <Hero whatsappRef={whatsappRef} />
      <PracticeAreas />
      <About whatsappRef={whatsappRef} />
      <HowWeWork />
      <ContactButtons whatsappRef={whatsappRef} />
      <Footer />
    </main>
  );
}