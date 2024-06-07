const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const user = require("./routes.js");
const PORT = process.env.PORT || 8000;

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Root Folder" });
});

app.use("/api", user);

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});
