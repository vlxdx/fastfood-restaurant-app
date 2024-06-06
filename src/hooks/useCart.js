import React from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { cart, setCart } = React.useContext(AppContext);
  const total = cart
    .reduce((sum, item) => sum + item.quantity * item.Preis, 0)
    .toFixed(2);

  return { cart, setCart, total };
};
