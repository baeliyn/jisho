import React from "react";

function Home(props) {
  return (
    <div className="Home">
      <div style={{ color: "red" }}>-phone-</div>
      <div>{props.phone}</div>
      <div style={{ color: "red" }}>-dict-</div>
      <div>{props.dict}</div>
    </div>
  );
}

export default Home;
