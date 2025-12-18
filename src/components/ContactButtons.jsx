import React, { useState } from 'react';
import logoSmall from '../assets/logo1.png';
import { Instagram, MessageCircle, Mail, Phone, MapPin, } from 'lucide-react';

export default function ContactButtons({ whatsappRef }) {
  const [copied, setCopied] = useState(false);
  const waNumber = '558897264361';
  const waMessage = 'Olá! Gostaria de obter informações sobre serviços jurídicos.';
  const email = 'Vitoriaqueirozadv0@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 15000);
  };

  const contactInfo = [
    { icon: <Phone />, label: 'Telefone', value: '558897264361', action: 'tel:558897264361' },
    { icon: <Mail />, label: 'E-mail', value: email, action: null, copy: true },
    { icon: <MapPin />, label: 'Escritório', value: 'Rua Raimundo Machado da Silva 60, Triangulo, Torre Trade, 8 Andar - Sala 809', action: 'https://www.google.com/maps/place/Unique+Torre+Trade/@-7.2239109,-39.3252929,17z/data=!4m10!1m2!2m1!1sRua+Raimundo+machado+da+silva,+triangulo,+nro+60,+torre+trade,+8+andar+-+sala+809!3m6!1s0x7a183591338c5b3:0x3995b80a533db3b6!8m2!3d-7.2236369!4d-39.3229278!15sClFSdWEgUmFpbXVuZG8gbWFjaGFkbyBkYSBzaWx2YSwgdHJpYW5ndWxvLCBucm8gNjAsIHRvcnJlIHRyYWRlLCA4IGFuZGFyIC0gc2FsYSA4MDlaTSJLcnVhIHJhaW11bmRvIG1hY2hhZG8gZGEgc2lsdmEgdHJpYW5ndWxvIG5ybyA2MCB0b3JyZSB0cmFkZSA4IGFuZGFyIHNhbGEgODA5kgEQY29ycG9yYXRlX29mZmljZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydGtja3hVVW1wa01VcHlVbXBLTWxKVk5YZFZiV1JyWkZaT1YxVXlZeEFC4AEA-gEECAAQDg!16s%2Fg%2F11spj4q5z4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
  ];

  // Função para lidar com o clique no botão "Fale Direto no WhatsApp"
  const handleFaleDireto = (e) => {
    e.preventDefault();
    
    // Se tiver a referência do WhatsAppButton, usa ela
    if (whatsappRef && whatsappRef.current) {
      whatsappRef.current.openChat(waMessage);
    } else {
      // Fallback: abre o WhatsApp diretamente
      const encodedMessage = encodeURIComponent(waMessage);
      window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <section className="contact-section" aria-label="Contatos e redes sociais">
      <div className="container">
        <div className="contact-card card">
          <div className="contact-header">
            <div className="contact-logo">
              <img src={logoSmall} alt="Logotipo Vitória Queiroz" className="logo-image" />
              <div className="logo-text">
                <div className="logo-name">Vitória Queiroz</div>
                <div className="logo-oab">OAB/CE 56484</div>
              </div>
            </div>
            
            <div className="contact-cta">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleFaleDireto}
                aria-label="Falar direto no WhatsApp"
              >
                <MessageCircle size={20} />
                <span>Fale Direto no WhatsApp</span>
              </button>
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