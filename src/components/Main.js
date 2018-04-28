import React from "react";
import { Switch, Route } from "react-router-dom";
import RecipesBox from "./RecipesBox";
import ViewBox from "./ViewBox";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={RecipesBox} />
      <Route path="/:recipe" component={ViewBox} />
    </Switch>
  </main>
);

export default Main;
