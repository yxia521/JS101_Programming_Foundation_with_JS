// 1000 Lights
// You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly 
// one light that is initially off. You walk down the row of switches and toggle every one of them, that is, 
// you flip every switch. All the lights are now on. You walk back to the beginning of the row and start 
// another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. 
// On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
// You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights 
// that are on after count passes.

// Examples:

// function lightsOn(switches) {
//   // ...
// }

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// input:
//   - total number of switches
// output:
//   - an array of lights that are on
// Rules
//   - All the lights are initially turned off.
//   - The first switch in the bank of switches is switch #1. There is no switch #0.
//   - For the nth round, every switch that is a multiple of nth gets toggled. 
//   For example, in the first round, all the switches get toggled because all integers are multiples 
//   of 1. In the second round, only the switches that are multiples of 2 get toggled.
//   - The number of switches dictates the number of rounds. For instance, if there are 10 switches 
//   then there will be 10 rounds of toggling.
//   - Return an array containing the switch numbers of the lights that are on after all the 
//   rounds have been completed.
  
// Algorithm:
// Loop through the rounds from 1 to count, and for each round:
//   - If the current round is nth, toggle the lights whose indices are multiples of nth.
//   - Use map to return a new array to represent the new states.
// Filter/map the lights array to return a new array containing the indices of the lights that are on.

function lightsOn(switches) {
  // initialize an object which all values are false (off)
  let allLights = {};
  for (let light = 1; light <= switches; light += 1) {
    allLights[light] = false;
  } 
  
  // toggle
  for (let round = 1; round <= switches; round += 1) {
    for (let pass = round; pass <= switches; pass += round) { // chief point of interest
      allLights[String(pass)] = !allLights[String(pass)]; // toggle those who are multiples of round
    }
  }
  
  let stringResult = Object.keys(allLights).filter(key => allLights[key] === true); // ['1', '4']
  return stringResult.map(string => Number(string));
}

// ls sol: uses array to store the lights
function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    // rounds: 1..count
    lights = toggleLights(lights, switchNum);
  }

  for (let idx = 0; idx < count; idx += 1) {
    // indices: 0..count-1
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result;
}

function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
   return (index + 1) % round === 0 ? !light : light;
 });
}
