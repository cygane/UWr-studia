import { createContext, useContext, useState } from 'react';
import { IRecipe } from '../types/Recipe.type';

interface RecipeContextProps {
  recipes: IRecipe[];
  addRecipe: (name: string, content: string) => void;
  removeRecipe: (id: number) => void;
  toggleFav: (id: number) => void;
}

export const RecipeContext = createContext<RecipeContextProps>({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
  toggleFav: () => {},
});

export const useRecipeContext = () => useContext(RecipeContext);

const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([
    { id: 1, name: 'pizza', content: 'salt, yeast, flour, water, olive oil', fav: false },
    { id: 2, name: 'banana split', content: 'bananas, whipped cream, ice cream, candies', fav: false },
  ]);

  const addRecipe = (name: string, content: string) => {
    const newRecipe: IRecipe = {
      id: Math.random(), 
      name,
      content,
      fav: false,
    };
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  const removeRecipe = (id: number) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  };

  const toggleFav = (id: number) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(recipe =>
        recipe.id === id ? { ...recipe, fav: !recipe.fav } : recipe
      )
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe, toggleFav }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
