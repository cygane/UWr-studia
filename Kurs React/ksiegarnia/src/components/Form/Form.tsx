import { getGeneres } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Book } from '../Dialog/Dialog';
import './styles.css';

interface FormProps {
  book: Book;
  onSave: (updatedBook: Book) => void;
}

export default function Form({ book, onSave }: FormProps) {
  const [formState, setFormState] = useState<Book>(book);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const generesQuery = useQuery({ queryKey: ["generes"], queryFn: getGeneres });

  useEffect(() => {
    setFormState(book);
  }, [book]);

  if (!generesQuery.isSuccess) {
    return <div>Loading...</div>;
  }

  function validateForm() {
    const newErrors: { [key: string]: string } = {};
    if (!formState.tytul) {
      newErrors.tytul = "Tytuł jest wymagany";
    }
    if (!formState.autor) {
      newErrors.autor = "Autor jest wymagany";
    }
    if (!formState.rokWydania || isNaN(formState.rokWydania) || formState.rokWydania < 1000 || formState.rokWydania > new Date().getFullYear()) {
      newErrors.rokWydania = "Podaj prawidłowy rok wydania";
    }
    if (!formState.liczbaKopii || isNaN(formState.liczbaKopii) || formState.liczbaKopii < 0) {
      newErrors.liczbaKopii = "Podaj prawidłową liczbę kopii";
    }
    if (!formState.cena || isNaN(formState.cena) || formState.cena < 0) {
      newErrors.cena = "Podaj prawidłową cenę";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-div">
        <label>Tytuł:</label>
        <input
          type="text"
          name="tytul"
          value={formState.tytul}
          onChange={handleChange}
        />
        {errors.tytul && <div style={{ color: 'red' }}>{errors.tytul}</div>}
      </div>
      <div className="input-div">
        <label>Autor:</label>
        <input
          type="text"
          name="autor"
          value={formState.autor}
          onChange={handleChange}
        />
        {errors.autor && <div style={{ color: 'red' }}>{errors.autor}</div>}
      </div>
      <div className="input-div">
        <label>Rok wydania:</label>
        <input
          type="number"
          name="rokWydania"
          value={formState.rokWydania}
          onChange={handleChange}
        />
        {errors.rokWydania && <div style={{ color: 'red' }}>{errors.rokWydania}</div>}
      </div>
      <div className="input-div">
        <label>Liczba kopii:</label>
        <input
          type="number"
          name="liczbaKopii"
          value={formState.liczbaKopii}
          onChange={handleChange}
        />
        {errors.liczbaKopii && <div style={{ color: 'red' }}>{errors.liczbaKopii}</div>}
      </div>
      <div className="input-div">
        <label>Cena:</label>
        <input
          type="number"
          name="cena"
          step="0.01"
          value={formState.cena}
          onChange={handleChange}
        />
        {errors.cena && <div style={{ color: 'red' }}>{errors.cena}</div>}
      </div>
      <div className="input-div">
        <label>Gatunek:</label>
        <select
          name="gatunek"
          value={formState.gatunek}
          onChange={handleChange}
        >
          {generesQuery.data.map((genere) => (
            <option key={genere} value={genere}>
              {genere}
            </option>
          ))}
        </select>
        {errors.gatunek && <div style={{ color: 'red' }}>{errors.gatunek}</div>}
      </div>
      <button className="button-div"type="submit">Save</button>
    </form>
  );
}
