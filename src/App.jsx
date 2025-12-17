import React, { useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import './styles/global.css';
import WhatsAppButton from "./components/WhatsAppButton";
import MetaTags from "./components/MetaTags";

function App() {
  // Cria uma referência para o WhatsAppButton
  const whatsappRef = useRef(null);

  return (
    <HelmetProvider>
      <MetaTags />
      {/* Passa a referência para o componente Home */}
      <Home whatsappRef={whatsappRef} />
      {/* Passa a referência para o WhatsAppButton */}
      <WhatsAppButton ref={whatsappRef} />
    </HelmetProvider>
  );
}

export default App;