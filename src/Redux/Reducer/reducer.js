import { combineReducers } from "redux";

import favouriteReducer from "./favouriteReducer";
import addStuReducer from "./AddStuReducer";



export const reducer = combineReducers({
  add: addStuReducer,
  fav: favouriteReducer
})