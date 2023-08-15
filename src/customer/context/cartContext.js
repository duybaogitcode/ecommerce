import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(localStorage.getItem('cartCount') || 0);

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
