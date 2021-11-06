// Business Logic

function Pizza (size, sauce, topping, delivery) {
  this.size = size;
  this.sauce = sauce;
  this.topping = topping;
  this.order = delivery;
  this.price = 10;
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
  let totalTopping = 0;
  
  if ( this.size === "X-large") {
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

    this.topping.forEach(function(topping) {
      switch(topping) {
        case ("Pepperoni"):
          totalTopping += 1;
          break;
        case ("Italian sausage"):
          totalTopping += 1;
          break;
        case ("Bacon"):
          totalTopping += 1;
          break;
        case ("Mushroom"):
          totalTopping += 1;
          break;
        case ("Onion"):
          totalTopping += 1;
          break;
        case ("Bell Pepper"):
          totalTopping += 1;
          break;
        case ("Pineapple"):
          totalTopping += 1;
          break;
        default:
        break;
      }
    });
  return this.price + totalTopping;
}

let test1 = new Pizza("X-large", "BBQ", ["Onion", "Bacon"])
test1.priceCalculate();

//select box for size : Small, medium, large, x-large
//select box for sauce : classic tomato, white garlic, pesto , BBQ
//topping : [pepperoni ,italian sausage, bacon, mushroom, onion, bell pepper, pineapple]





// UI logic
function displayPrice(pizza) {
  $(".result").show();
  $("#your-size").text(pizza.size);
  $("#your-sauce").text(pizza.sauce);
  if (pizza.order) {
    $("#your-delivery").text("We will deliver this pizza to you!");
  } else {
    $("#your-delivery").text("YOur pizza will be ready to pick up in 15 minutes!");

  }
  pizza.priceCalculate();
  $("#your-price").text("$" + pizza.price.toFixed(2));
}

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size option:selected").val();
    const sauce = $("#sauce option:selected").val();
    const topping = $(".topping option:selected").html(); 

    let delivery = false;
    if ($("input:checked").val()) {
      delivery = true;
    }
    let myPizza = new Pizza (size ,sauce ,topping, delivery);
    displayPrice(myPizza);
  });
});
