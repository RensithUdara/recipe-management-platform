// src/services/recipeService.js
const API_URL = "https://api.example.com/recipes"; // Replace with your actual API

export const fetchRecipes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const createRecipe = async (recipeData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipeData),
  });
  const newRecipe = await response.json();
  return newRecipe;
};
