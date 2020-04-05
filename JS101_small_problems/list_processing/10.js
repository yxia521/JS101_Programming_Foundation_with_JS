// Inventory Item Availability
// Building on the previous exercise, write a function that returns true or false 
// based on whether or not an inventory item is available. As before, the function 
// takes two arguments: an inventory item and a list of transactions. The function 
// should return true only if the sum of the quantity values of the item's transactions 
// is greater than zero. Notice that there is a movement property in each transaction object. 
// A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// Examples:

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

// algo:
//  locate the movement by id
//   if the movement is in, quantity is positive, push the quantity to an array
//   if the movement is out, quantity is negativepu, push the quantity to an array
//   calculate the sum
//     - if sum < 0, false
//     - else sum > 0, true

function isItemAvailable(id, list) {
  let quantity = [];
  list.forEach(item => {
    if (item.id === id) {
      if (item.movement === 'out') {
        quantity.push(-item.quantity);
      } else {
        quantity.push(item.quantity);
      }
    }
  });
  return quantity.reduce((accum, num) => accum + num) > 0;
}

// ls sol: use Q9 function

function transactionsFor(id, list) {
  return list.filter(item => item["id"] === id);
}

function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}
