const router = require("express").Router();

//import controllers
const createStock = require("../controllers/create.stock");
const {searchStock} = require("../controllers/search.stock");
const updateStock = require("../controllers/update.stock");
const deleteStock = require("../controllers/delete.stock");

router.post("/create", createStock);

router.get("/stocks", searchStock);

router.patch("/update", updateStock);

router.delete("/stocks", deleteStock);



module.exports = router;