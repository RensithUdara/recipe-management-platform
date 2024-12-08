// src/components/RecipeList.js
import React from "react";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
