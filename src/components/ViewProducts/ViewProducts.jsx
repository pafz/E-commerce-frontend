import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
//EXAMPLE:

const Products = () => {
  const { products, getProducts } = useContext(GlobalContext);
  //se ha montado el componente
  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map(
    (
      product //without {} in an automatic return
    ) => (
      <div key={product.id}>
        <p>{product.name}</p>
      </div>
    )
  );
  return <div>{product}</div>;
};

export default Products;
