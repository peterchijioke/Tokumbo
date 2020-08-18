const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "toku",
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

console.log(connection);

app.get("/", (req, res) => {
  res.json({ peter: "peter", joy: "for me" });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
