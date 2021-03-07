const { Sequelize } = require('sequelize');
const { sqlLogger } = require('../logs/config');

// Please connect with your database when run locally
const sequelize = new Sequelize("movie-app", "root", "113716", {
  host: "localhost",
  dialect: "mysql",
  logging: (msg) => {
    sqlLogger.debug(msg);
  },
});

module.exports = sequelize;

 
