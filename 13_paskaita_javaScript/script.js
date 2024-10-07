// 1 Užduotis

console.log("Labas");

const myName = "Vita";
console.log(myName);

let age = 40;
console.log(age);

const student = true;
console.log(student);

const isKid = false;
console.log(isKid);

console.log("My name is " + myName + " my age is " + age + ".");

// 2 Užduotis

const personAge = 18;
const isCitizen = true;
const termOfLivingInDays = 40;

if (personAge < 18) {
    console.log("Balsuoti negali dėl amžiaus.");
} else if (isCitizen !== true) {
    console.log("Balsuoti negali dėl pilietybės.");
} else if (termOfLivingInDays >= 30) {
    console.log("Gali balsuoti.");
} else {
    console.log("Balsuoti negali dėl pragyvenimo trukmės.");
}

// 3 Užduotis

let humanAge = 35;
let bmi = 29;
let smokes = false;
const humanData = "Amžius " + humanAge + ", KMI " + bmi + ", Ar rūko? " + smokes + ". ";


if (humanAge > 50 && bmi > 30 && smokes === true) {
    console.log(humanData + "Labai didelė rizika." + " Patarimas: numesti svorio ir mesti rūkyti.");
} else if (humanAge > 50 || bmi > 30 || smokes === true) {
    console.log(humanData + "Didelė rizika." + " Patarimas: ar negalvojai, jog reiktų sumažinti svorį arba mesti rūkyti?");
} else if (humanAge >= 30 && humanAge <= 50 && bmi > 25 && bmi < 30 && smokes === false) {
    console.log(humanData + "Vidutinė rizika." + " Patarimas: daugiau sportuok ir nerūkyk.");
} else if (humanAge < 30 && bmi < 25 && smokes !== true) {
    console.log(humanData+ "Maža rizika." + " Patarimas: laikykis tokio režimo ir toliau.");
} else {
    console.log(humanData + "Neapibrėžta rizika." + " Patarimas: pasitark su šeimos gydytoju.");
}


