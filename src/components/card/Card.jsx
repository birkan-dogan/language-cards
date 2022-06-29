import "./Card.css";
const Card = ({ name, img, options }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};
export default Card;
