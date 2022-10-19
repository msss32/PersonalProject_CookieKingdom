import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { joinReducer, loginReducer } from "./reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  join: joinReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export default store;
