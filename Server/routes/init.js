const express = require("express");
const app = express();
const cors = require('cors');

// Fix cors issue
app.use(cors(), (req, res, next) => {
  next();
});
app.use(express.urlencoded({ extended: true }))   
app.use(express.json())      

// Deal with user requests
app.use('/api/user', require('./api/user'));

// Deal with errors
app.use(require('./errorMiddleware'));

// server
const port = "5050";
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
