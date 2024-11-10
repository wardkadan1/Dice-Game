/* eslint-disable react/prop-types */
import { useState } from "react";
import dice1 from "../../assets/images/dice-1.png";
import dice2 from "../../assets/images/dice-2.png";
import dice3 from "../../assets/images/dice-3.png";
import dice4 from "../../assets/images/dice-4.png";
import dice5 from "../../assets/images/dice-5.png";
import dice6 from "../../assets/images/dice-6.png";

export default function Controls({
  activeplayer,
  playersstate,
  setActiveplayer,
  setPlayersState,
  setDice,
}) {
  const [curr, setcurr] = useState(0);

  const rollDice = () => {
    const newDice = [
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
    ];
    if (newDice[0] !== newDice[1]) {
      let newcurr = newDice[0] + newDice[1] + curr;
      setcurr(newcurr);

      setPlayersState(
        playersstate.map((player, index) =>
          index === activeplayer
            ? { ...player, currScore: newcurr, score: player.score }
            : player
        )
      );
    } else {
      setcurr(0);
      setPlayersState(
        playersstate.map((player, index) =>
          index === activeplayer
            ? { ...player, currScore: 0, score: player.score }
            : player
        )
      );
    }
    for (let i = 0; i < 2; i++) {
      if (newDice[i] === 1) {
        newDice[i] = dice1;
      } else if (newDice[i] === 2) {
        newDice[i] = dice2;
      } else if (newDice[i] === 3) {
        newDice[i] = dice3;
      } else if (newDice[i] === 4) {
        newDice[i] = dice4;
      } else if (newDice[i] === 5) {
        newDice[i] = dice5;
      } else if (newDice[i] === 6) {
        newDice[i] = dice6;
      }
    }

    setDice(newDice);
  };

  const holdScore = () => {
    setPlayersState(
      playersstate.map((player, index) =>
        index === activeplayer
          ? { ...player, currScore: 0, score: player.score + curr }
          : player
      )
    );
    setcurr(0);
    setActiveplayer(activeplayer === 0 ? 1 : 0);
  };

  return (
    <div className="controls">
      <button onClick={rollDice}>🎲 Roll Dice</button>
      <button onClick={holdScore}>💾 Hold</button>
    </div>
  );
}
