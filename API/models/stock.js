const mongoose = require("mongoose");



const stockSchema = new mongoose.Schema({

    pId : {

        type : Number,

        unique : true,

        required : true

    },



    pName : {

        type : String,

        required : true

    },

    qAvailable : {

        type : Number,

        required : true

    },

    date : {

        type : Date,

        required : true

    },

    status : {

        type : String,

        required : true

    }
});



module.exports = new mongoose.model("Stock" , stockSchema);