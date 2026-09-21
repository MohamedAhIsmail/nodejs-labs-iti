//Task 1 ==========================================

function calcSum(num1, num2) {
  return num1 + num2;
}

let result = calcSum(3, 5);

console.log(result);

// Task 2 ==========================================

function isPrime(number) {
  if (number <=1 ) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false
  }
  return true
}
let isPrimeNumber = isPrime(13)
console.log("Prime Number:", isPrimeNumber)

// Task 3 ==========================================

function reverseString(str) {
  return str.split("").reverse().join("");
}

let word = reverseString("hello");
console.log(word);

let word2 = reverseString("Mohamed");
console.log(word2);

// Task 4 ==========================================

// let arr = [1, 3, 7, 2, 4]

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let final = findLargestNumber([1, 3, 7, 2, 4]);
console.log(final);

// Task 5 ==========================================

function filterEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

const resulteven = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(resulteven);

// Task 6 ==========================================

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let revString = reverseString("route");
console.log(revString);

// Task 7 ==========================================

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let avg = calculateAverage([1, 2, 3, 4, 5]);
console.log(avg);

//Task 8 ==========================================

function checkDay(day) {
  if (day === 7 || day === 6) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(checkDay(7));
console.log(checkDay(5));

// Task 9 ==========================================

function filterDivisible(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

let devs = filterDivisible([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(devs);

//Task 10 ==========================================

function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 2));
console.log(findIndex([1, 2, 3, 4, 5], 10));

// Task 11 ==========================================
function calculateFactorial(num) {
  if (num < 0) {
      return "Invalid input";
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
      factorial *= i;
  }
  return factorial;
}

console.log(calculateFactorial(3));


//Task 12 ==========================================

function getObjectKeys(obj) {
  let keys = [];
  for (let key in obj) {
      keys.push(key);
  }
  return keys;
}

let objKeys = getObjectKeys({ name: "John", age: 30, country: "EGY" });
console.log(objKeys);

// Task 13 ==========================================

function UniqueNumbers(arr) {
  let uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
          uniqueNumbers.push(arr[i]);
      }
  }
  return uniqueNumbers;
}

let uniqe = UniqueNumbers([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqe);

//Task 14 ==========================================

function countCharacters(str) {
  let charCount = {};
  for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

let count = countCharacters("hello");
console.log(count);


//Task 15 ==========================================

function sortNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}

const sorted = sortNumbers([5, 3, 8, 1, 2]);
console.log(sorted);


// Task 16 ==========================================


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }

  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log("Anagrams:", isAnagram("listen", "silent"));



// Task 17 ==========================================

function Car(model, year) {
  this.model = model;
  this.year = year;
  this.displayDetails = function() {
      return `Model: ${this.model}, Year: ${this.year}`;
  };
}

let car = new Car("Toyota", 2020);
console.log(car.displayDetails());


// Task 19 ==========================================

function containsProperty(obj, property) {
  return Object.keys(obj).includes(property)
}

console.log(containsProperty({ name: "Alice", age: 25 }, "name"));
console.log(containsProperty({ name: "Alice", age: 25 }, "country"))


// Task 20 ==========================================

function calculate(num1, num2, operator) {
  switch (operator) {
      case "+":
          return num1 + num2;
      case "-":
          return num1 - num2;
      case "*":
          return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2
        } else {
          return "Cannot divide by zero";
        }
      default:
          return "Invalid operator";
  }
}

console.log(calculate(5, 3, "+"));
console.log(calculate(5, 3, "-"));
console.log(calculate(5, 3, "*"));
console.log(calculate(5, 3, "/"));
console.log(calculate(5, 3, "%"));





