const Stock = require("../models/stock");

// async function serachStock(req,res) {
//     try{

//         const stocks = await Stock.aggregate([
    
//             {$project : {_id : 0 , pId : 1, pName : 1, date : 1, qAvailable : 1, status:1}}
    
//         ]);
    
//         res.status(200).send(stocks);
    
    
    
//        } catch(err) {
    
//            if(err) res.status(400).json({"message" : "failed"});
    
//        }
// }

async function searchStock(req,res) {
    try{

        //const {pId, pName, qAvailable, date, status} = req.body;
        const stocks = await Stock.find({});
        return res.status(200).send(stocks);

        //console.log(req.body);

    
       } catch(err) {
    
           if(err) res.status(400).json({"message" : "failed"});
    
       }
}

module.exports = {searchStock};