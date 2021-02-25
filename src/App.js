import "./App.css";
import BoxList from "./components/boxList";
import Copyright from "./components/copyright";
import initialData from "./data/data";
import useSiteData from "./hooks/useSiteData";

function App() {
  const { data, setData, boxClickHandler } = useSiteData(initialData);

  return (
    <div className="App">
      {data && <BoxList clickHandler={boxClickHandler} boxes={data.boxes} />}
      <Copyright />
    </div>
  );
}

export default App;
