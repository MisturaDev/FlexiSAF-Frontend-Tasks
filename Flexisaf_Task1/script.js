let numbers = [1, 2, 3, 4, 5];

// map()
const doubled = numbers.map(n => n * 2);
document.getElementById('map-output').innerText = `map(): ${doubled}`;

// filter()
const filtered = numbers.filter(n => n > 2);
document.getElementById('filter-output').innerText = `filter(): ${filtered}`;

// reduce()
const sum = numbers.reduce((acc, n) => acc + n, 0);
document.getElementById('reduce-output').innerText = `reduce(): ${sum}`;

// forEach()
let forEachResult = '';
numbers.forEach(n => forEachResult += n + ' ');
document.getElementById('forEach-output').innerText = `forEach(): ${forEachResult}`;

// splice()
let spliceArray = [...numbers]; 
spliceArray.splice(2, 1); 
document.getElementById('splice-output').innerText = `splice(): ${spliceArray}`;
