// Get / -> Homepage
require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

exports.homepage = (req, res) => {
    try{
        const limitCategory = 5;
        //Nested Database Calls to get the neccessary Data and pass it to the EJS File
        //Call 1 -> Getting Different Categories
        Category.find({}, function(err,categories){
            if(err){
                console.log("404 Error")
            }else{
                //Call 2 -> Getting Latest Recipies
                Recipe.find({}, function(err, recipes){
                    if(err){
                        console.log("404 Error")
                    }else{
                        //Call 3 -> Getting Indian Recipies
                        Recipe.find({"category":"Indian"}, function(err, indian){
                            if(err){
                                console.log("404 Error")
                            }else{
                                //Call 4 -> Getting Thai Recipies
                                Recipe.find({"category":"Thai"},function(err, thai){
                                    if(err){
                                        console.log("404 Error")
                                    }else{
                                        //Call 5 -> Getting American Recipies
                                        Recipe.find({"category":"American"}, function(err, american){
                                            if(err){
                                                console.log("404 Error")
                                            }else{
                                                //Call 6 -> Getting Chinese Recipies
                                                Recipe.find({"category":"Chinese"}, function(err,chinese){
                                                    if(err){
                                                        console.log("404 Error")
                                                    }else{
                                                        res.render("index", {title:"Home Page", 
                                                            categories:categories, 
                                                            recipes:recipes,
                                                            indian:indian,
                                                            thai:thai,
                                                            chinese:chinese,
                                                            american:american
                                                        });
                                                    }
                                                }).sort({_id:-1}).limit(limitCategory)
                                            }
                                        }).sort({_id:-1}).limit(limitCategory)
                                    }
                                }).sort({_id:-1}).limit(limitCategory)
                            }
                        }).sort({_id:-1}).limit(limitCategory)
                    }
                }).sort({_id:-1}).limit(limitCategory);
            }
        }).limit(limitCategory);
    }catch(error){
        //Create an error page for this
        console.log("Error Rendering Page");
    }
}

exports.exploreCategories = (req, res) => {
    try{
        const limit = 20;
        Category.find({}, function(err, data){
            if(err){
                console.log("404 Error");
            }else{
                res.render("categories", {title:"Categories", categories:data})
            }
        }).limit(limit)

    }catch(err){
        console.log("404 Error")
    }
}




