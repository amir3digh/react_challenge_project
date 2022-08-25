import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <div>
      {items.map((object, index) => <Tile object={object} key={index} />)}
    </div>
  );
};
