import React from "react";

function Dictionary(props) {
  return (
    <div className="Home">
      <div style={{ color: "red" }}>-dict-</div>
      <div>{props.dict}</div>
    </div>
  );
}

export default Dictionary;
