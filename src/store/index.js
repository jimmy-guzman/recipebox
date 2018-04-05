import { createStore, compose } from "redux";
import rootReducer from "../reducers/recipes";

const store = createStore(rootReducer);

export default store;
