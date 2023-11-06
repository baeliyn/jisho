import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dictionary from "./components/dictionary";
import Phone from "./components/phone";

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

  const phoneArray = 基本.map((jisho) => {
    if (jisho.type === "phone") {
      return (
        <div key={jisho.key}>
          {jisho.word} - {jisho.meaning} - {jisho.pronunciation}
        </div>
      );
    } else {
      return <></>;
    }
  });

  const dictArray = 基本.map((jisho) => {
    if (jisho.type === "dict") {
      return (
        <div key={jisho.key}>
          {jisho.word} - {jisho.meaning} - {jisho.pronunciation}
        </div>
      );
    } else {
      return <></>;
    }
  });

  return (
    <div className="App">
      <Link to="/" className="link">
        home
      </Link>
      <br />
      <Link to="/dictionary" className="link">
        dictionary
      </Link>
      <br />
      <Link to="/phone" className="link">
        phone
      </Link>
      <br />
      <Routes>
        <Route
          path="/"
          element={<Home phone={phoneArray} dict={dictArray} />}
        />
        <Route path="/dictionary" element={<Dictionary dict={dictArray} />} />
        <Route path="/phone" element={<Phone phone={phoneArray} />} />
      </Routes>
    </div>
  );
}

export default App;
