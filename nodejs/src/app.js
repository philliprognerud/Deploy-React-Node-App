const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.get("/api/hello", function(req, res) {
  res.send("Hello world\n");
});

app.get("/api/test", function(req, res) {
  res.send("API ROUTE !! ~~~~~~~");
});

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);
