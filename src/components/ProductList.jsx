import Product from './Product.jsx';

//envoi de la prop products histoire de pouvoir render la liste
const ProductList = ({ products }) => (
  <div>
    {products.map((product, index) => (
      <Product key={index} {...product} /> 
    ))}
    {/*spread pour envoyer toutes les données sans code à rallonge*/}
  </div>
);

export default ProductList;


//j'ai essayé useReducer, j'y arrive pas