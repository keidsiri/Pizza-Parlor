// Business Logic

function Pizza (size, sauce, topping) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
  this.price = 0;
}



// Pizza.prototype.priceCalculate = function() {
//   this.price = 9.99;
//   if ( this.size === "X-large") {
//     this.price += 6;
//   } if (this.size === "Large") {
//     this.price += 4;
//   } if (this.size = "Medium") {
//     this.price += 2;
//   }
// }

Pizza.prototype.priceCalculate = function() {
  this.price = 0;
  if ( this.sauce === "BBQ") {
    this.price += 3;
  } if (this.sauce === "Pesto") {
    this.price += 2;
  } if (this.sauce = "White Garlic") {
    this.price += 1;
  }
  let totalTopping = 0;
  this.topping.forEach(function(topping) {
    switch(topping) {
      case ("Pepperoni"):
        totalTopping += 1;
      case ("Italian sausage"):
        totalTopping += 1;
      case ("Bacon"):
        totalTopping += 1;
      case ("Mushroom"):
        totalTopping += 1;
      case ("Onion"):
        totalTopping += 1;
      case ("Bell Pepper"):
        totalTopping += 1;
      case ("Pineapple"):
        totalTopping += 1;
      default:
      break;
    }
  });
  return this.price + totalTopping;
}

let test = new Pizza("Large", "BBQ", ["onion", "Bacon"])
test.priceCalculate();

//select box for size : Small, medium, large, x-large
//select box for sauce : classic tomato, white garlic, pesto , BBQ
//topping : [pepperoni ,italian sausage, bacon, mushroom, onion, bell pepper, pineapple]

// UI logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size option:selected").val();
    const sauce = $("#sauce option:selected").val();


  });
});
