const _ = require("lodash");

let numbers = [1, 2, 3, 4, 5];

let random = _.shuffle(numbers);
console.log(random);

console.log(_.sum(numbers));
