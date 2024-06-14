import { useState, useRef } from 'react';



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <input 
          type="text" 
          name="description" 
          value={form.description} 
          onChange
          required 
        />
      </div>
      <div>
        <label>Prix:</label>
        <input 
          type="number" 
          name="price" 
          value={form.price} 
          onChange
          required 
        />
      </div>
      <button>Ajouter produit</button>
    </form>
  );
};

export default ProductForm;
