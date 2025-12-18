import React from 'react';
import { Shield, Clock, MapPinned } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">VQ</div>
            <div className="brand-info">
              <div className="brand-name">Vitória Queiroz</div>
              <div className="brand-title">Advocacia Especializada</div>
            </div>
          </div>
          
          <div className="footer-credentials">
            <div className="credential-item">
              <Shield size={16} />
              <span>OAB/CE 56484</span>
            </div>
            <div className="credential-item">
              <Clock size={16} />
              <span>Atendimento: Seg-Sex</span>
            </div>
            <div className="credential-item">
              <MapPinned size={16} />
              <span>Atendimento para todo o Brasil</span>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Vitória Queiroz - Todos os direitos reservados.
          </div>
          
          <div className="footer-links">
            <a href="#privacy" className="footer-link">Política de Privacidade</a>
            <a href="#terms" className="footer-link">Termos de Uso</a>
            <a href="#contact" className="footer-link">Contato</a>
          </div>
        </div>
        
        <div className="footer-disclaimer">
          <p>
            Este site não constitui relação advogado-cliente. Ao enviar mensagens, você concorda 
            com nossa política de privacidade e uso de dados para triagem inicial. As informações 
            aqui contidas são de caráter informativo e não substituem consulta jurídica personalizada.
          </p>
        </div>
      </div>
    </footer>
  );
}