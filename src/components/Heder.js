import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header>
      <nav>
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carro de la compra</Link>
        <div className="cart-icon">
          <span>{totalItems}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
