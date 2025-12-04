import React from 'react';
import logoSmall from '../assets/logo1.png';

export default function ContactButtons() {
  const waNumber = '5511999999999';
  const waMessage = encodeURIComponent('Olá! Gostaria de uma triagem rápida.');
  return (
    <section className="container card" aria-label="Contatos e redes sociais">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <img src={logoSmall} alt="Logotipo" style={{height:48}} />
          <div>
            <div style={{fontWeight:700}}>Vitória Queiroz</div>
            <div style={{fontSize:13, color:'rgba(17,24,39,0.6)'}}>OAB/UF 12345</div>
          </div>
        </div>

        <div className="socials">
          <a className="social-btn" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
          <a className="social-btn" href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">TikTok</a>
          <a className="social-btn" href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
