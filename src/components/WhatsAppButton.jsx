import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const phone = "5511999999999";
  const message = encodeURIComponent(
    "Olá! Gostaria de obter informações sobre serviços jurídicos."
  );
  const link = `https://wa.me/${phone}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Esconder ao descer, mostrar ao subir
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const quickMessages = [
    { text: "Preciso de uma consulta", message: "Olá! Gostaria de agendar uma consulta." },
    { text: "Orçamento para processo", message: "Olá! Gostaria de um orçamento para um processo." },
    { text: "Dúvida jurídica", message: "Olá! Tenho uma dúvida jurídica." },
    { text: "Segunda opinião", message: "Olá! Gostaria de uma segunda opinião sobre meu caso." }
  ];

  const handleQuickMessage = (msg) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank');
  };

  return (
    <>
      {/* Botão Principal Flutuante */}
      <div 
        className={`whatsapp-fab ${isVisible ? 'visible' : 'hidden'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat do WhatsApp"
      >
        <div className="whatsapp-icon">
          <MessageCircle size={24} />
        </div>
        {isOpen && (
          <div className="whatsapp-pulse"></div>
        )}
      </div>

      {/* Chat Expansível */}
      <div className={`whatsapp-chat ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-icon">
              <MessageCircle size={20} />
            </div>
            <div className="chat-info">
              <div className="chat-name">WhatsApp</div>
              <div className="chat-status">Online • Resposta rápida</div>
            </div>
          </div>
          <button 
            className="chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar chat"
          >
            <X size={20} />
          </button>
        </div>

        <div className="chat-content">
          <div className="welcome-message">
            <div className="message-avatar">VQ</div>
            <div className="message-bubble">
              <div className="message-sender">Vitória Queiroz</div>
              <div className="message-text">
                Olá! Sou a Vitória Queiroz. Como posso ajudar você hoje?
              </div>
              <div className="message-time">Agora mesmo</div>
            </div>
          </div>

          <div className="quick-messages">
            <div className="quick-title">Mensagens rápidas:</div>
            <div className="quick-buttons">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  className="quick-btn"
                  onClick={() => handleQuickMessage(item.message)}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-actions">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              <MessageCircle size={20} />
              <span>Abrir Conversa no WhatsApp</span>
            </a>
            
            <div className="chat-info">
              <div className="info-item">
                <div className="info-icon">⏱️</div>
                <div className="info-text">Resposta em até 24h</div>
              </div>
              <div className="info-item">
                <div className="info-icon">🔒</div>
                <div className="info-text">Conversa privada</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="whatsapp-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;