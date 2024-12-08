// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Box, Typography, Paper } from "@mui/material";
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
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <RecipeSearch />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddRecipeForm setRecipes={setRecipes} />
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom mt={5}>
        Recipe List
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <RecipeList recipes={recipes} />
      </Paper>
    </Box>
  );
}

export default Home;
