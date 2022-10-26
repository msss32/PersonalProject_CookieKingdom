import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/reducer/loginSlice";
import { userAction } from "../redux/reducer/userSlice";

const Login = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const nav = useNavigate();
  if (isLogin) {
    alert("이미 로그인이 되어 있어요!");
    nav("/main");
  }
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
    css.href = "../css/login.css";

    const externalCss = document.createElement("link");
    externalCss.rel = "stylesheet";
    externalCss.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";

    document.head.appendChild(externalCss);
    document.head.appendChild(css);

    return () => {
      document.head.removeChild(externalCss);
      document.head.removeChild(css);
    };
  }, []);

  const idInput = useRef();
  const pwInput = useRef();
  const joinIdInput = useRef();
  const joinPwInput = useRef();
  const joinNameInput = useRef();
  const joinPhoneInput = useRef();

  const dispatch = useDispatch();
  const joinInput = useSelector((state) => state.join);

  const idRegex = new RegExp(/^[a-z]+[a-z0-9]{5,19}$/g);
  const pwRegex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/);
  const phoneRegex = new RegExp(/^010-(?:\d{4})-\d{4}$/);

  const joinSubmit = (e) => {
    const container = document.getElementById("container");
    console.log(joinIdInput.current);
    if (
      joinIdInput.current.value === "" &&
      idRegex.test(joinIdInput.current.value) === false
    ) {
      e.preventDefault();
      alert("아이디를 확인해주세요");
    } else if (joinPwInput.value === "") {
      e.preventDefault();
      alert("비밀번호를 확인해주세요");
    } else if (joinNameInput.value === "") {
      e.preventDefault();
      alert("닉네임을 확인해주세요");
    } else if (joinPhoneInput.value === "") {
      e.preventDefault();
      alert("핸드폰번호를 확인해주세요!");
    } else if (
      joinIdInput.value !== "" &&
      idRegex.test(joinIdInput.value) === true
    ) {
      console.log(joinIdInput.value);
      e.preventDefault();
      dispatch(userAction.signUp(joinInput));
      container.classList.remove("right-panel-active");
    }
    e.preventDefault();
  };

  // console.log(joinIdInput.current.value);

  const login = () => {
    dispatch(loginAction.login(idInput.value, pwInput.value));
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
                ref={joinIdInput}
                className="externalInput"
                type="text"
                placeholder="ID"
                onChange={(e) => {
                  joinIdInput.value = e.target.value;
                }}
              />
              <input
                ref={joinPwInput}
                className="externalInput"
                type="password"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => {
                  joinPwInput.value = e.target.value;
                }}
              />
              <input
                ref={joinNameInput}
                className="externalInput"
                type="name"
                placeholder="닉네임"
                onChange={(e) => {
                  joinNameInput.value = e.target.value;
                }}
              />
              <input
                ref={joinPhoneInput}
                className="externalInput"
                type=""
                placeholder="핸드폰(-없이 적어주세요)"
                onChange={(e) => {
                  joinPhoneInput.value = e.target.value;
                }}
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
