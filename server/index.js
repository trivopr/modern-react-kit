const express = require("express");
const logger = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
router(app);

//============== Connect MongoDB =============//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/modernapp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conecting to Mongodb successfull");
});

// App setup
// app.get('/', (req, res) => res.send('Hello World!'))

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
