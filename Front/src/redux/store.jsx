import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../redux/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export default store;
