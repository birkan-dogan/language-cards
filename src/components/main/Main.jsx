import Card from "../card/Card";
import "./Main.css";

const Main = (languages) => {
  //   console.log(languages);
  const { data } = languages;
  return (
    <div className="cards-area-container">
      <h1>Languages</h1>
      <div className="bars"></div>
      <div className="container">
        {data.map((item, index) => {
          const { name, img, options } = item;
          return <Card name={name} img={img} options={options} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Main;
