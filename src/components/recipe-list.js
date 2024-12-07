import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>
              {recipe.cuisine} • {recipe.cookTime} mins
            </CardDescription>
            <div className="mt-2">
              <Button 
                variant="outline" 
                onClick={() => onSelectRecipe(recipe)}
              >
                View Details
              </Button>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default RecipeList;
