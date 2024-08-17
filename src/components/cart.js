import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from '../redux/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Total de plantas: {totalItems}</h2>
      <h3>Costo total: ${totalCost}</h3>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increaseItemQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeItemFromCart(item.id))}>Eliminar</button>
        </div>
      ))}
      <button>Próximamente</button>
      <a href="/products" className="btn-continue">Continuar comprando</a>
    </div>
  );
};

export default Cart;
