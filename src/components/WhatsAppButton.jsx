import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phone = "5511999999999"; // número fictício, você troca depois

  const message = encodeURIComponent(
    "Olá! Gostaria de obter informações sobre serviços jurídicos."
  );

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="whatsapp-fab">
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
