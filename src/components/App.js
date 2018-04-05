import React from "react";

import Header from "./Header";
import RecipesBox from "./RecipesBox";
import ViewBox from "./ViewBox";

class App extends React.Component {
  state = {
    recipes: {
      recipe1: {
        name: "Recipe 1",
        ingredients: [
          "ingredient1",
          "ingredient2",
          "ingredient3",
          "ingredient4",
          "ingredient5",
          "ingredient6"
        ]
      }
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <div className="grid__row">
          <RecipesBox recipes={this.state.recipes} />
          <ViewBox />
        </div>
      </div>
    );
  }
}
export default App;
