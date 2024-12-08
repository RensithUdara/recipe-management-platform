// src/components/AddRecipeForm.js
import React, { useState } from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
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
    <Box sx={{ padding: 3, backgroundColor: "#fff", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add a New Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recipe Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ingredients"
              name="ingredients"
              multiline
              rows={4}
              value={formData.ingredients}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Instructions"
              name="instructions"
              multiline
              rows={4}
              value={formData.instructions}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Servings"
              name="servings"
              type="number"
              value={formData.servings}
              onChange={handleChange}
              inputProps={{ min: 1 }}
            />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Add Recipe
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddRecipeForm;
