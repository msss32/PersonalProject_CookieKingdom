import axios from "axios";
import { loginAction } from "../reducer/loginSlice";

function login(id, pw) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        id,
        pw,
      },
    });
    if (user.data) {
      dispatch(loginAction.login());
    } else {
      alert("아이디 없음");
    }
  };
}

function logout() {
  return (dispatch, getState) => {
    if (getState().login.isLogin) {
      dispatch(loginAction.logout());
    }
  };
}

function signup(id, pw, setWrap) {
  return async (dispatch, getState) => {
    console.log(id, pw);
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/signup",
      data: {
        id,
        pw,
      },
    });
    console.log(user);
    alert(user.data);
    if (user.data === "가입완료") {
      setWrap();
    }
  };
}

export const loginMdAction = { login, logout, signup };
