const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// console.log(data);

// list all the food items

console.log("list all the food items ",data.map((element)=>element));

// list all the food items with category vegetables

console.log("list all the food items with category vegetables ",data.filter((element)=>element['category'] == "Vegetable"))



// list all the food items with category fruit
console.log("list all the food items with category fruit ",data.filter((element)=>element['category'] == "Fruit"))

// - [ ]  list all the food items with category protien
console.log("list all the food items with category Protein ",data.filter((element)=>element['category'] == "Protien"));

// - [ ]  list all the food items with category nuts

console.log("list all the food items with category Nuts ",data.filter((element)=>element['category'] == "Nuts"));

// list all the food items with category grains

console.log("list all the food items with category Grain ",data.filter((element)=>element['category'] == "Grain"));

// list all the food items with category dairy

console.log("list all the food items with category Dairy ",data.filter((element)=>element['category'] == "Grain"));

// list all the food items with calorie above 100

console.log("list all the food items with calorie above 100 ",data.filter( element => element["calorie"] > 100 ));

// list all the food items with calorie below 100

console.log("list all the food items with calorie below 100 ",data.filter( element => element['calorie']<100));


// list all the food items with highest protien content to lowest

console.log("list all the food items with highest protien content to lowest ",data.sort((a, b) => b.protiens - a.protiens));

// list all the food items with lowest protien content to highest

console.log("list all the food items with lowest protien content to highest ",data.sort((a, b) => a.protiens - b.protiens));
