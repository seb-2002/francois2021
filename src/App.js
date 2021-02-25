import "./App.css";
import BoxList from "./components/boxList";
import Image from "./components/image";
import Copyright from "./components/copyright";
import initialData from "./data/data";
import useSiteData from "./hooks/useSiteData";

function App() {
  const { data, setData, boxClickHandler } = useSiteData(initialData);

  return (
    <div className="App">
      <div className="footer">
        {data && <BoxList clickHandler={boxClickHandler} boxes={data.boxes} />}
        {data.imgHome && <Image img={data.imgHome} />}
      </div>
      <Copyright />
    </div>
  );
}

export default App;
