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
    <div className="add-recipe-form">
      <h2>Dodaj nowy przepis:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nazwa przepisu"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Treść przepisu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Dodaj przepis</button>
        {error && <p className="error">Wypełnij wszystkie pola</p>}
      </form>
    </div>
  );
};

export default AddRecipeForm;
