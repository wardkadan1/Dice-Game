/* eslint-disable react/prop-types */

export default function Home({
  targetscore,
  settargetscore,
  activeplayer,
  setactiveplayer,
}) {
  const startGame = () => {
    if (targetscore > 0) {
      activeplayer = 0;
      setactiveplayer(activeplayer);
    }
  };
  const handleInputChange = (e) => {
    settargetscore(Number(e.target.value));
  };

  return (
    <div className="home-box">
      <section className="home">
        <h3>Game Instructions:</h3>
        <p>
          In your turn - roll the dice (at least once) and accumulate the result
          in current
        </p>
        <p>
          You can roll again or click Hold to save the points from Current and
          end the turn.
        </p>
        <p>
          Note! If you get 6-6 - you will lose all points from current and the
          turn will go to your opponent.
        </p>
        <p>
          If you managed to reach exactly the target score - you win! If you
          passed it - you lose ...
        </p>
      </section>
      <section>
        <input type="number" onChange={handleInputChange} />
        <button onClick={startGame}>Start Game</button>
      </section>
    </div>
  );
}
