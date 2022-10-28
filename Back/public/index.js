const Sequelize = require("sequelize");
const config = require("../config");
const cofig = require("../config");
const user = require("./user");
const collection = require("./collection");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.user = user;
db.collection = collection;

user.init(sequelize);
collection.init(sequelize);

module.exports = db;
