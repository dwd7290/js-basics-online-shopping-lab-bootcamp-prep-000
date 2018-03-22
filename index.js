var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 10) + 1;
 var addedItem = {itemName: item, itemPrice: price};
 cart.push(addedItem);
 return `${item} has been added to your cart`;
}

function viewCart() {
  // write your code here
  var list;
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } 
  
  for (var i=0; i<cart.length; i++) {
    if (i===0) {
      list = `${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else if (i === cart.length - 1){
      list += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } else {
      list += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
  }
  return `In your cart, you have ${list}.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart('Apple');
addToCart('Orange');
addToCart('Banana');
addToCart('Strawberries');
console.log(viewCart());