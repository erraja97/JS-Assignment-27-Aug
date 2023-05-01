/**
 * Question 22: 25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
 */

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log("Added Meat", shoppingCart);

shoppingCart.push("Sugar");
console.log("Added Sugar", shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log("Removed Honey", shoppingCart);

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log("Modified Tea with Green Tea", shoppingCart);
