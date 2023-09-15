//1.Write a function that determines whether a given string is a valid JSON or not.
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

console.log(isValidJSON('{"name": "John", "age": 30}'));
console.log(isValidJSON('{"name": "John", "age": 30,}'));
console.log(isValidJSON('{"name": "John", "age": "30"}'));
console.log(isValidJSON('{"name": "John", "age": 30, "city": "New York"}'));

//2. Write a function that finds the longest increasing subarray within an array of numbers.

function longestIncreasingSubarray(arr) {
  if (arr.length === 0) {
  }

  let currentSubarray = [arr[0]];
  let longestSubarray = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentSubarray.push(arr[i]);
    } else {
      currentSubarray = [arr[i]];
    }
    if (currentSubarray.length > longestSubarray.length) {
      longestSubarray = currentSubarray;
    }
  }
  return longestSubarray;
}

console.log(longestIncreasingSubarray([1, 2, 3, 1, 2, 3, 4, 5]));
console.log(longestIncreasingSubarray([5, 4, 3, 2, 1]));
console.log(longestIncreasingSubarray([1, 2, 3, 4, 3, 2, 1]));

//3. Implement a function that performs a deep comparison between two objects to check if they are equal.

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB));
console.log(deepEqual(objA, objC));

//4. Implement a function to calculate the factorial of a given non-negative integer using recursion.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(10));

//5. Write a function that finds all pairs of elements in an array that add up to a specific target sum.

function findPairsWithSum(arr, targetSum) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

console.log(findPairsWithSum([1, 2, 3, 4, 5], 7));
console.log(findPairsWithSum([1, 2, 3, 4, 5], 10));
console.log(findPairsWithSum([3, 4, 2, 1, 5], 8));

//6. Create a function that finds the largest common prefix among an array of strings.

//7.Create a function to find the nth prime number.

//8. Implement a function that sorts an array of objects by a specific property in ascending order.

function sortByProperty(arr, prop) {
  return arr.slice().sort((a, b) => a[prop] - b[prop]);
}

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

console.log(sortByProperty(people, "age"));

//9. Write a function that performs a deep merge of two objects, combining their properties.

function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = deepMerge(obj1[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 4, d: 5 }, e: 6 };
console.log(deepMerge(obj1, obj2));
