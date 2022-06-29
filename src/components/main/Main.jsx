import Card from "../card/Card";

const Main = (languages) => {
  //   console.log(languages);
  const { data } = languages;
  return (
    <div className="container">
      {data.map((item, index) => {
        const { name, img, options } = item;
        return <Card name={name} img={img} options={options} key={index} />;
      })}
    </div>
  );
};
export default Main;
