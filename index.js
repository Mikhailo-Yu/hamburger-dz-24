const HamburgerSize = {
  SMAL: {price: 50, calories: 20},
  LARGE: {price: 100, calories: 50} 
}

const HamburgerStuffing = {
  CHEESE: {price: 10, calories: 20},
  SALAD: {price: 20, calories: 5},
  POTATO: {price: 15, calories: 10}
} 
const HamburgerTopping = {
  MAYO: {price: 20, calories: 5},
  SPICE: {price: 15, calories: 0} 
}

class Hamburger  {
  constructor (size,  stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
  }

  addTopping (topping) {
    this.topping.push(topping); 
  }
  calculatePrice() {
   return this.size.price + this.stuffing.price + this.topping.reduce((acc, topping) => acc + topping.price, 0);
  }
  calculateCalories() {
   return this.size.calories + this.stuffing.calories + this.topping.reduce((acc, topping) => acc + topping.calories, 0);
  }
}

// маленький гамбурег
const hamburger = new Hamburger (HamburgerSize.SMAL, HamburgerStuffing.CHEESE);

//додаємо майонез
hamburger.addTopping(HamburgerTopping.MAYO);

// Дізнаємось скільки калорій
console.log('Calories: '  + hamburger.calculateCalories());

// Дізнаємось скільки коштує

console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(HamburgerTopping.SPICE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
// Дізнаємось скільки калорій
console.log('Calories: '  + hamburger.calculateCalories());