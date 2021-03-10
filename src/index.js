const express = require("express");
const morgan = require("morgan");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(morgan("dev"));

//Global Variables

//Routes

//Public

//