import React from 'react';
import profile from '../assets/profile-hero.jpg'; // ajuste se necessário

export default function Hero() {
  const waNumber = '5511999999999'; // placeholder, troca pelo número real
  const waMessage = encodeURIComponent('Olá! Gostaria de uma triagem rápida.');
  return (
    <section className="hero container card" aria-label="Apresentação do advogado">
      <div className="hero-inner">
        <img className="hero-photo" src={profile} alt="Vitória Queiroz — foto profissional" />
        <div>
          <h1>Vitória Queiroz</h1>
          <p className="role">Advogada Trabalhista e Cível</p>
          <p className="oab">OAB/UF 12345</p>

          <div className="cta-row" style={{marginTop:8}}>
            <a className="btn" href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noreferrer">
              Fale no WhatsApp
            </a>
            <a className="btn secondary" href="#areas">Áreas de atuação</a>
          </div>
        </div>
      </div>
    </section>
  );
}
