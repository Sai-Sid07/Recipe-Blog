const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000 || process.env.PORT;

require("dotenv").config();

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);

//Location of Layouts Folder
app.set("layout","./layouts/main");

app.set("view engine", "ejs");

//Initializng routes
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);



app.listen(port, function(){
    console.log('Server Started Successfully');
})
