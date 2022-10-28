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

function loginCheck(id, token, setCookie, isLogin, nav) {
  return async (dispatch, getState) => {
    const check = await axios({
      method: "post",
      url: "http://localhost:5000/logincheck",
      data: {
        id,
        token,
      },
    });
    if (check.data !== false) {
      dispatch(loginAction.login(check.data.id));
      setCookie("dori_cookie", check.data.token, { path: "/" });
    } else if (check.data === false) {
      alert("로그인을 부탁드립니다");
      isLogin = false;
      nav("/login");
    } else {
    }
  };
}

function signup(id, pw, name, phone, point) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/signup",
      data: {
        id,
        pw,
        name,
        phone,
        point,
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
