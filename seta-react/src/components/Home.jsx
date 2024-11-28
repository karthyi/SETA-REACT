import React, { useState } from 'react';
import Nav from './Nav';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css'

// Mock data para exemplo (será substituído pelo banco de dados)
const mockServices = {
  popular: [
    { id: 1, name: 'Desenvolvimento Web', description: 'Criação de sites profissionais', price: 'R$ 1500,00', image: 'https://via.placeholder.com/200x150' },
    { id: 2, name: 'Design Gráfico', description: 'Criação de logos e identidade visual', price: 'R$ 800,00', image: 'https://via.placeholder.com/200x150' },
    { id: 3, name: 'Marketing Digital', description: 'Gestão de redes sociais', price: 'R$ 1200,00', image: 'https://via.placeholder.com/200x150' },
    { id: 4, name: 'Consultoria SEO', description: 'Otimização para motores de busca', price: 'R$ 900,00', image: 'https://via.placeholder.com/200x150' },
    { id: 5, name: 'Redação de Conteúdo', description: 'Artigos e textos otimizados', price: 'R$ 500,00', image: 'https://via.placeholder.com/200x150' },
  ],
  recommended: [
    { id: 6, name: 'Aulas de Programação', description: 'Aprenda a programar do zero', price: 'R$ 100,00/hora', image: 'https://via.placeholder.com/200x150' },
    { id: 7, name: 'Consultoria Financeira', description: 'Planejamento financeiro pessoal', price: 'R$ 300,00', image: 'https://via.placeholder.com/200x150' },
    { id: 8, name: 'Tradução', description: 'Tradução de documentos', price: 'R$ 50,00/página', image: 'https://via.placeholder.com/200x150' },
    { id: 9, name: 'Edição de Vídeo', description: 'Edição profissional de vídeos', price: 'R$ 800,00', image: 'https://via.placeholder.com/200x150' },
    { id: 10, name: 'Fotografia', description: 'Ensaios fotográficos', price: 'R$ 600,00', image: 'https://via.placeholder.com/200x150' },
  ]
};

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="price">{service.price}</div>
    </div>
  );
}

function ServiceSection({ title, services }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.querySelector(`.service-container-${title.replace(/\s+/g, '-')}`);
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(container.scrollLeft - scrollAmount);
    } else {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="service-section">
      <h2>{title}</h2>
      <div className="service-scroll">
        <button 
          className="scroll-button left"
          onClick={() => scroll('left')}
          style={{ visibility: scrollPosition > 0 ? 'visible' : 'hidden' }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className={`service-container service-container-${title.replace(/\s+/g, '-')}`}>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <button 
          className="scroll-button right"
          onClick={() => scroll('right')}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <Nav />
      <main>
        {/* Banner para anúncios */}
        <div className="banner">
          <div className="banner-content">
            <h1>Encontre os melhores serviços</h1>
            <p>Profissionais qualificados para todas as suas necessidades</p>
          </div>
        </div>

        {/* Seções de serviços */}
        <div className="services-container">
          <ServiceSection title="Serviços Populares" services={mockServices.popular} />
          <ServiceSection title="Recomendados para Você" services={mockServices.recommended} />
        </div>
      </main>
    </div>
  );
}

export default Home;
