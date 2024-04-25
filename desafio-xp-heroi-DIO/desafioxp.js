let heroName = "Frodo";
let xp = 5000;

let message;

if(xp < 1000) {
  message = `The Hero named ${heroName} is at the level of Iron`;
} else if(xp < 2001) {
  message = `The Hero named ${heroName} is at the level of Bronze`;
} else if(xp < 5001) {
  message = `The Hero named ${heroName} is at the level of Silver`; 
} else if(xp < 7001) {
  message = `The Hero named ${heroName} is at the level of Gold`;
} else if(xp < 8001) {
  message = `The Hero named ${heroName} is at the level of Platinum`;
} else if(xp < 9001) {
  message = `The Hero named ${heroName} is at the level of Ascending`;
} else if(xp < 10001) {
  message = `The Hero named ${heroName} is at the level of Immortal`;
} else {
  message = `The Hero named ${heroName} is at the level of Radiant`;
}

console.log(message);