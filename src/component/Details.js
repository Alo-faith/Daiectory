import React, { useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";

//  component
import WandsItem from "./WandsItem";
import Recomanded from "./Recomanded";

// data
import wands from "../wands.js";

// styles
import {
  WandWrapper,
  BackImage,
  DetailsLikesDiv,
  RecomandedStyle,
} from "../styles";
// images
import likes from "../images/like.png";
import back from "../images/back.png";

const Details = ({ wands }) => {
  const [updateLikes, setUppdateLikes] = useState(wands.likes);

  const addLikes = () => {
    wand.likes = wand.likes + 1;
    setUppdateLikes(wand.likes);
  };

  const { wandId } = useParams();
  const wand = wands.find((wand) => wand.id === +wandId);

  if (!wand) return <Redirect to="/" />;

  const copy = () => {
    let u = window.location.href;
    console.log(u);
    // u.select();
    document.execCommand("copy");
  };

  return (
    <>
      <WandWrapper>
        <Link to="/">
          <BackImage src={back} alt="Wand Image" />
        </Link>
        <h1> Core :{wand.core}</h1>
        <div
          className="card mb-3"
          style={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={wand.imageUrl} class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">Wood:{wand.wood}</p>
                <p className="card-text">Length: {wand.length}</p>
                <p className="card-text">
                  <DetailsLikesDiv>
                    <img src={likes} alt="Like" onClick={addLikes} />
                    <p class="text-muted">{updateLikes}</p>
                  </DetailsLikesDiv>
                </p>
                <h6 onClick={copy}>Copy URL</h6>
              </div>
            </div>
          </div>
        </div>
        <RecomandedStyle>
          <Recomanded wands={wands} />
        </RecomandedStyle>
      </WandWrapper>
    </>
  );
};

export default Details;
