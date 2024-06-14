import { useState, useRef } from 'react';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  // state pour les inputs
  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const nameRef = useRef(null);

  // update de la state
  const handleChange = ({ target: { name, value } }) => {
    setForm(previous => ({ ...previous, [name]: value }));
  };

  // submit de la form avec spread pour récup tout les paramètres de form
  //doute sur preventDefault, bug sur mon render
  const handleSubmit = (e) => {
    //e.preventDefault();
    addProduct({ ...form, price: parseFloat(form.price) });
    setForm({ name: '', description: '', price: '' });
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          ref={nameRef} 
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <input 
          type="text" 
          name="description" 
          value={form.description} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Prix:</label>
        <input 
          type="number" 
          name="price" 
          value={form.price} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button>Ajouter produit</button>
    </form>
  );
};

export default ProductForm;
