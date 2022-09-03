const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;

//Schemas
require("./Category");
require("./Recipe")
