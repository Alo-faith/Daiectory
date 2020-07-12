import React, { useState } from "react";
import { Link } from "react-router-dom";

// style
import { LikesStyle, Img, ListStyle } from "../styles";

// image
import likes from "../images/like.png";

const WandsItem = ({ wand, show }) => {
  const [updateLikes, setUppdateLikes] = useState(wand.likes);

  const addLikes = () => {
    wand.likes = wand.likes + 1;
    setUppdateLikes(wand.likes);
  };
  //  show images or list

  if (show === 1) {
    return (
      <div className="card  ">
        <div className="card-header">
          <Link to={`/${wand.id}`}>
            <Img src={wand.imageUrl} alt="Wand Image" />
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to={`/${wand.id}`}>
              <h4 style={{ color: "black" }}>Core: {wand.core}</h4>{" "}
            </Link>{" "}
          </li>

          <li
            className="list-group-item"
            style={{ display: "flex", textAlign: "center" }}
          >
            <LikesStyle src={likes} alt="Like" onClick={addLikes} />
            <h5>{updateLikes}</h5>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <ListStyle>
        <ul>
          <Link to={`/${wand.id}`}>
            <li>Core: {wand.core}</li>
          </Link>
        </ul>
      </ListStyle>
    );
  }
};

export default WandsItem;
