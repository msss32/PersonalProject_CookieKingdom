const Sequelize = require("sequelize");

class collection extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        collect_name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        collect_grade: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        collect_own: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: "Collection",
        tableName: "collections",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = collection;
