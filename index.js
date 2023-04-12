const HamburgerSize = {
    SMALL: { price: 50, calories: 20 },
    LARGE: { price: 100, calories: 40 },
  };
  
  const HamburgerStuffing = {
    CHEESE: { price: 10, calories: 20 },
    SALAD: { price: 20, calories: 5 },
    POTATO: { price: 15, calories: 10 },
  };

  class Hamburger {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      let price = this.size.price + this.stuffing.price;
      for (let topping of this.toppings) {
        price += topping.price;
      }
      return price;
    }
  
    calculateCalories() {
      let calories = this.size.calories + this.stuffing.calories;
      for (let topping of this.toppings) {
        calories += topping.calories;
      }
      return calories;
    }
  }

  const HamburgerTopping = {
    SPICE: { price: 15, calories: 0 },
    MAYO: { price: 20, calories: 5 },
  };

  // створюємо маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(HamburgerSize.SMALL, HamburgerStuffing.CHEESE);

// додаємо добавку з майонезу
hamburger.addTopping(HamburgerTopping.MAYO);

// виводимо калорійність
console.log("Calories: " + hamburger.calculateCalories());

// виводимо ціну
console.log("Price: " + hamburger.calculatePrice());

// додаємо приправу
hamburger.addTopping(HamburgerTopping.SPICE);

// виводимо ціну з приправою
console.log("Price with sauce: " + hamburger.calculatePrice());
