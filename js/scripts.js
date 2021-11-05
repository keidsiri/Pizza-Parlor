function Pizza (size, sauce, topping) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
  this.price = 9.99;
}

const size = 


Pizza.prototype.priceCalculate = function() {
  if ( this.size === "X-large") {
    this.price += 6;
  } else if (this.size === "Large") {
    this.price += 4;
  } else if (this.size = "Medium") {
    this.price += 2;
  }
}




//select box for size : Small, medium, large, x-large
//select box for sauce : classic tomato, white garlic, pesto , BBQ
//topping : [pepperoni ,italian sausage, bacon, mushroom, onion, bell pepper, pineapple]