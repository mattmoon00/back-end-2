const express = require("express");
const cors = require("cors");
const controller = require("./controller");
const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controller");

let app = express();
app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouses);
app.delete("/api/houses", deleteHouse);
app.post("/api/houses/:id", createHouse);
app.put("/api/houses/:id", updateHouse);

app.listen(4004, console.log("Server running on port 4004"));
