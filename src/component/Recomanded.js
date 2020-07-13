import React, { useState } from "react";
import { Link } from "react-router-dom";
// styles
import { RecomandedStyle } from "../styles";

const Recomanded = ({ wands, setUpdatedSort }) => {
  let recomanded = wands.filter((wand) => wand.likes > 2);
  recomanded = recomanded.sort((a, b) => (a.likes < b.likes ? 1 : -1));
  recomanded = recomanded.slice(0, 3);
  const wandsRecomanded = recomanded.map((wand) => (
    // return (
    <>
      <Link to={`/${wand.id}`}>
        <img src={wand.imageUrl} alt="Wand Image" />
      </Link>

      <Link to={`/${wand.id}`}>
        <p style={{ color: "black" }}>Core: {wand.core}</p>
      </Link>
    </>
  ));

  return <>{wandsRecomanded}</>;
};

export default Recomanded;
