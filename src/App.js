import "./App.css";
import BoxList from "./components/boxList";
import initialData from "./data/data";
import useSiteData from "./hooks/useSiteData";

function App() {
  const { data, setData, boxClickHandler } = useSiteData(initialData);

  return (
    <div className="App">
      {data && <BoxList clickHandler={boxClickHandler} boxes={data.boxes} />}
    </div>
  );
}

export default App;
