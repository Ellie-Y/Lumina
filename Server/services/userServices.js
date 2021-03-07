// 产品增删改
const User = require("../models/Users");

async function getUsers() {
  let result = null;
  result = await User.findAndCountAll();
  return {
    status: 'ok',
    data: JSON.parse(JSON.stringify(result.rows)),
  };
}

async function updateMovie(userId, changes) {
  const result = await User.update(changes, {
    where: {
      id: userId
    },
  });

  return result;
}

module.exports = {
  getUsers,
  updateMovie,
};
