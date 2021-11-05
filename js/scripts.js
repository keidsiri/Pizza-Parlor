function Pizza (size, sauce, topping) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
  this.price = 9.99;
}



Pizza.prototype.priceCalculate = function() {
  if ( this.size === "X-large") {
    return this.price += 6;
  } else if (this.size === "Large") {
    return this.price += 4;
  } else if (this.size = "Medium") {
    return this.price += 2;
  }
}

let test = new Pizza("Large", "Classic tomato", ["onion"])

test.priceCalculate();



//select box for size : Small, medium, large, x-large
//select box for sauce : classic tomato, white garlic, pesto , BBQ
//topping : [pepperoni ,italian sausage, bacon, mushroom, onion, bell pepper, pineapple]