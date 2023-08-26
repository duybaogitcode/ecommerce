import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSingleLoading: false,
  singleProduct: {},
};

const API = process.env.REACT_APP_LOCAL;

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_SINGLE_LOADING':
      return {
        ...state,
        isSingleLoading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        isError: true,
      };
    case 'SET_API_DATA':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_SINGLE_PRODUCT':
      return {
        ...state,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('product provider');

  // useEffect(() => {
  //   getProducts(API + '/products');
  // }, []);

  const getProducts = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const res = await axios.get(url);
      const product = await res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: product });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  return <ProductContext.Provider value={{ ...state }}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  return useContext(ProductContext);
}
