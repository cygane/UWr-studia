import { IRecipe } from "../types/Recipe.type";

type RecipeAction =
  | {
      type: "ADD_RECIPE";
      payload: {
        id: number;
        name: string;
        content: string;
      };
  }
  | {
    type: "TOGGLE_FAV";
    payload: {
      id: number;
    };
  }
  | {
      type: "REMOVE_RECIPE";
      payload: {
        id: number;
      };
  };

export const recipeReducer = (state: IRecipe[], action: RecipeAction) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        {
          id: Math.random(),
          name: action.payload.name,
          content: action.payload.content,
          fav: false,
        },
      ];
    case 'REMOVE_RECIPE':
      return state.filter((recipe) => recipe.id !== action.payload.id);
    case 'TOGGLE_FAV':
      return state.map(recipe => recipe.id === action.payload.id ? { ...recipe, fav: !recipe.fav } : recipe);
    default:
      return state;
  }
};