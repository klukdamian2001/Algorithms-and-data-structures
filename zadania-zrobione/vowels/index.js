// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const regex = /[aeiou]/gi;
    const vowels = str.match(regex);
    const vowelsCount = vowels ? vowels.length : 0;
    return vowelsCount;
}

module.exports = vowels;
