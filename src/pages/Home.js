// src/pages/Home.js
import React, { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";
import RecipeSearch from "../components/RecipeSearch";
import AddRecipeForm from "../components/AddRecipeForm";
import { fetchRecipes } from "../services/recipeService";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  return (
    <div>
      <RecipeSearch />
      <AddRecipeForm setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default Home;
