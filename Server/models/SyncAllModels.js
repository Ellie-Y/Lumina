require('./Users');

const sequelize = require("./db");
sequelize
  .sync({
    alter: true,
  })
  .then(() => {
    console.log("All the models async suceeed");
    require("../initData");
  });
