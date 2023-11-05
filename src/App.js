import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
      <Link to="/first">first</Link>
      <br />
      <Link to="/second">second</Link>
      <br />
      <Link to="/third">third</Link>
    </div>
  );
}

export default App;
