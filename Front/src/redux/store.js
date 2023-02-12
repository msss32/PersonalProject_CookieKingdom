import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer, pickReducer, userReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  pick: pickReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
