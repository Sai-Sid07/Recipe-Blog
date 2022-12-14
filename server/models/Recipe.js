const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        enum:["Thai", "Mexican","Chinese", "American", "Indian"],
        required:true
    },
    image:{
        type:String, 
        required:true
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)