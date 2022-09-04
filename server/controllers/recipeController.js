const fetch = require('node-fetch')
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

exports.exploreCategoriesSpecific = (req, res) => {
    try{
        let categoryName = req.params.name;
        Recipe.find({"category": categoryName}, function(err, data){
            if(err){
                console.log("404 Error");
            }else{
                res.render("categories", {title: categoryName, categoryData : data, title: categoryName});
            }
        })

    }catch(err){
        console.log("404 Error")
    }
}

exports.exploreRecipe = (req, res) => {
    try{
        let recipeID = req.params.id;
        Recipe.find({_id:recipeID}, function(err, recipe){
            if(err){
                console.log("Error 404");
            }else{
                res.render("recipe", {title:"Recipe Page", recipe:recipe})
            }
        })
    }catch(err){
        console.log("404 Error")
    }
}

exports.searchRecipe = async (req, res) => {
    try {
        let search = req.body.search;
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;
        const results = await fetch(url).then(res => res.json());  
        console.log(results);      
        res.render("search", {title: "Results"});
        
    } catch (error) {
        console.log(error);
    }
}




