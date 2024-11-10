/* eslint-disable react/prop-types */
import Currscore from "./Currscore";

export default function Player({ name, score, currScore, activeP, isWinner }) {
  return (
    <section
      className={`player-card ${activeP ? "active" : ""}  ${
        isWinner ? "winner" : ""
      }`}
    >
      <h2>{name}</h2>
      <h1>{score}</h1>
      <Currscore Current={currScore} />
    </section>
  );
}
