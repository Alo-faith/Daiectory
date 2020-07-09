import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";

const Details = ({ wands }) => {
  const { wandId } = useParams();
  const wand = wands.find((wand) => wand.id === +wandId);

  if (!wand) return <Redirect to="/" />;

  return (
    <>
      <p>{wand.core}</p>
      <p>{wand.wood}</p>
      <p>{wand.length}</p>
      <img src={wand.imageUrl} />
    </>
  );
};

export default Details;
