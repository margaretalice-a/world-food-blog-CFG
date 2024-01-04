var randomRecipe = ['Try Tikka Masala (Asia). View the <a href="recipes.html">Recipe!</a>','Try Jellof Rice (Africa). View the <a href="recipes.html">Recipe!</a>', 'Try Spaghetti Carbonara (Europe). View the <a href="recipes.html">Recipe!</a>'];
function recipeFunction(){ 
    document.getElementById("recipes-generated").innerHTML= randomRecipe[Math.floor(Math.random()*randomRecipe.length)]
    }