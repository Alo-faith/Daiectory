import React, { useState } from "react";
import { Route, Switch } from "react-router";

// component
import WandsList from "./component/WandsList.js";
import Details from "./component/Details";
import NavBar from "./component/NavBar";

// data
import wands from "./wands.js";

function App() {
  const [updatedSort, setUpdatedSort] = useState(wands);
  const [show, setShow] = useState(1);
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/:wandId">
          <Details wands={wands} />
        </Route>

        <Route path="/">
          <WandsList
            wands={wands}
            updatedSort={updatedSort}
            setUpdatedSort={setUpdatedSort}
            show={show}
            setShow={setShow}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
