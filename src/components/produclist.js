import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 30, image: '/images/fiddle-leaf-fig.jpg' },
  // Añade otras plantas aquí
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Añadir a la cesta</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
