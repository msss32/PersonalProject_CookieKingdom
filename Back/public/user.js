const Sequelize = require("sequelize");

class user extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        user_pw: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        user_phone: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        user_point: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        refresh_token: {
          type: Sequelize.STRING(500),
          allowNull: true,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = user;
