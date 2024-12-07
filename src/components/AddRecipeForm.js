// src/components/AddRecipeForm.js
import React, { useState } from "react";
import { createRecipe } from "../services/recipeService";

function AddRecipeForm({ setRecipes }) {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    servings: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(formData).then((newRecipe) => {
      setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Recipe Title"
        required
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        required
      />
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        required
      />
      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
      />
      <input
        type="number"
        name="servings"
        value={formData.servings}
        onChange={handleChange}
        min="1"
        placeholder="Servings"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
