import './styles.css'

interface IScore {
  score: number;
  highscore: number;
}

export default function Score({ score, highscore }: IScore) {
  return (
    <div className="score">
      Current score: {score}
      Highscore: {highscore}
    </div>
  );
};
