async function insertDataDummy(){
    try{
        await Category.insertMany([
            {
            "name": "Thai",
            "image": "thai-food.jpg"
            },
            {
            "name": "American",
            "image": "american-food.jpg"
            }, 
            {
            "name": "Chinese",
            "image": "chinese-food.jpg"
            },
            {
            "name": "Mexican",
            "image": "mexican-food.jpg"
            }, 
            {
            "name": "Indian",
            "image": "indian-food.jpg"
            },
            {
            "name": "Spanish",
            "image": "spanish-food.jpg"
            }
        ]);
    }catch(error){
        console.log("Error Inserting into Database");
    }

}

insertDataDummy();

async function insertDymmyRecipeData(){
    try {
      await Recipe.insertMany([
        { 
          "name": "Recipe Name Goes Here",
          "description": `Recipe Description Goes Here`,
          "email": "recipeemail@raddy.co.uk",
          "ingredients": [
            "1 level teaspoon baking powder",
            "1 level teaspoon cayenne pepper",
            "1 level teaspoon hot smoked paprika",
          ],
          "category": "Thai", 
          "image": "thai-green-curry.jpg"
        },
        { 
          "name": "Recipe Name Goes Here",
          "description": `Recipe Description Goes Here`,
          "email": "recipeemail@raddy.co.uk",
          "ingredients": [
            "1 level teaspoon baking powder",
            "1 level teaspoon cayenne pepper",
            "1 level teaspoon hot smoked paprika",
          ],
          "category": "Thai", 
          "image": "thai-green-curry.jpg"
        },
        { 
            "name": "Recipe Name Goes Here",
            "description": `Recipe Description Goes Here`,
            "email": "recipeemail@raddy.co.uk",
            "ingredients": [
              "1 level teaspoon baking powder",
              "1 level teaspoon cayenne pepper",
              "1 level teaspoon hot smoked paprika",
            ],
            "category": "Thai", 
            "image": "thai-green-curry.jpg"
          },
          { 
            "name": "Recipe Name Goes Here",
            "description": `Recipe Description Goes Here`,
            "email": "recipeemail@raddy.co.uk",
            "ingredients": [
              "1 level teaspoon baking powder",
              "1 level teaspoon cayenne pepper",
              "1 level teaspoon hot smoked paprika",
            ],
            "category": "Thai", 
            "image": "thai-green-curry.jpg"
          },
          { 
            "name": "Recipe Name Goes Here",
            "description": `Recipe Description Goes Here`,
            "email": "recipeemail@raddy.co.uk",
            "ingredients": [
              "1 level teaspoon baking powder",
              "1 level teaspoon cayenne pepper",
              "1 level teaspoon hot smoked paprika",
            ],
            "category": "Thai", 
            "image": "thai-green-curry.jpg"
          },
          { 
            "name": "Recipe Name Goes Here",
            "description": `Recipe Description Goes Here`,
            "email": "recipeemail@raddy.co.uk",
            "ingredients": [
              "1 level teaspoon baking powder",
              "1 level teaspoon cayenne pepper",
              "1 level teaspoon hot smoked paprika",
            ],
            "category": "Thai", 
            "image": "thai-green-curry.jpg"
          },
          { 
            "name": "Recipe Name Goes Here",
            "description": `Recipe Description Goes Here`,
            "email": "recipeemail@raddy.co.uk",
            "ingredients": [
              "1 level teaspoon baking powder",
              "1 level teaspoon cayenne pepper",
              "1 level teaspoon hot smoked paprika",
            ],
            "category": "Indian", 
            "image": "spring-rolls.jpg"
          },
          { 
            "name": "Recipe Name Goes Here",
            "description": `Recipe Description Goes Here`,
            "email": "recipeemail@raddy.co.uk",
            "ingredients": [
              "1 level teaspoon baking powder",
              "1 level teaspoon cayenne pepper",
              "1 level teaspoon hot smoked paprika",
            ],
            "category": "Indian", 
            "image": "spring-rolls.jpg"
          },
          { 
              "name": "Recipe Name Goes Here",
              "description": `Recipe Description Goes Here`,
              "email": "recipeemail@raddy.co.uk",
              "ingredients": [
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
              ],
              "category": "Indian", 
              "image": "spring-rolls.jpg"
            },
            { 
              "name": "Recipe Name Goes Here",
              "description": `Recipe Description Goes Here`,
              "email": "recipeemail@raddy.co.uk",
              "ingredients": [
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
              ],
              "category": "Indian", 
              "image": "spring-rolls.jpg"
            },
            { 
              "name": "Recipe Name Goes Here",
              "description": `Recipe Description Goes Here`,
              "email": "recipeemail@raddy.co.uk",
              "ingredients": [
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
              ],
              "category": "Indian", 
              "image": "spring-rolls.jpg"
            },
            { 
              "name": "Recipe Name Goes Here",
              "description": `Recipe Description Goes Here`,
              "email": "recipeemail@raddy.co.uk",
              "ingredients": [
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
              ],
              "category": "Indian", 
              "image": "spring-rolls.jpg"
            },
            { 
                "name": "Recipe Name Goes Here",
                "description": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "crab-cakes.jpg"
              },
              { 
                "name": "Recipe Name Goes Here",
                "description": `Recipe Description Goes Here`,
                "email": "recipeemail@raddy.co.uk",
                "ingredients": [
                  "1 level teaspoon baking powder",
                  "1 level teaspoon cayenne pepper",
                  "1 level teaspoon hot smoked paprika",
                ],
                "category": "American", 
                "image": "crab-cakes.jpg"
              },
              { 
                  "name": "Recipe Name Goes Here",
                  "description": `Recipe Description Goes Here`,
                  "email": "recipeemail@raddy.co.uk",
                  "ingredients": [
                    "1 level teaspoon baking powder",
                    "1 level teaspoon cayenne pepper",
                    "1 level teaspoon hot smoked paprika",
                  ],
                  "category": "American", 
                  "image": "crab-cakes.jpg"
                },
                { 
                  "name": "Recipe Name Goes Here",
                  "description": `Recipe Description Goes Here`,
                  "email": "recipeemail@raddy.co.uk",
                  "ingredients": [
                    "1 level teaspoon baking powder",
                    "1 level teaspoon cayenne pepper",
                    "1 level teaspoon hot smoked paprika",
                  ],
                  "category": "American", 
                  "image": "crab-cakes.jpg"
                },
                { 
                  "name": "Recipe Name Goes Here",
                  "description": `Recipe Description Goes Here`,
                  "email": "recipeemail@raddy.co.uk",
                  "ingredients": [
                    "1 level teaspoon baking powder",
                    "1 level teaspoon cayenne pepper",
                    "1 level teaspoon hot smoked paprika",
                  ],
                  "category": "American", 
                  "image": "crab-cakes.jpg"
                },
                { 
                  "name": "Recipe Name Goes Here",
                  "description": `Recipe Description Goes Here`,
                  "email": "recipeemail@raddy.co.uk",
                  "ingredients": [
                    "1 level teaspoon baking powder",
                    "1 level teaspoon cayenne pepper",
                    "1 level teaspoon hot smoked paprika",
                  ],
                  "category": "American", 
                  "image": "crab-cakes.jpg"
                },
                { 
                    "name": "Recipe Name Goes Here",
                    "description": `Recipe Description Goes Here`,
                    "email": "recipeemail@raddy.co.uk",
                    "ingredients": [
                      "1 level teaspoon baking powder",
                      "1 level teaspoon cayenne pepper",
                      "1 level teaspoon hot smoked paprika",
                    ],
                    "category": "Chinese", 
                    "image": "key-lime-pie.jpg"
                  },
                  { 
                    "name": "Recipe Name Goes Here",
                    "description": `Recipe Description Goes Here`,
                    "email": "recipeemail@raddy.co.uk",
                    "ingredients": [
                      "1 level teaspoon baking powder",
                      "1 level teaspoon cayenne pepper",
                      "1 level teaspoon hot smoked paprika",
                    ],
                    "category": "Chinese", 
                    "image": "key-lime-pie.jpg"
                  },
                  { 
                      "name": "Recipe Name Goes Here",
                      "description": `Recipe Description Goes Here`,
                      "email": "recipeemail@raddy.co.uk",
                      "ingredients": [
                        "1 level teaspoon baking powder",
                        "1 level teaspoon cayenne pepper",
                        "1 level teaspoon hot smoked paprika",
                      ],
                      "category": "Chinese", 
                      "image": "key-lime-pie.jpg"
                    },
                    { 
                      "name": "Recipe Name Goes Here",
                      "description": `Recipe Description Goes Here`,
                      "email": "recipeemail@raddy.co.uk",
                      "ingredients": [
                        "1 level teaspoon baking powder",
                        "1 level teaspoon cayenne pepper",
                        "1 level teaspoon hot smoked paprika",
                      ],
                      "category": "Chinese", 
                      "image": "key-lime-pie.jpg"
                    },
                    { 
                      "name": "Recipe Name Goes Here",
                      "description": `Recipe Description Goes Here`,
                      "email": "recipeemail@raddy.co.uk",
                      "ingredients": [
                        "1 level teaspoon baking powder",
                        "1 level teaspoon cayenne pepper",
                        "1 level teaspoon hot smoked paprika",
                      ],
                      "category": "Chinese", 
                      "image": "key-lime-pie.jpg"
                    },
                    { 
                      "name": "Recipe Name Goes Here",
                      "description": `Recipe Description Goes Here`,
                      "email": "recipeemail@raddy.co.uk",
                      "ingredients": [
                        "1 level teaspoon baking powder",
                        "1 level teaspoon cayenne pepper",
                        "1 level teaspoon hot smoked paprika",
                      ],
                      "category": "Chinese", 
                      "image": "key-lime-pie.jpg"
                    }
      ]);
    } catch (error) {
      console.log('err', + error)
    }
  }
  
  insertDymmyRecipeData();