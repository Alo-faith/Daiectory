import React from "react";
import { Link } from "react-router-dom";

// styles
import { Header } from "../styles";

// images
import backGround from "../images/backGround.jpg";
import home from "../images/Home.png";

const NavBar = () => {
  return (
    <Header>
      <img src={backGround} alt="Background " />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            <img src={home} alt="Home" style={{ width: "100px" }} />
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default NavBar;
