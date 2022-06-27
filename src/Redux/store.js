import { legacy_createStore } from "redux";
import { reducer as shoeReducer } from "./reducer";

const store = legacy_createStore(shoeReducer);
export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}