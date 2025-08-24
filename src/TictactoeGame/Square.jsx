 import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        cursor: "pointer"
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
