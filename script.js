// Part 1: Zodiac Signs
const zodiacSigns = [
  "Aries", 
  "Taurus", 
  "Gemini", 
  "Cancer", 
  "Leo", 
  "Virgo", 
  "Libra", 
  "Scorpio", 
  "Sagittarius", 
  "Capricorn", 
  "Aquarius", 
  "Pisces"
];

// Part 2: Current state or situation
const state = [
  "is currently wrapped in a cosmic embrace of pure luck",
  "is experiencing a temporary lack of coffee and motivation",
  "is radiating intense creative energy today",
  "is facing an unexpected yet exciting crossroads in life",
  "has an aura that attracts both adventure and lost socks"
];

// Part 3: Advice for the future or a prediction
const advice = [
  "so avoid making major decisions before two o'clock.",
  "so today is the time to go all-in!",
  "which means an unexpected mobile payment might be on its way.",
  "so make sure to keep an eye out for secret signs.",
  "and the stars advise you to take an extra-long nap."
];

// Function to retrieve a random element from an array
function randomElement(array) { 
  const randomIndex = Math.floor(Math.random() * array.length); 
  return array[randomIndex];
}

// Function that assembles the three parts into a horoscope
function generateHoroscope() {
  const part1 = randomElement(zodiacSigns); 
  const part2 = randomElement(state); 
  const part3 = randomElement(advice);
  
  // Combine the parts into a coherent message
  return `${part1} ${part2}, ${part3}`;
}

// Run the program and display the result in the console
console.log("--- Today's Random Horoscope ---");
console.log(generateHoroscope());
