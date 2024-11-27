import React from 'react';
import logo from '../assets/Seta.PNG';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Nav() {
    return (
      <nav className="superior">
        <a href="/">
        <img src={logo} alt="Logo" id="logo" />
        </a>
        
        <div id="escrito">Site Empregador de Trabalhadores Autônomos</div>
        
        
<div id="conjunto">
  <section className="search_fil">
    <div id="search">
      <div id="botao_filtro">
        <i className="fa-solid fa-bars"></i>
      </div>
      
      <input
        type="text"
        name="BarraDePesquisa"
        placeholder="Ex: Cursos de programação"
        id="BarraDePesquisa"
      />
      
      <div id="botao_search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  </section>
  
  <div className="botao_bell">
    <i className="fa-solid fa-bell" id="notificacao"></i>
  </div>
  
  <div className="botao_cart">
    <i className="fa-solid fa-cart-shopping"></i>
  </div>
  
  <div className="user">
    <i className="fa-solid fa-user" style={{ color: "#4663E6" }}></i>
  </div>
</div>  
      </nav>
    );
  }
  
  export default Nav;
