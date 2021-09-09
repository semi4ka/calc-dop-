import React from "react";

const Operators = ({ handleOperators }) => {
  return (
    <div className="operators" onClick={handleOperators}>
      <div>+</div>
      <div>-</div>
      <div>*</div>
      <div>/</div>
    </div>
  );
};

export default Operators;
