import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Elemento root não encontrado');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Service Worker (apenas em produção)
// Verifica se está em produção baseado na URL
const isProduction = !window.location.href.includes('localhost') && 
                     !window.location.href.includes('127.0.0.1');

if ('serviceWorker' in navigator && isProduction) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado:', registration);
      })
      .catch(error => {
        console.log('Service Worker falhou:', error);
      });
  });
}

// Performance monitoring (apenas em desenvolvimento)
const isDevelopment = window.location.href.includes('localhost') || 
                      window.location.href.includes('127.0.0.1');

if (isDevelopment) {
  console.log('Modo desenvolvimento ativo');
}