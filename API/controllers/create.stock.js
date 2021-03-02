const Stock = require("../models/stock");

async function createStock(req,res) {

    try {

        const {pId, pName, qAvailable, date, status} = req.body;
    
        console.log(req.body);
    
        const newStock = {
            pId : pId,
            pName : pName,
            qAvailable : qAvailable,
            date : date,
            status : status
        };
    
    
        const stock = new Stock(newStock);
    
        await stock.save();
    
        res.status(201).json({"message" : "Stock Created!"});
    
    } catch(err){
    
        res.status(400).json({"message" : err.message});
    
    }
}

module.exports = createStock;