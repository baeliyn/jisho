import React from "react";

function Phone(props) {
  return (
    <div className="Home">
      <div style={{ color: "red" }}>-phone-</div>
      <div>{props.phone}</div>
    </div>
  );
}

export default Phone;
