const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

function makeLegend(name) {

  //Bonus Extension
  if (typeof name !== "string") {
    return "A legend requires a string";
  }
  
  return `${name} is now a legend.`;
}

const legendaryCelebs = celebs.map( (name) => makeLegend(name));

const vowels = ["A", "E", "I", "O", "U"]

const vowelCelebs = celebs.filter( (name) => vowels.includes(name[0]));

console.log("legendaryCelebs", legendaryCelebs);
console.log("vowelCelebs", vowelCelebs);

// Bonus Extension Test
const mixedArray = ["string", 1, null, ["hello", "goodbye"]];
const legendaryMixed = mixedArray.map( (e) => makeLegend(e));

console.log("legendaryMixed", legendaryMixed);