/* eslint-disable react/prop-types */
import Currscore from "./Currscore";

export default function Player({ name, score, currScore }) {
  return (
    <section className="player-card">
      <h2>{name}</h2>
      <h1>{score}</h1>
      <Currscore Current={currScore} />
    </section>
  );
}
