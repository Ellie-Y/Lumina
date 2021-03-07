const users = require("./models/Users");
const userMockData = require("./mock/UserMockData.json");

async function initData() {
  await users.bulkCreate(userMockData);
}

initData().then((_) => {
  console.log("Data created");
});
dataCreated = true;

