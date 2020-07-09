import React, { useState } from "react";
import WandsList from "./component/WandsList.js";
import { Route, Switch } from "react-router";
import wands from "./wands.js";
import Details from "./component/Details";

function App() {
  const [_wands, setWands] = useState(wands);
  return (
    <>
      <h1> Directoy </h1>

      <Switch>
        <Route path="/:wandId">
          <Details wands={_wands} />
        </Route>

        <Route path="/">
          <WandsList wands={_wands} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
