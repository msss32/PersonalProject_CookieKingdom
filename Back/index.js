const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const { sequelize, user } = require("./public");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();
const { where } = require("sequelize");
const { decode } = require("punycode");
const { findOne } = require("./public/user");
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const refreshTokenKey = process.env.REFRESH_TOKEN_KEY;

app.use(
  cors({
    origins: ["http://localhost:3000"],
  })
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.post("/login", async (req, res) => {
  let { id, pw } = req.body;
  console.log(req.body);
  if (!id && !pw) {
    res.send(false);
    return;
  }
  const users = await user.findOne({
    where: { user_id: id, user_pw: pw },
  });
  if (users) {
    const accessToken = jwt.sign(
      {
        user_id: id,
      },
      accessTokenKey,
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      {
        user_id: id,
      },
      refreshTokenKey,
      {
        expiresIn: "1d",
      }
    );
    user.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          user_id: id,
        },
      }
    );
    res.send({ auth: true, token: accessToken });
  } else {
    res.send(false);
  }
});

app.post("/signup", async (req, res) => {
  let { id, pw, name, phone } = req.body;
  const users = await user.findOne({
    where: { user_id: id },
  });
  if (!users) {
    user
      .create({
        user_id: id,
        user_pw: pw,
        user_name: name,
        user_phone: phone,
        user_point: 5000000,
      })
      .then(() => {
        res.send("가입완료");
      });
  } else {
    res.send("아이디중복");
  }
});

app.post("/logincheck", (req, res) => {
  const accessToken = req.body.token.dori_cookie;
  jwt.verify(accessToken, accessTokenKey, (err, decoded) => {
    if (err) {
      res.send(false);
    } else if (decoded) {
      const refreshToken = user
        .findOne({
          where: { user_id: decoded.user_id },
        })
        .then((e) => {
          jwt.verify(e.refresh_token, refreshTokenKey, (err, decoded) => {
            if (err) {
              res.send(false);
            } else if (decoded) {
              const accessToken = jwt.sign(
                {
                  user_id: decoded.user_id,
                },
                process.env.ACCESS_TOKEN_KEY,
                {
                  expiresIn: "15m",
                }
              );
              res.send({ id: decoded.user_id, token: accessToken });
            }
          });
        });
    }
  });
});

const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:3000"],
  },
});

const userList = [];
const userId = [];

io.on("connection", (socket) => {
  console.log("유저 접속");

  socket.on("enroll", (name, id) => {
    userList.push(name);
    userId.push(id);
    io.emit("");
  });
});

http.listen(5000, () => {
  console.log("서버 열림");
});
