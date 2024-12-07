import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Globe } from 'lucide-react';

const RecipeDetail = ({ recipe, onDelete }) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            {recipe.cookTime} mins
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2" />
            {recipe.servings} servings
          </div>
          <div className="flex items-center">
            <Globe size={16} className="mr-2" />
            {recipe.cuisine}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        
        <div className="mt-4">
          <Button 
            variant="destructive" 
            onClick={() => onDelete(recipe.id)}
          >
            Delete Recipe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeDetail;
