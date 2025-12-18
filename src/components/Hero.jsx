import React, { useEffect, useRef } from 'react';
import profile from '../assets/profile-hero.jpg';
import { ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

export default function Hero({ whatsappRef }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Função para lidar com o clique no botão de Consultoria Gratuita
  const handleConsultoriaClick = (e) => {
    e.preventDefault();
    
    // Se tiver a referência do WhatsAppButton, usa ela
    if (whatsappRef && whatsappRef.current) {
      whatsappRef.current.openChat('Olá! Gostaria de uma triagem rápida.');
    } else {
      // Fallback: abre o WhatsApp diretamente (comportamento original)
      const waNumber = '558897264361';
      const waMessage = encodeURIComponent('Olá! Gostaria de uma triagem rápida.');
      window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
    }
  };

  return (
    <section 
      ref={heroRef}
      className="hero-section" 
      aria-label="Apresentação profissional"
    >
      <div className="container">
        <div className="hero-card card">
          <div className="hero-content">
            {/* Badges de credibilidade */}
            <div className="hero-badges">
              <span className="badge">
                <CheckCircle size={16} />
                <span>Atendimento Online</span>
              </span>
              <span className="badge">
                <Star size={16} />
                <span>Especialista</span>
              </span>
            </div>

            <div className="hero-grid">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="hero-gradient">Vitória Queiroz</span>
                  <br />
                  <span className="hero-subtitle">Advogada Trabalhista e Criminal</span>
                </h1>
                
                <p className="hero-description">
                  Transformando casos complexos em resultados concretos. 
                  Atuação estratégica com foco em soluções eficientes e personalizadas 
                  para cada cliente.
                </p>

                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat-number">+500</div>
                    <div className="stat-label">Casos Resolvidos</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">+50</div>
                    <div className="stat-label">Empresas Atendidas</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">24h</div>
                    <div className="stat-label">Atendimento</div>
                  </div>
                </div>

                <div className="hero-cta">
                  <button 
                    className="btn btn-primary btn-lg" 
                    onClick={handleConsultoriaClick}
                    aria-label="Abrir Atendimento no WhatsApp"
                  >
                    <span>Atendimento Qualificado</span>
                    <ArrowRight size={20} />
                  </button>
                  
                  <div className="cta-buttons-grid">
                    <a className="btn btn-secondary" href="#areas">
                      Áreas de Atuação
                    </a>
                    <a className="btn btn-secondary" href="#how-we-work">
                      Como Atuamos
                    </a>
                    <a className="btn btn-secondary" href="#about">
                      Sobre Mim
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img 
                    className="hero-photo" 
                    src={profile} 
                    alt="Vitória Queiroz — Advogada Especialista" 
                  />
                  <div className="hero-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}