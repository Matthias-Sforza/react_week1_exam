import { useState, useEffect } from 'react';
import ProductList from './components/ProductList.jsx';
import ProductForm from './components/ProductForm.jsx';
import './App.css';


const App = () => {
  // chargement de la liste de produit et sauvegarde
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  //localstorage pour les produits
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  //ajout d'un produit
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="app">
      <h1 className="titre">Liste de produits du marché</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
