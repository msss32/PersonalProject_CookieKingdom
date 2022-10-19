import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { joinReducer, loginReducer, userReducer } from "../redux/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  join: joinReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export default store;
