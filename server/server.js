const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const dbo = require("./connect");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  // perform db connection when server starts
  dbo.connect()
  console.log(`Server is running on port ${port}`);
});