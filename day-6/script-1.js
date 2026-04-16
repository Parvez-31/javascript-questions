// QUESTION: 1
// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// }

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));

// QUESTION: 2
// function countVowelsAndConastants(str) {
//   str = str.toLowerCase();

//   let vowel = "aeiou";
//   let vowelCount = 0;
//   let constantCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (str[i] >= "a" && str[i] <= "z") {
//       if (vowel.includes(str[i])) {
//         vowelCount++;
//       } else {
//         constantCount++;
//       }
//     }
//   }

//   return { vowelCount, constantCount };
// }

// console.log(countVowelsAndConastants("hello world"));

// QUESTION: 3
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("parvez"));
// // without reverse , manual logic
// function x(str) {
//   let storeWord;
//   for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     storeWord = str[i];
//   }
//   return storeWord;
// }
// console.log(x("hossien"));

// QUESTION: 4
// METHOD: => slice
// function getMiddleThree(str) {
//   let mid = Math.floor(str.length / 2);
//   return str.slice(mid - 1, mid + 2);
// }

// console.log(getMiddleThree("parvez"));

// METHOD: => substring
// function getMiddleThree(str) {
//   let mid = Math.floor(str.length / 2);
//   return str.substring(mid - 1, mid + 2);
// }
// console.log(getMiddleThree("parvez"));

// QUESTION: 5
// function replaceSpace(str) {
//   return str.replace(/ /g, "-");
// }

// console.log(replaceSpace("I am learning Javascript"));

// QUESTION: 6
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("my name is parvez"));

// QUESTION: 7
// function inSubString(mainstr, substr) {
//   return mainstr.includes(substr);
// }

// console.log(inSubString("I am learning Javascript", "learning"));

// QUESTION: 8
// function countWord(paragraph, word) {
//   let words = paragraph.split(" ");
//   let count = 0;

//   for (let w of words) {
//     w = w.replace(/[^a-zA-Z]/g, "");
//     if (w.toLowerCase() === word.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// const text = "I am learning javascript, i love javascript";
// console.log(countWord(text, "javascript"));
