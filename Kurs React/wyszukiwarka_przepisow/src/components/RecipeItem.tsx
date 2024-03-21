import { useRecipeContext } from '../Providers/RecipeContext';
import { IRecipe } from '../types/Recipe.type';
import starIcon from '../assets/star-svgrepo-com.svg'

interface Props {
  recipe: IRecipe;
}

const RecipeItem: React.FC<Props> = ({ recipe }) => {
  const { removeRecipe, toggleFav } = useRecipeContext();

  return (
    <div className="recipe-item">
      <div className="recipe-name">
        {!recipe.fav && <div className="star-icon">
          <img src={starIcon} alt="Star Icon" style={{ width: '30px', height: '30px' }} />
          </div>}
        <p>{recipe.name}</p>
      </div>
      <p>{recipe.content}</p>
      <div className="button-container">
        <span onClick={() => removeRecipe(recipe.id)}
        className="material-symbols-outlined">
          delete
        </span>
        <span onClick={() => toggleFav(recipe.id)}
        className="material-symbols-outlined">
          {recipe.fav ? 'heart_plus' : 'heart_minus'}
        </span> 
      </div>
    </div>
  );
};

export default RecipeItem;

