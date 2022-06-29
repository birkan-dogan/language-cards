import { useState } from "react";
import "./Card.css";
const Card = ({ name, img, options }) => {
  const [info, setInfo] = useState(true);
  const handleDiv = () => {
    setInfo(!info);
  };

  return (
    <div className="card" onClick={handleDiv}>
      {info ? (
        <div>
          <img src={img} alt={name} />
          <p>{name}</p>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default Card;
