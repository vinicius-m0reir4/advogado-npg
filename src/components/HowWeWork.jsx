import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle, ChevronRight, MessageCircle, FileText, Users, Handshake, Headphones, Shield } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <MessageCircle />,
    title: 'Avaliação Personalizada',
    desc: 'Análise inicial do caso via formulário, chamada ou reunião presencial para identificar riscos e soluções.',
    color: '#3b82f6'
  },
  {
    id: 2,
    icon: <FileText />,
    title: 'Elaboração de Peças',
    desc: 'Redação de petições, reclamações, contratos ou notificações conforme a necessidade do cliente.',
    color: '#8b5cf6'
  },
  {
    id: 3,
    icon: <Users />,
    title: 'Acompanhamento Processual',
    desc: 'Monitoramento de prazos, audiências e manifestações; atualizações regulares ao cliente.',
    color: '#10b981'
  },
  {
    id: 4,
    icon: <Handshake />,
    title: 'Negociação e Conciliação',
    desc: 'Atuação em acordos extrajudiciais e audiências de conciliação para solução eficiente do conflito.',
    color: '#f59e0b'
  },
  {
    id: 5,
    icon: <Headphones />,
    title: 'Suporte Contínuo',
    desc: 'Consultoria permanente, esclarecimento de dúvidas e orientações estratégicas durante todo o processo.',
    color: '#ef4444'
  },
  {
    id: 6,
    icon: <Shield />,
    title: 'Soluções Complementares',
    desc: 'Análises preventivas, revisão contratual, recursos e medidas alternativas quando aplicáveis.',
    color: '#06b6d4'
  }
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-right');
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

  return (
    <section id="how-we-work" ref={sectionRef} className="how-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nosso Processo de Atendimento</h2>
          <p className="section-subtitle">
            Um fluxo transparente e organizado que garante excelência em cada etapa do seu caso
          </p>
        </div>

        <div className="how-process">
          <div className="process-timeline">
            <div className="timeline-line">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`timeline-dot ${activeStep === step.id ? 'active' : ''}`}
                  style={{ '--dot-color': step.color }}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="dot-inner">
                    {step.icon}
                  </div></div>
              ))}
            </div>
          </div>

          <div className="process-content">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`process-step-card ${activeStep === step.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <div className="step-header">
                  <div 
                    className="step-icon-wrapper"
                    style={{ background: `${step.color}15` }}
                  >
                    <div className="step-icon" style={{ color: step.color }}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="step-title-wrapper">
                    <span className="step-number">Procedimentos</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <ChevronRight className={`step-arrow ${activeStep === step.id ? 'active' : ''}`} />
                </div>
                
                <div className="step-content">
                  <p className="step-desc">{step.desc}</p>
                  
                  {activeStep === step.id && (
                    <div className="step-details">
                      <div className="detail-item">
                        <CheckCircle size={16} />
                        <span>Análise detalhada do caso</span>
                      </div>
                      <div className="detail-item">
                        <CheckCircle size={16} />
                        <span>Estratégia personalizada</span>
                      </div>
                      <div className="detail-item">
                        <CheckCircle size={16} />
                        <span>Comunicação transparente</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}