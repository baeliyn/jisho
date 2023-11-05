import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";

import "./server";
import React from "react";
import Home from "./components/home";

function App() {
  const [基本, 基本的な] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/jishos")
      .then((res) => res.json())
      .then((data) => {
        基本的な(data.jishos);
      });
  }, []);

  const array = 基本.map((jisho) => {
    return <div key={jisho.key}>{jisho.name}</div>;
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home array={array} />} />
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
