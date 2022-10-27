import axios from "axios";
import { loginAction } from "../reducer/loginSlice";

function login(id, pw, nav, setCookie) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        id,
        pw,
      },
    });
    if (user.data.auth) {
      alert("로그인 완료");
      setCookie("dori_cookie", user.data.token, { path: "/" });
      dispatch(loginAction.login(id, pw));
      nav("/main");
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };
}

function loginCheck(id, token) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        id,
        token,
      },
    });
    if (user.data.auth) {
      alert("로그인 완료");
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };
}

function signup(id, pw, name, phone) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/signup",
      data: {
        id,
        pw,
        name,
        phone,
      },
    });
    if (user.data) {
      const container = document.getElementById("container");
      container.classList.remove("right-panel-active");
      alert("회원가입 완료");
    } else {
      alert("아이디 중복");
    }
  };
}

export const loginMdAction = { login, signup, loginCheck };
