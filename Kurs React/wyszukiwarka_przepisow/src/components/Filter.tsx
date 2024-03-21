import { useState } from 'react';
import { useRecipeContext } from '../Providers/RecipeContext';
import RecipeItem from './RecipeItem';

const FavoritesFilter: React.FC = () => {
  const { recipes } = useRecipeContext();
  const [keyword, setKeyword] = useState('');
  const [filterFav, setFilterFav] = useState(false);
  
  const filteredRecipes = recipes.filter(recipe =>
    (recipe.name.toLowerCase().includes(keyword.toLowerCase()) ||
    recipe.content.toLowerCase().includes(keyword.toLowerCase()))
  );

  return (
    <div className="recipe-list-container">
      <div className="filter-input-container">
        <input
          className="filter-input"
          type="text"
          placeholder="Filter by name or content"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <button
        className="show-button"
        onClick={() => setFilterFav(!filterFav)}
      >
        {filterFav ? "Show All Recipes" : "Show Only Favorite Recipes"}
      </button>
      <ul>
        {filteredRecipes.filter((recipe) => (filterFav ? recipe.fav : true))
          .map(recipe => (
          <div key={recipe.id}>
            <RecipeItem recipe={recipe}/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesFilter;


