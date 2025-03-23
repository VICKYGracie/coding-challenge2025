// Coding Challenge Day 3 bulan 3 
// day 3/3/2025
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// Judul: Is he gonna survive?


// Cara babar 
// function hero(bullets, dragons){
//     if(bullets / 2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Cara ke dua bikin lebih singkat
// function hero(bullets, dragons) {
//     // truthy / falsy
//     return bullets / 2 >= dragons;
// }

//Cara ketiga bikin lebih singkat lagi
const hero = (bullets, dragons) => bullets / 2 >= dragons; 

console.log(hero(10, 5));

