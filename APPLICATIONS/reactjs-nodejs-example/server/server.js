// npm install express --save
var express = require("express");
var app = express();

// for cors
var cors = require("cors");
app.use(cors());

//for reading json file
const fs = require("fs");
let rawdata = fs.readFileSync("./store/users.json");
let users = JSON.parse(rawdata);

// npm install log4js --save
const log4js = require("log4js");
log4js.configure({
  appenders: {
    out: { type: "stdout" },
    espark: { type: "file", filename: "espark.log" }
  },
  categories: {
    default: { appenders: ["out", "espark"], level: "all" }
  }
});
const logger = log4js.getLogger("espark");
logger.level = "info";

app.get("/", function(request, response) {
  response.send("welcome");
});

app.get("/api/users", (req, res) => {
  logger.info(users);
  res.send(JSON.stringify(users));
});

app.listen(3200, "localhost");
console.log("server is started ...");
logger.info("server stared at 3200 port ");
