// Coding Challenge Day 1 bulan 3 
// day 1/3/2025
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript



// cara yang pertama

// function grow(x) {
//     let result = x[0];
//     for (let i =1; i < x.leght; i++) {
//         result *= x[i];
//     }
//     return result
// }

// cara yang kedua
// function grow(x) {
//     const result = x.reduce ((acc, curr) => acc * curr, 1);
//     return result;
// }


// cara yang ketiga membuat satu baris
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1); 
 
 console.log(grow([1, 2, 3, 4])); // 24
