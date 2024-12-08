// src/components/RecipeCard.js
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 3 }}>
      <CardMedia
        component="img"
        alt={recipe.title}
        height="140"
        image="https://via.placeholder.com/345x140" // Replace with actual image URL
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cuisine: {recipe.cuisine}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Servings: {recipe.servings}
        </Typography>
      </CardContent>
      <Button component={Link} to={`/recipe/${recipe.id}`} size="small">
        View Details
      </Button>
    </Card>
  );
}

export default RecipeCard;
