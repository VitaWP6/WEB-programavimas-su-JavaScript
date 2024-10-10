// 1 Užduotis

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("-------------");

// 2 Užduotis

const numbers = [1, 3, 7, 8, 2, 10, 4, 5, 6, 9];

let sumOfNumbers = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        sumOfNumbers += numbers[i];
    }
}
console.log("Total sum of numbers greater than 5: " + sumOfNumbers);


// 3 Užduotis

const people = [ 
	{ name: 'Alice', age: 25, validResidence: true },
	{ name: 'Bob', age: 17, validResidence: true },
	{ name: 'Charlie', age: 30, validResidence: false },
	{ name: 'John', age: 13, validResidence: true },
	{ name: 'Amy', age: 24, validResidence: true }
];

let canVote = [];
let cantVote = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age >=18 && people[i].validResidence === true) {
        canVote.push(people[i].name);
    } else {
        cantVote.push(people[i].name);        
    }
}

console.log("People who can vote:");
for (let i = 0; i < canVote.length; i++) {
    console.log(canVote[i]);
}

console.log("They can't vote:");
for (let i = 0; i < cantVote.length; i++) {
    console.log(cantVote[i]);
}
