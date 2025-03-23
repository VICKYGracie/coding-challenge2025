// Coding Challenge Day 2 bulan 3 
// day 2/3/2025
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

// Cara yang pertama 
// const reverseSeq = (n) => {
//     const result = [];
//     for (let i = n; i >= 1; i--) { // Mengunakan Looping
//         result.push(i);
//     }
//     return result;
//   };


// cara yang kedua
// const reverseSeq = (n) => {
//     // return [...Array(n)];
//     return Array(n).fill().map((el, i) => i + 1) // bisa mengunakan 2 cara
//     .reverse();
//   }

// untuk cara singkatnya dari yang ke 2 dan menjadi 1 baris
// const reverseSeq = n => [...Array(n)].map((el, i) => i + 1).reverse();

//menggunakan cara yanga lain juga bisa 
const reverseSeq = n => [...Array(n)].map((el, i) => n - 1);


console.log(reverseSeq(5)); //[ 5, 4, 3, 2, 1]