const Stock = require("../models/stock");

async function updateStock(req,res) {
    try{
        const {pId, pName, qAvailable, date, status} = req.body;

        await Stock.updateMany({pId : pId}, {$set : { pName : pName, qAvailable : qAvailable, date : date, status : status}});

        return res.status(200).send("Updated!");
    }catch(err){
        if(err) return res.status(400).send(err.message);
    }
    


}

module.exports = updateStock;