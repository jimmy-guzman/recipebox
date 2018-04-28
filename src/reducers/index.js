import { combineReducers } from "redux";
import { routerReducer, push } from "react-router-redux";

import recipes from "./recipes";
import ingredients from "./ingredients";

const rootReducer = combineReducers({
  recipes,
  ingredients,
  router: routerReducer
});

export default rootReducer;
