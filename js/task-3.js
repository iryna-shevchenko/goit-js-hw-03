'use strict';

// Задача 3. Фільтрація масиву чисел

function filterArray(numbers, value) {
  let numArray = [];

  for (const iterElement of numbers) {
    if (iterElement > value) {
      numArray.push(iterElement);
    }
  }

  return numArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]