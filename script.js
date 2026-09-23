// Part 1: Zodiac signs
const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", 
  "Leo", "Virgo", "Libra", "Scorpio", 
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

// Part 2: Current cosmic state
const currentStates = [
  "is currently floating in a cosmic embrace of pure luck",
  "is experiencing a temporary shortage of coffee and motivation",
  "is radiating with intense, untamed creative energy today",
  "is standing at an unexpected but highly exciting crossroads in life",
  "has a unique aura that attracts both adventure and missing socks"
];

// Part 3: Future advice or predictions
const futureAdvice = [
  "so avoid making any major life decisions before 2 PM.",
  "therefore it is time to risk it all and go big today!",
  "which means an unexpected surprise might be heading your way.",
  "so make sure to keep your eyes wide open for hidden universe signals.",
  "and the stars strongly advise you to take an extra long nap."
];

// Helper function to pick a random element from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Main function to assemble and display the horoscope
function generateHoroscope() {
  const sign = getRandomElement(zodiacSigns);
  const state = getRandomElement(currentStates);
  const advice = getRandomElement(futureAdvice);
  
  // Combine the parts into a cohesive message
  const finalMessage = `🌟 ${sign} ${state}, ${advice}`;
  
  // Inject the message into the HTML element with id="output"
  document.getElementById("output").innerText = finalMessage;
}

// Attach the function to the button click event once the DOM is ready
document.getElementById("generate-btn").addEventListener("click", generateHoroscope);
