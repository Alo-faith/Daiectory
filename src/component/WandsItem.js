import React from "react";
import wands from "../wands";
import { Link } from "react-router-dom";

const WandsItem = ({ wand }) => {
  return (
    <Link to={`/${wand.id}`}>
      <p>{wand.core}</p>
    </Link>
  );
};

export default WandsItem;
