import React, { useState } from "react";

//  component
import WandsItem from "./WandsItem";
// import Recomanded from "./Recomanded";

// styles
import { ListWrapper, Show, Container, Bar } from "../styles";

// images
import showimage from "../images/showimage.png";
import showlist from "../images/showlist.png";

const WandsList = ({ wands, updatedSort, setUpdatedSort, show, setShow }) => {
  const _wands = wands;
  const [query, setQuery] = useState("");

  const sortWands = (event) => {
    // console.log(event);

    switch (event) {
      case "1":
        return setUpdatedSort(wands);
      case "2":
        return setUpdatedSort(
          _wands.sort((a, b) => (a.core > b.core ? 1 : -1))
        );
      case "3":
        return setUpdatedSort(wands.filter((wand) => wand.likes > 2));
      default:
        return setUpdatedSort(wands);
    }
  };

  // search
  const filterWands = updatedSort.filter((wand) =>
    wand.core.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  );

  const wandsList = filterWands.map((wand) => (
    <WandsItem wand={wand} key={wand.id} show={show} />
  ));
  return (
    <>
      <Bar
        className="container "
        style={{
          maxWidth: "95%",
          marginTop: "10px",
        }}
      >
        <div className="row ">
          <div className="col-sm">
            <form className="form-inline my-2 my-lg-0">
              {/* search */}

              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>
          </div>
          <div className="col-sm"></div>
          <div className="col-sm">
            {/* sort */}
            <select
              style={{ width: "150px", hieght: "120px", marginRight: "40px" }}
              className="custom-select"
              defaultValue="1"
              onChange={(event) => sortWands(event.target.value)}
            >
              <option value="1">All</option>
              <option value="2">A-Z</option>
              <option value="3">Recomended</option>
            </select>

            {/* likes */}
            <Show src={showimage} alt="Image" onClick={() => setShow(1)} />
            <Show src={showlist} alt="List" onClick={() => setShow(2)} />
          </div>
        </div>
      </Bar>

      <Container>
        <ListWrapper>{wandsList}</ListWrapper>
      </Container>
    </>
  );
};

export default WandsList;
