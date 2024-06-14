import './Product.css';


//Déclaration du component Product avec destructuring comme dans les exos précédents
const Product = ({ name, description, price }) => (
  <div className="produit">
    <h2>{name}</h2>
    <p>{description}</p>
    <p className="thunes">${price.toFixed(2)}</p> {/*toFixed avec 2 ici pour les centimes/cents*/}
    
  </div>
);

export default Product;
