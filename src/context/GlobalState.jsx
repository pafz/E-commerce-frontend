import { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState); //creating Context

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //state es el Obj global con o sin modificar

  const getProducts = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/products/getAllProductsAndCategories'
      );
      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//GlobalState.jsx orden de ejecución en AppReducer.js lógica de ejecución
