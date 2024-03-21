import { useState } from 'react';
import { useRecipeContext } from '../Providers/RecipeContext';

const AddRecipeForm: React.FC = () => {
  const { addRecipe } = useRecipeContext();
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === '' || content.trim() === '') {
      setError(true);
      return;
    }
    addRecipe(name, content);
    setName('');
    setContent('');
    setError(false);
  };

  return (
    <div className="add-recipee">
      <div className="add-form">
        <div className="header2">
          <h2>Dodaj nowy przepis:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="input-add-recipe"
            type="text"
            placeholder="Recipe name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="textarea-add-recipe"
            placeholder="Recipe content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="add-button"type="submit">Add recipe</button>
          {error && <p className="error">Wypełnij wszystkie pola</p>}
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
