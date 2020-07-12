import React, { useState } from "react";

// styles
import { ListWrapper, Show, Container, Bar } from "../styles";

const Recomanded = ({ wands, setUpdatedSort }) => {
  let a;
  const x = wands.filter((wand) => wand.likes > 2);
  if (x.length > 3) a = x.slice(3);
  else a = x;
  return setUpdatedSort(x);
};

export default Recomanded;
