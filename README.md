# Pizza Parlor

#### The 4th independent project to create the website company for customers to one or more individual topping and size to order the pizza and return the final price.

#### By: _Kate Kiatsiri_

## Technologies used
  1. HTML
  2. CSS
  3. Bootstrap
  4. Javascript & jQuery

## Description
This is the 4th independent project at Epicodus. This project is assigned to create the website for pizza company where user can create their own pizza and choose their own size, sauce and toppings and show the total cost of pizza based on those factors. You can check out this website <a href="https://keidsiri.github.io/Pizza-Parlor"> click here! </a>

## Set up/installation requirement
* Code editor required (such as Visual Studio Code) and Github account.
* Navigate this address https://github.com/keidsiri/Pizza-Parlor into your browser or 
<a href="https://github.com/keidsiri/Pizza-Parlor"> click here! </a>
* Clone this repository to your desktop.
* Navigate to the top of directory
* Connect to your Github repository
* Open files in VS code to view or edit
* Open file name _index.html_ in your browser to view this project.


## Known bugs
* _No known issues_

## License
MIT License _(https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Kate Kiatsiri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you have any questions please feel free to [Contact me](mailto:keidsiri@gmail.com)_

## Testing

Describe: Pizza() 

Test: "It should return a Pizza object with three properties for size, sauce and topping" <br>
Code: const myPizza = new Pizza("medium", "classic tomato", ["pepperoni", "onion"]);<br>
Expected Output:  Pizza { size: "medium" , toppings: ["pepperoni", "onion"]}<br>


test: "It should return a properties with in topping array"<br>
Code: const myPizza = new Pizza("medium", "classic tomato", ["pepperoni", "onion"]);<br>
Pizza.topping; <br>
Expected Output: ["pepperoni", "onion"]<br>

Describe: Pizza.prototype.priceCalculate()

Test: "It should calculate cost of pizza base on size ("Small", "Medium", "Large","Extra-large")<br>
code: let test = new Pizza("Large", "Classic tomato", ["onion"])<br>
test.priceCalculate();<br>
Expected Output: 13.99 (9.99 + 4)<br>

Test: "It should calculate cost of pizza base on sauce ("BBQ", "Pesto", "White Garlic")<br>
code: let test = new Pizza("Large", "BBQ", ["onion"])<br>
test.priceCalculate();<br>
Expected Output: 12.99 (9.99 + 3)<br>

Test: "It should calculate cost of pizza base on topping for $0.5 each if selected"<br>
code: let test = new Pizza("", "" , "Pepperoni")<br>
test.priceCalculate();<br>
Expected Output: 0.5<br>

Test: "It should calculate total cost of pizza based on size, sauce and toppings"<br>
code: let test = new Pizza("Large", "Pesto" , "Pepperoni", "Mushroom", "Bell Pepper)<br>
test.priceCalculate();<br>
Expected Output: 16.5<br>

Test: "It should calculate total cost of pizza plus delivery fee $5"<br>
code: let test = new Pizza("Large", "Pesto" , "Pepperoni", "Mushroom", "Bell Pepper)<br>
test.priceCalculate();<br>
Expected Output: 21.5<br>


