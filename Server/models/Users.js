const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "Users",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favourite_movies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authenticated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    updatedAt: false,
  }
);

module.exports = Users;
