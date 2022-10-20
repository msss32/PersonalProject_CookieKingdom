import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer, userReducer } from "../redux/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export default store;
