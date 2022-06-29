import logo from "./logo.svg";
import "./App.css";
import img from "./assets/react.svg";
import Main from "./components/main/Main";
import { languages } from "./helper/data";
function App() {
  return (
    <div className="App">
      <img src={img} style={{ height: "120px", marginTop: "1rem" }} />
      <Main data={languages} />
    </div>
  );
}

export default App;
