import React, { useState } from 'react';
import logoSmall from '../assets/logo1.png';
import { Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactButtons() {
  const [copied, setCopied] = useState(false);
  const waNumber = '558897264361';
  const waMessage = encodeURIComponent('Olá! Gostaria de uma triagem rápida.');
  const email = 'contato@vitoriaqueiroz.com.br';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    { icon: <Phone />, label: 'Telefone', value: '558897264361', action: 'tel:558897264361' },
    { icon: <Mail />, label: 'E-mail', value: email, action: null, copy: true },
    { icon: <MapPin />, label: 'Escritório', value: 'Av. Paulista, 1000 - São Paulo/SP', action: 'https://maps.google.com' },
  ];

  return (
    <section className="contact-section" aria-label="Contatos e redes sociais">
      <div className="container">
        <div className="contact-card card">
          <div className="contact-header">
            <div className="contact-logo">
              <img src={logoSmall} alt="Logotipo Vitória Queiroz" className="logo-image" />
              <div className="logo-text">
                <div className="logo-name">Vitória Queiroz</div>
                <div className="logo-oab">OAB/UF 12345</div>
              </div>
            </div>
            
            <div className="contact-cta">
              <a 
                href={`https://wa.me/${waNumber}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                <MessageCircle size={20} />
                <span>Fale Direto no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-title">Entre em Contato</h3>
              <p className="contact-subtitle">
                Estamos prontos para atender você. Escolha a forma de contato mais conveniente:
              </p>
              
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon-wrapper">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <div className="info-label">{info.label}</div>
                      <div className="info-value">{info.value}</div>
                    </div>
                    {info.copy ? (
                      <button 
                        className={`copy-btn ${copied ? 'copied' : ''}`}
                        onClick={copyEmail}
                        aria-label="Copiar e-mail"
                      >
                        {copied ? 'Copiado!' : 'Copiar'}
                      </button>
                    ) : info.action ? (
                      <a 
                        href={info.action} 
                        className="action-link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir ${info.label}`}
                      >
                        Abrir
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="social-section">
              <h3 className="social-title">Redes Sociais</h3>
              <p className="social-subtitle">
                Acompanhe meu trabalho e fique por dentro das novidades:
              </p>
              
              <div className="social-grid">
                <a 
                  className="social-card instagram"
                  href="https://www.instagram.com/vitoria.queir0z/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <div className="social-icon-wrapper">
                    <Instagram size={24} />
                  </div>
                  <div className="social-content">
                    <div className="social-name">Instagram</div>
                    <div className="social-handle">@vitoria.queir0z</div>
                  </div>
                  <div className="social-followers">Seguir</div>
                </a>
                
                <a 
                  className="social-card tiktok"
                  href="https://www.tiktok.com/@vitoria.queirozadv"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                >
                  <div className="social-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="social-content">
                    <div className="social-name">TikTok</div>
                    <div className="social-handle">@vitoria.queirozadv</div>
                  </div>
                  <div className="social-followers">Seguir</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}