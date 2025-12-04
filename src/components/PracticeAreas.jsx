import React from 'react';

const areas = [
  { icon: '⚖️', title: 'Direito Trabalhista', desc: 'Defesa em ações trabalhistas, acordos e audiências.' },
  { icon: '📄', title: 'Consultivo', desc: 'Contratos, análise preventiva e consultoria empresarial.' },
  { icon: '🏛️', title: 'Direito Cível', desc: 'Ações civis, recursos e acompanhamento processual.' },
  { icon: '🛡️', title: 'Mediação & Acordos', desc: 'Soluções práticas antes de litigar.' },
  { icon: '📑', title: 'Contratos', desc: 'Revisão e elaboração contratual com foco em mitigação de riscos.' },
  { icon: '💬', title: 'Atendimento Inicial', desc: 'Triagem objetiva para priorizar seu caso.' }
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="container">
      <h2 style={{marginBottom:12}}>Áreas de atuação</h2>
      <div className="areas">
        {areas.map((a, i) => (
          <div key={i} className="area-card card" role="article" aria-labelledby={`area-${i}`}>
            <div className="area-icon">{a.icon}</div>
            <div>
              <div id={`area-${i}`} className="area-title">{a.title}</div>
              <div className="area-desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
