const database = require("./db.json");
let nextId = 4;

module.exports = {
  getHouses(req, res) {
    res.status(200).send(database);
  },
  deleteHouse(req, res) {
    let index = database.findIndex((elem) => elem.id === req.params.id);
    movies.splice(index, 1);
    res.status(200).send(database);
  },
  createHouse(req, res) {
    let { address, price, imageURL } = req.body;
    let newHouse = {
      id: nextId,
      address,
      price,
      imageURL,
    };
    database.push(newHouse);
    nextId++;
    res.status(200).send(database);
  },
  updateHouse(req, res) {
    let { id } = req.params;
    let { type } = req.body;
    let index = database.findIndex((elem) => +elem.id === +id);
    if (type === "plus") {
      database[index].price = database[index].price + 10000;
    } else if (type === "minus") {
      database[index].price = database[index].price - 10000;
    }
    res.status(200).send(database);
  },
};
