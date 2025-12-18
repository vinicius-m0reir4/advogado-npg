import React, { useRef, useEffect } from 'react';
import profileFull from '../assets/profile-full.jpg';
import { MapPinned, AlarmClock, } from 'lucide-react';

export default function About({ whatsappRef }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-left');
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: <MapPinned />, value: 'Todo Brasil', label: 'Atendimento em Todo o Brasil' },
    { icon: <AlarmClock />, value: '24h', label: 'Atendimento' },
  ];

  // Função para lidar com o clique no botão "Agendar Consulta"
  const handleAgendarConsulta = (e) => {
    e.preventDefault();
    
    // Se tiver a referência do WhatsAppButton, usa ela
    if (whatsappRef && whatsappRef.current) {
      whatsappRef.current.openChat('Olá! Gostaria de agendar uma consulta.');
    } else {
      // Fallback: abre o WhatsApp diretamente
      const waNumber = '558897264361';
      const waMessage = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
      window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
    }
  };

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src={profileFull} 
                alt="Vitória Queiroz em ambiente profissional" 
                className="about-image"
              />
              <div className="image-frame"></div>
              <div className="image-decoration"></div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="section-header">
              <span className="section-label">Sobre Mim</span>
              <h2 className="section-title">Expertise em Direito com Abordagem Humana</h2>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <div className="achievement-value">{achievement.value}</div>
                    <div className="achievement-label">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="about-text">
              Sou advogada atuante na área jurídica desde 2023, com experiência prática em escritório e acompanhamento completo de processos, desde o atendimento inicial até a condução estratégica das demandas. 
              Ao longo da minha trajetória, construí uma atuação sólida, marcada pelo comprometimento, responsabilidade e busca constante por resultados efetivos.
            </p>

            <p className="about-text">
              Possuo vivência em casos de sucesso, sempre prezando por uma atuação técnica, humana e personalizada, entendendo que cada cliente traz uma história única que merece atenção e seriedade. 
              Meu trabalho é pautado na ética, na clareza das informações e na confiança mútua, oferecendo segurança jurídica e dedicação em cada etapa do processo.
            </p>
            
            <div className="about-cta">
              <button 
                className="btn btn-primary"
                onClick={handleAgendarConsulta}
                aria-label="Agendar consulta via WhatsApp"
              >
                Agendar Consulta
              </button>
              <a href="#areas" className="btn btn-secondary">
                Ver Especialidades
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}