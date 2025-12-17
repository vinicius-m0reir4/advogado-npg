import React, { useRef, useEffect } from 'react';
import { Scale, FileText, Landmark, Folder, Users, Briefcase, Banknote, ShieldCheck, ShoppingCart } from 'lucide-react';

const areas = [
  { icon: <Scale />, title: 'Direito Trabalhista', desc: 'Defesa em reclamatórias, acordos, negociações coletivas e consultoria trabalhista.' },
  { icon: <FileText />, title: 'Direito Contratual', desc: 'Elaboração, revisão e negociação de contratos civis e empresariais.' },
  { icon: <Landmark />, title: 'Direito Penal', desc: 'Atuação em defesas, investigação e acompanhamento processual criminal.' },
  { icon: <Folder />, title: 'Direito Cível', desc: 'Ações de responsabilidade civil, família, sucessões e consumidor.' },
  { icon: <Users />, title: 'Direito de Família', desc: 'Separações, guarda, pensão alimentícia e inventários.' },
  { icon: <Briefcase />, title: 'Direito Empresarial', desc: 'Consultoria societária, contratos comerciais e recuperação empresarial.' },
  { icon: <Banknote />, title: 'Direito Tributário', desc: 'Planejamento tributário, contencioso administrativo e judicial.' },
  { icon: <ShieldCheck />, title: 'Direito Previdenciário', desc: 'Concessão e revisão de benefícios, recursos e perícias.' },
  { icon: <ShoppingCart />, title: 'Direito do Consumidor', desc: 'Ações de defesa do consumidor, cobranças indevidas e responsabilidade por produtos.' }
];

export default function PracticeAreas() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="areas" ref={sectionRef} className="areas-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Áreas de Atuação</h2>
          <p className="section-subtitle">
            Especialização em diversas áreas do Direito para atender todas as suas necessidades jurídicas
          </p>
        </div>
        
        <div className="areas-grid">
          {areas.map((a, i) => (
            <div 
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="area-card-wrapper"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="area-card">
                <div className="area-icon-wrapper">
                  <div className="area-icon-bg"></div>
                  <div className="area-icon" aria-hidden="true">
                    {React.cloneElement(a.icon, { size: 24 })}
                  </div>
                </div>
                
                <div className="area-content">
                  <h3 className="area-title">{a.title}</h3>
                  <p className="area-desc">{a.desc}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}