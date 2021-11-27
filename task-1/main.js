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
  return `${name} is now a legend.`;
}

let legendaryCelebs = celebs.map( (name) => makeLegend(name));

const vowels = ["A", "E", "I", "O", "U"]

let vowelCelebs = celebs.filter( (name) => vowels.includes(name[0]));

console.log("legendaryCelebs", legendaryCelebs);
console.log("vowelCelebs", vowelCelebs);
