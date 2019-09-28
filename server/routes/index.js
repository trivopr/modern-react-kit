const express = require("express");
const router = express.Router();
const Authentication = require("./../controllers/authentication");

// router.get('/', (req, res) => {
//     console.log('router index');
// });

// router.get('/{uuid}', (req, res) => {
//   // code to get book related data with a specific uuid
// });

// router.post('/', (req, res) => {
//   // Code to post book related data
// });

// export default router;

module.exports = app => {
  //   app.get("/", (req, res) => {
  //     res.send(["apple", "orange", "pineaple"]);
  //   });

  app.post("/signup", Authentication.signup);
};
