const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const { sequelize, user } = require("./public");

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
    console.log("11");
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post("/login", async (req, res) => {
  let { id, pw } = req.body;
  const users = await user.findOne({
    where: { user_id: id },
  });
  if (!users) {
    user
      .create({
        user_id: id,
        user_pw: pw,
      })
      .then(() => {
        res.send("가입완료");
      });
  } else {
    res.send("아이디 중복");
  }
});

app.listen(5000, () => {
  console.log("서버 열림");
});
