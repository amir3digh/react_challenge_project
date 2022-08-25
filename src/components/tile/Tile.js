import React from "react";

export const Tile = ({ object }) => {
  return (
    <div className="tile-container">
      {Object.values(object).map((el, index) =>
        index === 0 ?
          <p className="tile-title" key={index}>{el}</p> :
          <p className="tile" key={index}>{el}</p>
      )}
    </div>
  );
};
