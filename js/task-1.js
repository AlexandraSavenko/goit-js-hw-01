function makeTransaction(a, b) {
  return `Your order ${a} droids worth ${a * b} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

function makeTransaction(quantity, pricePerDroid) {
  return `Your order ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
console.log(makeTransaction(10, 600));
