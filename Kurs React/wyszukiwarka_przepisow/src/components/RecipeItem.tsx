import { useRecipeContext } from '../Providers/RecipeContext';
import { IRecipe } from '../types/Recipe.type';

interface Props {
  recipe: IRecipe;
}

const RecipeItem: React.FC<Props> = ({ recipe }) => {
  const { removeRecipe, toggleFav } = useRecipeContext();

  return (
    <div className="recipe-item">
      <p>Nazwa: {recipe.name}</p>
      <p>Treść: {recipe.content}</p>
      <button className="remove" onClick={() => removeRecipe(recipe.id)}>
        Usuń
      </button>
      <button className="favorite" onClick={() => toggleFav(recipe.id)}>
        {recipe.fav ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
      </button>
    </div>
  );
};

export default RecipeItem;

