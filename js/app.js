// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

let oldInvt = inventors.filter(function(inventor) {
  return inventor.year >= 1500 && inventor.year < 1600
});
console.log(oldInvt)

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.

let invNames = inventors.map(function(inventor) {
  return {first: inventor.first , last: inventor.last}
});
console.log(invNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest.

let invBday = inventors.sort((a, b) => a.year - b.year)
console.log(invBday)

// 4. Sort the inventors by years lived from shortest to longest-lived.

let invLife = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
console.log(invLife)

// Array.prototype.reduce()
// 5. Find how many years all the inventors lived combined.

// let invLifeCombined = inventors.reduce((a, b) => a.passed - a.year + b.passed - b.year)
// let invLifeCombined = inventors.reduce(function(a, b) {  
//   return YearsLived: (a.passed - a.year) + b.passed - b.year;
// });

// let totalYears = inventors.reduce((a, b) => {a += (a.passed - a.year) + (b.passed - b.year || 0), 0;
// });
let total = inventors.reduce((total, inventor) => total += (inventor.passed-inventor.year), 0)
console.log(total)

const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".

let firstLast = people.map((person) => person = person.split(', ').reverse().join(' '));
console.log(firstLast);


const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint: Return an object where the keys are 'car', 'truck', etc., and the value is the total number of times each data item appears.

// let instances = data.reduce((object, instances) => instances[object] += 1);
let instances = data.reduce(function(a, b) {
  if(typeof a[b] === 'undefined') {
    a[b] = 1;
  } else {
    a[b] += 1;
  }

  return a;
}, {});

console.log(instances);


const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older.

let nineteenPlus = devs.some(function(dev) {
  let date = new Date();
  let year = date.getFullYear();

  return dev.year <= year - 19;
});

console.log(nineteenPlus);

// Array.prototype.every()
// 9. Check if everyone is 19 or older.

let allAges = devs.every(function(dev, index) {
  let date = new Date();
  let year = date.getFullYear();
  
  return dev.year <= year - 19;
});

console.log(allAges);

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423.

let findComment = comments.find((comment) => comment.id === 823423);
console.log(findComment);


// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523.

let findIndex = comments.findIndex((comment) => comment.id === 123523);
console.log(findIndex);