// import express
const express = require("express");

//import mongoose
const mongoose = require("mongoose");

//import cors
const cors = require("cors");

//create an instance of express
const app = express();

//select our port
const port = 8000;

// enable cors
app.use(cors());

//use express and return json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connect to our mongoose config
require("./config/mongoose.config");

//import our routes and include (app) for express
const heroapp = require("./routes/hero.routes");
heroapp(app);

//listen for connections on specified ports
app.listen(port, () => console.log(`Listening on port ${port}`));



/* 
1. Install express
2. Install mongoose
3. Install Cors
ex. npm install express mongoose cors */