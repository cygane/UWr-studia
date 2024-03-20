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
    <div>
      <input
        type="text"
        placeholder="Filtruj po nazwie lub opisie"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="show-button"
        onClick={() => setFilterFav(!filterFav)}
      >
        {filterFav ? "Show All Recipes" : "Show Only Fav Recipes"}
      </button>
      <ul>
        {filteredRecipes.filter((recipe) => (filterFav ? recipe.fav : true))
          .map(recipe => (
          <li key={recipe.id}>
            <RecipeItem recipe={recipe}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesFilter;


