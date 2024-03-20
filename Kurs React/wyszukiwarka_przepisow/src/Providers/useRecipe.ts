import { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

export default function useRecipe() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
}
