/** product: calculate the product of an array of numbers. */

//[2, 3, 4]
// 2 * product([3, 4])
// 3 * [4]
//4 * []
//[] -> 1
function product(nums) {
  //basecase should be length === 0, return 1
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */


//base case: words.length = 1, return words[0].length
//['boo']
//current = 3;
//Math.max(3, longest([])) -> max(3, 0)
function longest(words) {
  if (words.length === 0) return 0;

  let currentLength = words[0].length;
  return Math.max(currentLength, longest(words.slice(1)));
}



/** everyOther: return a string with every other letter. */

//hello
//h + everyOther('llo') 'hlo'
//l + everOther('o') 'lo'
//o + everyOther([]) -> 'o'
function everyOther(str) {
  if (str.length === 0) return '';

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */
//["duck", "cat", "pony"]
function find(arr, val) {
  if (arr.length === 0) return false;

  return (arr[0] === val) ? true : find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
