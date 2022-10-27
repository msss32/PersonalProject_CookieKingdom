import React, { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginMdAction } from "../redux/middleware/loginMdAction";

const Login = () => {
  const nav = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["dori_cookie"]);

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

  const joinSubmit = (e) => {
    e.preventDefault();
    const idRegex = new RegExp(/^[a-z]+[a-z0-9]{5,20}$/g); // 소문자시작, 최소5자 최대20자
    const pwRegex = new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    ); // 최소 8 자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자
    const phoneRegex = new RegExp(/^010-?([0-9]{4})-?([0-9]{4})$/); // 010시작-4자-4자
    if (
      joinIdInput.current.value === "" ||
      idRegex.test(joinIdInput.current.value) === false
    ) {
      alert("아이디를 확인해주세요");
    } else if (
      joinPwInput.current.value === "" ||
      pwRegex.test(joinPwInput.current.value) === false
    ) {
      alert("비밀번호를 확인해주세요");
    } else if (joinNameInput.current.value === "") {
      alert("닉네임을 확인해주세요");
    } else if (
      joinPhoneInput.current.value === "" ||
      phoneRegex.test(joinPhoneInput.current.value) === false
    ) {
      alert("핸드폰번호를 확인해주세요!");
    } else {
      dispatch(
        loginMdAction.signup(
          joinIdInput.current.value,
          joinPwInput.current.value,
          joinNameInput.current.value,
          joinPhoneInput.current.value
        )
      );
    }
  };

  const login = (e) => {
    e.preventDefault();
    if (idInput.current.value === "") {
      alert("아이디를 확인해주세요");
    } else if (pwInput.current.value === "") {
      alert("비밀번호를 확인해주세요");
    } else {
      dispatch(
        loginMdAction.login(
          idInput.current.value,
          pwInput.current.value,
          nav,
          setCookie
        )
      );
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
                placeholder="핸드폰(010-0000-0000)"
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
