/* eslint-disable react/prop-types */

export default function Dice({ dice1, dice2 }) {
  return (
    <div className="dice">
      <img src={dice1} alt="" className="die" />
      <img src={dice2} alt="" className="die" />
    </div>
  );
}
