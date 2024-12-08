// src/components/MealPlanner.js
import React from "react";
import { Typography, List, ListItem, Card, CardContent } from "@mui/material";

function MealPlanner() {
  const mealPlan = [
    { day: "Monday", recipe: "Chicken Soup" },
    { day: "Tuesday", recipe: "Vegetable Stir Fry" },
    // More days...
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Meal Planner
      </Typography>
      <Card sx={{ padding: 2 }}>
        <List>
          {mealPlan.map((meal, index) => (
            <ListItem key={index}>
              {meal.day}: {meal.recipe}
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}

export default MealPlanner;
