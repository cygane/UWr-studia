import RecipeProvider from './Providers/RecipeContext';
import RecipeForm from './components/AddRecipeForm';
import Filter from './components/Filter';

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <div className='all'>
        <div className="container">
          <div className="recipe-form-container">
            <RecipeForm />
          </div>
          <div className="filter-container">
            <Filter />
          </div>
        </div>
      </div>
    </RecipeProvider>
  );
};

export default App;
