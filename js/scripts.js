// Business Logic

function Pizza (size, sauce, topping) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
  this.price = 9.99;
}



// Pizza.prototype.priceCalculate = function() {
//   if ( this.size === "X-large") {
//     return this.price += 6;
//   } if (this.size === "Large") {
//     return this.price += 4;
//   } if (this.size = "Medium") {
//     return this.price += 2;
//   }
// }

Pizza.prototype.priceCalculate = function() {
  if ( this.sauce === "BBQ") {
    return this.price += 3;
  } if (this.sauce === "Pesto") {
    return this.price += 2;
  } if (this.sauce = "White Garlic") {
    return this.price += 1;
  }
}



let test = new Pizza("Large", "BBQ", ["onion"])
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
