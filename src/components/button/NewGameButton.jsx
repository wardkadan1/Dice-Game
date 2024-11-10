/* eslint-disable react/prop-types */
import dice3 from "../../assets/images/dice-3.png";
import dice5 from "../../assets/images/dice-5.png";

export default function NewGameButton({
  playersstate,
  setActiveplayer,
  setPlayersState,
  setDice,
  settargetscore,
}) {
  const newGame = () => {
    setPlayersState(
      playersstate.map((player) => ({
        ...player,
        currScore: 0,
        score: 0,
      }))
    );
    setActiveplayer(-1);
    settargetscore(0);
    setDice([dice3, dice5]);
  };
  return (
    <div className="new-game-button">
      <button onClick={newGame}>🔄 New Game</button>
    </div>
  );
}
