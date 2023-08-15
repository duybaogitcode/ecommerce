import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const userDataString = localStorage.getItem('userLogin');

  const [user, setUser] = useState(userDataString ? JSON.parse(userDataString) : null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userLogin', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userLogin');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
