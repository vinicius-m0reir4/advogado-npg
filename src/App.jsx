import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import './styles/global.css';
import WhatsAppButton from "./components/WhatsAppButton";
import MetaTags from "./components/MetaTags";

function App() {
  return (
    <HelmetProvider>
      <MetaTags />
      <Home />
      <WhatsAppButton />
    </HelmetProvider>
  );
}

export default App;