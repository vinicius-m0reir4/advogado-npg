import React, { useEffect, useRef } from 'react';
import profile from '../assets/profile-hero.jpg';
import { ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const waNumber = '5511999999999';
  const waMessage = encodeURIComponent('Olá! Gostaria de uma triagem rápida.');

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
                  <span className="hero-subtitle">Advogada Trabalhista e Cível</span>
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
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Satisfação</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">24h</div>
                    <div className="stat-label">Resposta</div>
                  </div>
                </div>

                <div className="hero-cta">
                  <a 
                    className="btn btn-primary btn-lg" 
                    href={`https://wa.me/${waNumber}?text=${waMessage}`}
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <span>Consultoria Gratuita</span>
                    <ArrowRight size={20} />
                  </a>
                  
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