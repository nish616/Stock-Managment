
const Stock = require("../models/stock");

async function deleteStock(req,res) {
 try{
     console.log(req.body);
     const {pId} = req.body;

     await Stock.deleteOne({pId : pId});

     return res.status(200).send("Deleted!");
     
 }catch(err){
     if(err) return res.status(400).send(err.message);
 }
}

module.exports = deleteStock;