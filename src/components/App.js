import React from "react";

import Header from "./Header";
import Recipes from "./Recipes";
import ViewBox from "./ViewBox";

class App extends React.Component {
  state = {
    recipes: {
      recipe1: [
        " ingredient1",
        " ingredient2",
        " ingredient3",
        " ingredient4",
        " ingredient5",
        " ingredient6"
      ]
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <div className="grid__row">
          <Recipes />
          <ViewBox />
        </div>
      </div>
    );
  }
}
export default App;
