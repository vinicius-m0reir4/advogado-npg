import React from 'react';
import profileFull from '../assets/profile-full.jpg';

export default function About() {
  return (
    <section className="container about">
      <div className="card" style={{flex:1}}>
        <h3>Sobre</h3>
        <p className="bio">
          Advogada com abordagem prática e foco em resultados. Atendimento personalizado, priorizando clareza e eficácia.
          Experiência em processos judiciais e consultoria preventiva.
        </p>
        <p style={{marginTop:12, color:'rgba(17,24,39,0.6)'}}>Atendimento remoto e presencial. Horário: Segunda–Sexta 09:00–18:00.</p>
      </div>

      <div style={{width:220}}>
        <img src={profileFull} alt="Foto profissional completa" style={{width:'100%',borderRadius:10}} />
      </div>
    </section>
  );
}
