import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const RecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      instructions: instructions.split('\n'),
      cookTime: parseInt(cookTime),
      servings: parseInt(servings),
      cuisine
    };
    onAddRecipe(newRecipe);
    
    // Reset form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setCookTime('');
    setServings('');
    setCuisine('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <Textarea
        placeholder="Instructions (one per line)"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <div className="grid grid-cols-3 gap-4">
        <Input
          type="number"
          placeholder="Cook Time (mins)"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          required
        />
        <Input
          placeholder="Cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">Add Recipe</Button>
    </form>
  );
};

export default RecipeForm;
