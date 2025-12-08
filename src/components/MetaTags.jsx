import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaTags() {
  return (
    <Helmet>
      {/* Título dinâmico para diferentes páginas */}
      <title>Dra. Vitória Queiroz - Advogada Trabalhista e Cível | OAB/UF 12345</title>
      
      {/* Meta tags dinâmicas */}
      <meta name="description" content="Advogada especializada em Direito Trabalhista e Cível. Atendimento personalizado com foco em resultados. Consultoria online e presencial em São Paulo." />
      
      {/* Open Graph */}
      <meta property="og:title" content="Dra. Vitória Queiroz - Advogada Trabalhista e Cível" />
      <meta property="og:description" content="Advogada especializada em Direito Trabalhista e Cível. Atendimento personalizado com foco em resultados." />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content="https://www.vitoriaqueirozadv.com.br" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dra. Vitória Queiroz - Advogada Trabalhista e Cível" />
      <meta name="twitter:description" content="Advogada especializada em Direito Trabalhista e Cível" />
      <meta name="twitter:image" content="/twitter-image.jpg" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://www.vitoriaqueirozadv.com.br" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Vitória Queiroz",
          "jobTitle": "Advogada",
          "url": "https://www.vitoriaqueirozadv.com.br",
          "sameAs": [
            "https://www.instagram.com/vitoriaqueirozadv",
            "https://www.linkedin.com/in/vitoriaqueiroz"
          ]
        })}
      </script>
    </Helmet>
  );
}