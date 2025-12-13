import React, { useRef, useEffect } from 'react';
import profileFull from '../assets/profile-full.jpg';
import { Award, BookOpen, Users, Target } from 'lucide-react';

export default function About() {
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
    { icon: <Award />, value: '+500', label: 'Casos Concluídos' },
    { icon: <BookOpen />, value: '10', label: 'Anos Experiência' },
    { icon: <Users />, value: '98%', label: 'Satisfação Clientes' },
    { icon: <Target />, value: '+50', label: 'Empresas Atendidas' },
  ];

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
              Advogada com mais de 10 anos de experiência, especializada em Direito Trabalhista e Cível. 
              Minha abordagem combina expertise técnica com atenção personalizada a cada cliente, 
              garantindo soluções jurídicas eficazes e estratégicas.
            </p>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Agendar Consulta
              </a>
              <a href="#areas" className="btn btn-secondary">
                Ver Especialidades
              </a>
            </div>
          </div>
        </div>
      
    </section>
  );
}