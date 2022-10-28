import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../component";
import { useCookies } from "react-cookie";
import { loginMdAction } from "../redux/middleware/loginMdAction";

const Board = () => {
  const [cookie, setCookie] = useCookies(["dori_cookie"]);
  const user_Id = useSelector((state) => state.login.id);
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(
      loginMdAction.loginCheck(user_Id, cookie, setCookie, isLogin, nav)
    );
  }, [dispatch, cookie, setCookie, user_Id, isLogin, nav]);

  return (
    <div className="board">
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "100px",
            fontSize: "45px",
            fontFamily: "Cookie-Run-B",
          }}
        >
          게시판 공사중
        </div>
      </div>
    </div>
  );
};

export default Board;
