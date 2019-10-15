import { combineReducers } from "redux";
import user from "./reducers/auth";
import admin from "./reducers/admin";

export default combineReducers({
  user,
  admin
});