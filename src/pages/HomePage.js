import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => (
  <div className="home">
    <Header />
    <div className="hero">
      <h1>Plant Haven</h1>
      <p>Somos la mejor tienda en línea para plantas de interior, ofreciendo una amplia variedad de opciones únicas para embellecer tu hogar.</p>
      <Link to="/products" className="btn-start">Comenzar</Link>
    </div>
  </div>
);

export default HomePage;
