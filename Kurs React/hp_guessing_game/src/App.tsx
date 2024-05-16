import "./App.css";
import { useEffect, useState } from "react";
import { delay, randomEntries } from "./utils";
import QTile from './components/QTile/QTile'
import Score from "./components/Score.tsx/Score";

interface Potion {
  name: string;
  image: string;
  effect: string;
  ingredients: string;
  wiki: string;
}

interface Spell {
  name: string;
  image: string;
  effect: string;
  ingredients: string;
  wiki: string;
}

async function getSpells() {
  await delay(1000);
  const response = await fetch(`https://api.potterdb.com/v1/spells`);
  const data = await response.json();
  return data;
}


async function getPotions() {
  await delay(1000);
  const response = await fetch(`https://api.potterdb.com/v1/potions`);
  const data = await response.json();
  return data;
}

function randomNames(items: (Potion | Spell)[], correct: string, limit: number) {
  const shuffled = items.slice().sort(() => Math.random() - 0.5);
  const uniqueNames = new Set<string>();

  shuffled.forEach((item) => {
    if (uniqueNames.size < limit - 1 && item.name !== correct) {
      uniqueNames.add(item.name);
    }
  });

  uniqueNames.add(correct);
  
  return Array.from(uniqueNames).sort(() => Math.random() - 0.5);
}

function App() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(3);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(Number(localStorage.getItem("highscore")) || 0);
  const [gameStarted, startGame] = useState(false);
  const [potions, setPotions] = useState<Potion[]>([]);
  const [spells, setSpells] = useState<Spell[]>([]);
  const [round, setRound] = useState(0);
  const [categorySelected, setCategorySelected] = useState<null | 'potions' | 'spells'>(null);

  function updateHighscore(score: number) {
    if (score >= highscore) {
      localStorage.setItem("highscore", score.toString());
      setHighscore(score);
    }
  };

  const handleCategorySelection = (category: 'potions' | 'spells') => {
    setCategorySelected(category);
    setScore(0);
    setRound(0);
    setCurrent(3); 
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const potionsData = await getPotions();
      const spellsData = await getSpells();

      const randomPotions = randomEntries(potionsData.data, 25).map((potion: any) => ({
        name: potion.attributes.name,
        image: potion.attributes.image,
        effect: potion.attributes.effect,
        ingredients: potion.attributes.ingredients,
        wiki: potion.attributes.wiki,
      }));

      const randomSpells = randomEntries(spellsData.data, 25).map((spell: any) => ({
        name: spell.attributes.name,
        image: spell.attributes.image,
        effect: spell.attributes.effect,
        ingredients: spell.attributes.ingredients,
        wiki: spell.attributes.wiki,
      }));
      
      setPotions(randomPotions);
      setSpells(randomSpells);
      setLoading(false);
    }

    fetchData();
  }, []
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!gameStarted) {
    return <button onClick={() => {startGame(true)}}>Start a game</button>;
  }

  if (!categorySelected) {
    return (
      <div>
        <button onClick={() => handleCategorySelection('potions')}>Potions</button>
        <button onClick={() => handleCategorySelection('spells')}>Spells</button>
      </div>
    );
  }

  const currentData = categorySelected === 'potions' ? potions : spells;
  const correct = currentData[round % currentData.length];
  const shuffle = randomNames(currentData, correct.name, 4);

  return (
    <div>
    <QTile 
      image={correct.image}
      effect={correct.effect}
      ingredients={correct.ingredients}
    />
    {shuffle.map((name) => 
    <button 
      key={name} 
      onClick={() => 
        {if(name == correct.name){
        setCurrent(1);
        setScore(score + 1);
        setRound(round + 1);
        updateHighscore(score + 1);
        }
        else {
          setCurrent(0);
          setScore(0);
        } }}
    >
      {name}
    </button>)}
    {current === 0 && <p className="error-message">Zła odpowiedź ;(</p>}
    <Score score={score} highscore={highscore}/>
    {current !== 0 &&
      <div>
          <button onClick={() => setCategorySelected(null)}>Zmień kategorię</button>
      </div> 
    }
  </div>
  );
}

export default App;