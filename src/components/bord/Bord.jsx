import { players } from "../../data";
import Player from "../player/Player";
import Dice from "../Dice/Dice";
import NewGameButton from "../button/NewGameButton";
import Controls from "../button/Controls";
import dice3 from "../../assets/images/dice-3.png";
import dice5 from "../../assets/images/dice-5.png";
import { useState } from "react";
import Home from "../homePage/Home";

export default function Bord() {
  const [playersState, setPlayersState] = useState(players);
  const [activePlayer, setActivePlayer] = useState(-1);
  const [diceImg, setDice] = useState([dice3, dice5]);
  const [targetScore, setTargetScore] = useState(0);

  if (activePlayer === -1) {
    return (
      <div>
        <Home
          targetscore={targetScore}
          settargetscore={setTargetScore}
          activeplayer={activePlayer}
          setactiveplayer={setActivePlayer}
        />
      </div>
    );
  }

  return (
    <>
      <NewGameButton
        playersstate={playersState}
        setActiveplayer={setActivePlayer}
        setPlayersState={setPlayersState}
        setDice={setDice}
        settargetscore={setTargetScore}
      />
      <div className="game-container">
        <Player
          key={playersState[0].id}
          name={playersState[0].name}
          score={playersState[0].score}
          currScore={playersState[0].currScore}
          activeP={activePlayer === 0}
        />
        <Dice dice1={diceImg[0]} dice2={diceImg[1]} />
        <Player
          key={playersState[1].id}
          name={playersState[1].name}
          score={playersState[1].score}
          currScore={playersState[1].currScore}
          activeP={activePlayer === 1}
        />
      </div>
      <Controls
        activeplayer={activePlayer}
        playersstate={playersState}
        setActiveplayer={setActivePlayer}
        setPlayersState={setPlayersState}
        setDice={setDice}
      />
    </>
  );
}
