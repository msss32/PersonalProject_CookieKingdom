import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinAction } from "../redux/reducer/joinSlice";
import { loginAction } from "../redux/reducer/loginSlice";
import { userAction } from "../redux/reducer/userSlice";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";

    document.head.appendChild(css);

    return () => {
      document.head.removeChild(css);
    };
  }, []);

  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const joinInput = useSelector((state) => state.join);
  // const isLogin = useSelector((state) => state.login.isLogin);

  const joinIdHandler = (e) => {
    dispatch(joinAction.joinId(e.target.value));
  };
  const joinPwHandler = (e) => {
    dispatch(joinAction.joinPw(e.target.value));
  };
  const joinNameHandler = (e) => {
    dispatch(joinAction.joinName(e.target.value));
  };
  const joinSubmit = (e) => {
    const container = document.getElementById("container");
    if (joinInput.id !== "" && joinInput.pw !== "" && joinInput.name !== "") {
      dispatch(userAction.signUp(joinInput));
      e.preventDefault();
      container.classList.remove("right-panel-active");
    } else if (joinInput.id === "") {
      e.preventDefault();
      alert("아이디를 입력해주세요");
    } else if (joinInput.pw === "") {
      e.preventDefault();
      alert("비밀번호를 입력해주세요");
    } else if (joinInput.name === "") {
      e.preventDefault();
      alert("닉네임을 입력해주세요");
    }
  };

  const idInput = useRef();
  const pwInput = useRef();

  const login = (e) => {
    e.preventDefault();
    for (let i = 0; i < user.length; i++) {
      if (user[i].id === idInput.value && user[i].pw === pwInput.value) {
        dispatch(loginAction.login(idInput.value, pwInput.value));
        nav("/");
      } else if (user[i].id !== idInput.value) {
        alert("아이디를 확인해주세요");
      } else if (user[i].pw !== pwInput.value) {
        alert("비밀번호를 확인해주세요");
      }
    }
  };

  return (
    <div>
      <div className="backgroundLogin">
        <img
          src="img/backgroundLogin.png"
          alt="back"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="contain">
        <div className="externalContainer" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={joinSubmit} className="externalForm">
              <h1 className="externalh1">회원가입</h1>
              <span className="externalSpan">
                아래 빈칸에 아이디와 이메일, <br />
                비밀번호를 입력해주세요!
              </span>
              <input
                className="externalInput"
                type="text"
                placeholder="ID"
                onChange={joinIdHandler}
              />
              <input
                className="externalInput"
                type="password"
                placeholder="Password"
                onChange={joinPwHandler}
                autoComplete="on"
              />
              <input
                className="externalInput"
                type="name"
                placeholder="닉네임"
                onChange={joinNameHandler}
              />
              <input
                className="externalInput"
                type=""
                placeholder="PhoneNumber(-없이 적어주세요)"
                onChange={joinNameHandler}
              />
              <br />
              <br />
              <button className="externalBtn">가입하기</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={login} className="externalForm">
              <h1 className="externalh1">로그인</h1>
              <br />
              <span className="externalSpan">
                아이디와 비밀번호를 입력해주세요
              </span>
              <input
                className="externalInput"
                type="text"
                placeholder="ID"
                ref={idInput}
                onChange={(e) => {
                  idInput.value = e.target.value;
                }}
              />
              <input
                className="externalInput"
                type="password"
                placeholder="Password"
                ref={pwInput}
                onChange={(e) => {
                  pwInput.value = e.target.value;
                }}
                autoComplete="on"
              />
              <br />
              <button className="externalBtn">로그인</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="externalh1">Hey Friend!</h1>
                <p className="externalP">
                  회원가입을 완료했다면 <br />
                  아래 버튼으로 로그인을 부탁해!
                </p>
                <button className="ghost externalBtn" id="signIn">
                  로그인
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="externalh1">Hi Cooooooookiiiee~</h1>
                <p className="externalP">
                  혹시 아직 가입하지 않은 친구가 있다면 <br />
                  아래의 버튼을 눌러줘
                </p>
                <button className="ghost externalBtn" id="signUp">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
