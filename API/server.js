const express = require("express");

const bodyParser = require("body-parser");

require("dotenv").config();

const cors = require("cors");



//require Db connection

require("./DB/db.Connection");



//import routes
const stockRoute = require("./routes/stock.router");



const app = express();



//middleware

app.use(bodyParser.urlencoded({

    extended : true

}));

app.use(bodyParser.json());

app.use(cors());



//Route middleware
app.use("/", stockRoute);



app.listen(5000, console.log("Server up and running!"));