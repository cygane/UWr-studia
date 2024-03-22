import { createContext, useContext, useReducer } from 'react';
import { IRecipe } from '../types/Recipe.type';
import { recipeReducer } from './useReducer';

export const RecipeContext = createContext<{
  recipes: IRecipe[];
  addRecipe: (id: number, name: string, content: string) => void;
  removeRecipe: (id: number) => void;
  toggleFav: (id: number) => void;
}>({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
  toggleFav: () => {},
});

export const useRecipeContext = () => useContext(RecipeContext);

const initialrecipes: IRecipe[] = [
  { id: 1, name: 'pizza', content: 'salt, yeast, flour, water, olive oil', fav: false },
  { id: 2, name: 'banana split', content: 'bananas, whipped cream, ice cream, candies', fav: false },
];

const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, dispatch] = useReducer(recipeReducer, initialrecipes);

  function addRecipe( id: number, name: string, content: string) {
    dispatch({ type: "ADD_RECIPE", payload: { id, name, content } });
  }

  function removeRecipe(id: number) {
    dispatch({ type: "REMOVE_RECIPE", payload: { id } });
  }

  function toggleFav(id: number) {
    dispatch({ type: "TOGGLE_FAV", payload: { id }});
  }

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe, toggleFav }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
