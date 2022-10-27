const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const { sequelize, user } = require("./public");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
const { where } = require("sequelize");

dot.config();

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
        user_pw: pw,
      },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "5m",
      }
    );
    const refreshToken = jwt.sign(
      {
        user_id: id,
      },
      process.env.REFRESH_TOKEN_KEY,
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
      })
      .then(() => {
        res.send("가입완료");
      });
  } else {
    res.send("아이디중복");
  }
});

app.listen(5000, () => {
  console.log("서버 열림");
});
