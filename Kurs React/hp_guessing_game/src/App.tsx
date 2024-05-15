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

// async function getSpells() {
//   await delay(1000);
//   const response = await fetch(`https://api.potterdb.com/v1/spells`);
//   const data = await response.json();
//   return data;
// }


async function getPotions() {
  await delay(1000);
  const response = await fetch(`https://api.potterdb.com/v1/potions`);
  const data = await response.json();
  return data;
}

function randomNames(potions: Potion[], correct: string, limit: number) {
  const shuffled = potions.slice().sort(() => Math.random() - 0.5);
  const uniqueNames = new Set<string>();

  shuffled.forEach((potion) => {
    if (uniqueNames.size < limit - 1 && potion.name !== correct) {
      uniqueNames.add(potion.name);
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
  const [round, setRound] = useState(0);

  function updateHighscore(score: number) {
    if (score >= highscore) {
      localStorage.setItem("highscore", score.toString());
      setHighscore(score);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getPotions();
      const randomApiPotions = randomEntries(data.data, 25);
      let randomPotions: Potion[] = [];

      randomApiPotions.forEach((potion) => {
        potion = potion.attributes;
        const { name, image, effect, ingredients, wiki } = potion;
        randomPotions.push({
          name,
          image,
          effect,
          ingredients,
          wiki,
        });
      });
      
      setPotions(randomPotions);
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

  const shuffle = randomNames(potions, potions[round].name, 4);
  const correct = potions[round];

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
          updateHighscore(score);
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
    </div>
  );
}

export default App;