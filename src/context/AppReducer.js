const products = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state, //para que no se borre las propiedades anteriores, por si las hubiera poner siempre
        products: action.payload, //res.data.results
      };
    default:
      return state;
  }
};
export default products;
//AppReducer.js lógica de ejecución en GlobalState orden de ejecución
