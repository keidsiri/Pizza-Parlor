// Business Logic

function Pizza (size, sauce, topping1, topping2, topping3, delivery) {
  this.size = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.order = delivery;
  this.price = 10;
}

Pizza.prototype.priceCalculate = function() {
  
  if ( this.size === "Extra-large") {
    this.price += 4;
  } if (this.size === "Large") {
    this.price += 3;
  } if (this.size === "Medium") {
    this.price += 2;
  } 
  if ( this.sauce === "BBQ") {
    this.price += 3;
  } if (this.sauce === "Pesto") {
    this.price += 2;
  } if (this.sauce === "White Garlic") {
    this.price += 1;
  } if (this.order) {
    this.price += 5;
  }
  if (this.topping1) {
    this.price += 0.5;
  }
  if (this.topping2 ) {
    this.price += 0.5;
  }
  if (this.topping3 ) {
    this.price += 0.5;
  }
  return this.price;
}


// let test1 = new Pizza("X-large", "BBQ", ["Onion", "Bacon"])
// test1.priceCalculate();

// UI logic

function displayPrice(pizza) {
  $(".result").show();
  $("#your-size").text("Size : " + pizza.size);
  $("#your-sauce").text("Sauce : " + pizza.sauce);
  $("#your-topping1").text("Topping: " + pizza.topping1);
  $("#your-topping2").text(pizza.topping2);
  $("#your-topping3").text(pizza.topping3);
  if (pizza.order) {
    $("#your-delivery").text("We will deliver this pizza to you!");
  } else {
    $("#your-delivery").text("Your pizza will be ready to pick up in 15 minutes!");

  }
  pizza.priceCalculate();
  $("#your-price").text("Total is $" + pizza.price.toFixed(2));
}

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size option:selected").val();
    const sauce = $("#sauce option:selected").val();
    const topping1 = $("#topping1 option:selected").html();
    const topping2 = $("#topping2 option:selected").html();
    const topping3 = $("#topping3 option:selected").html();

    let delivery = false;
    if ($("#delivery:checked").val()) {
      delivery = true;
    }
    let myPizza = new Pizza (size ,sauce ,topping1, topping2, topping3, delivery);
    displayPrice(myPizza);
  });
});

