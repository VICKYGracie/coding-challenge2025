// Coding Challenge Day 4 bulan 6 
// day 12/06/2025
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash (words) {
//    return words.join(' ')
// };


//Dibikin versi 1 baris
// const smash = (words) => words.join(' ')


// Versi Bar- Bar nya
function smash (words) {
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if (i != words.length - 1) result += ' ';
    }

    return result
};

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));