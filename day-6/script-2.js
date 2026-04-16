// QUESTION: 1
// function sortString(str) {
//   return str.toLowerCase().split("").sort().join("");
// }
// console.log(sortString("parvez"));

// QUESTION: 2
// function removeDuplicates(str) {
//   let result = "";

//   for (let char of str) {
//     if (!result.includes(char)) {
//       result = result + char;
//     }
//   }
//   return result;
// }

// console.log(removeDuplicates("programming"));

// function removeDuplicates(str) {
//   return [...new Set(str)];
// }
// console.log(removeDuplicates("programming"));

// QUESTION: 3
// function isAnagram(str1, str2) {
//   let s1 = str1.toLowerCase().split("").sort().join("");
//   let s2 = str2.toLowerCase().split("").sort().join("");

//   return s1 === s2;
// }

// console.log(isAnagram("listen", "silent"));

// QUESTION: 4
// function maskNumber(num) {
//   let str = num.toString();
//   let lastFour = str.slice(-4);
//   let masked = "*".repeat(str.length - 4);

//   return masked + lastFour;
// }

// console.log(maskNumber(9876543210));

// QUESTION: 5
// function longestWord(sentence) {
//   let words = sentence.split(" ");
//   let longest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }

// console.log(longestWord("I am learning JavaScript programming"));

// QUESTION: 6
// function getActualLength(str) {
//   let trimmed = str.trim();
//   return trimmed.length;
// }

// console.log(getActualLength("   hello world   ")); // 11

// QUESTION: 7
// function toTitleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(toTitleCase("i am learning javascript"));

// QUESTION: 8
// function checkSameStartEnd(str) {
//   if (str.length === 0) return false;
//   return str[0] === str[str.length - 1];
// }

// console.log(checkSameStartEnd("level"));
// console.log(checkSameStartEnd("hello"));
