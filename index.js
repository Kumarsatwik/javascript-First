const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// console.log(data);

// list all the food items

function listAll() {
  console.log("List All Elements");
  data.forEach((element) => {
    console.log(element);
  });
}

// list all the food items with category vegetables

function VegetableCategory() {
  console.log("list all the food items with category vegetables");
  data.forEach((element) => {
    if (element["category"] == "Vegetable") {
      console.log(element);
    }
  });
}

// list all the food items with category fruit
function FoodFruitCategory() {
  console.log("list all the food items with category fruit");
  data.forEach((element) => {
    if (element["category"] == "Fruit") {
      console.log(element);
    }
  });
}
// - [ ]  list all the food items with category protien

function FoodProtienCategory() {
  console.log("list all the food items with category Protein");
  data.forEach((element) => {
    if (element["category"] == "Protein") {
      console.log(element);
    }
  });
}

// - [ ]  list all the food items with category nuts

function FoodNutsCategory() {
  console.log("list all the food items with category Nuts");
  data.forEach((element) => {
    if (element["category"] == "Nuts") {
      console.log(element);
    }
  });
}

// list all the food items with category grains

function FoodGrainCategory() {
  console.log("list all the food items with category Grain");
  data.forEach((element) => {
    if (element["category"] == "Grain") {
      console.log(element);
    }
  });
}

// list all the food items with category dairy

function FoodDairyCategory() {
  console.log("list all the food items with category Dairy");
  data.forEach((element) => {
    if (element["category"] == "Dairy") {
      console.log(element);
    }
  });
}

// list all the food items with calorie above 100

function CalorieAbove100() {
  console.log("list all the food items with calorie above 100");
  data.forEach((element) => {
    if (element["calorie"] > 100) {
      console.log(element);
    }
  });
}

// list all the food items with calorie below 100

function CalorieBelow100() {
  console.log("list all the food items with calorie below 100");
  data.forEach((element) => {
    if (element["calorie"] < 100) {
      console.log(element);
    }
  });
}

// list all the food items with highest protien content to lowest

function HighestProtien() {
  console.log("list all the food items with highest protien content to lowest");
  console.log(data.sort((a, b) => b.protiens - a.protiens));
}

// list all the food items with lowest protien content to highest

function LowestProtien() {
  console.log("list all the food items with lowest protien content to highest");
  console.log(data.sort((a, b) => a.protiens - b.protiens));
}

listAll();
VegetableCategory();
FoodFruitCategory();
FoodNutsCategory();
FoodProtienCategory();
FoodGrainCategory();
FoodDairyCategory();
CalorieAbove100();
CalorieBelow100();
HighestProtien();
LowestProtien();
