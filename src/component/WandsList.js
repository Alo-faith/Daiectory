import React from "react";
import wands from "../wands";
import WandsItem from "./WandsItem";

const WandsList = ({ wands }) => {
  const wandsList = wands.map((wand) => (
    <WandsItem wand={wand} key={wand.id} />
  ));

  return <p>{wandsList}</p>;
};

export default WandsList;
