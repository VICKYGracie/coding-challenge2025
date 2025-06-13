// Coding Challenge Day 5 bulan 6 
// day 13/06/2025
//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// };

//Dikali
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return fuelLeft * mpg >= distanceToPump;
// };

//Satu Baris
const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;


console.log(zeroFuel(50, 25, 2))