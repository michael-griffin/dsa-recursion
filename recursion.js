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

/*
  "wow"
  w === w && isPalindrome(o) (-> true)
  o < 2 -> true
*/

function isPalindrome(str) {
  //base case length <2
  if (str.length < 2) return true;

  const len = str.length;
  //whether letters on either end match AND isPalindrome (slice 1, length-1)
  return str[0] === str[len - 1] && isPalindrome(str.slice(1, len - 1));
  // if (str[0] !== str[len - 1]) return false;
  // else return isPalindrome(str.slice(1, len - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  const lastIndex = str.length - 1;
  return str[lastIndex] + revString(str.slice(0, lastIndex));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

/*
["duck", "cat", "cat", "dog"], "platypus"

d != p -> 1 + findIndex(...) || -1 -> -1
c != p -> 1 + findIndex(...) || -1 -> 0
c != p -> 1 + findIndex(...) || -1 ->0
d != p -> 1 + findIndex(...) || -1 -> 0
length 0 -> -1


1 + (findIndex === -1) === 0 -> false
*/

function findIndex(arr, val) {
  if (arr.length === 0) return -1;

  if (arr[0] === val) return 0;
  return 1 + findIndex(arr.slice(1), val) || - 1;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let strings = [];
  for (let key in obj){
    if (typeof(obj[key]) === "string"){
      strings.push(obj[key]);
    } else if (typeof(obj[key] === "object")){
      strings.push(...gatherStrings(obj[key]))
    }
  }
  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

// [0, 1, 2, 3, 4]
//Check mid, if less -> call binarySearch on slice(0,mid)
//if greater -> call binarySearch on slice(mid+1)



function binarySearch(arr, val) {
  if (arr.length === 0) return false;

  let mid = Math.floor((arr.length - 1)/2);

  if (arr[mid] === val) return true;
  if (arr[mid] > val) return binarySearch(arr.slice(0, mid), val);
  else return binarySearch(arr.slice(mid+1), val);
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

/*
  if on left: return the index
  if on the right return current mid + recursive result -- but, split up so that we don't have to do crazy OR thing

  binarySearchIndex([1, 2, 3, 4], 4)

  mid = 1
  arr[1] === 2 (< 4)
    -> fn([3,4], 4) (awaiting return) mid is 1
      -> fun([4], 4) (awaiting return) mid is 0
        -> 0

*/
function binarySearchIndex(arr, val) {
  if (arr.length === 0) return -1;

  const mid = Math.floor((arr.length - 1) / 2);

  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearchIndex(arr.slice(0, mid), val);
  else{
    const returnedIndex = binarySearchIndex(arr.slice(mid + 1), val);
    if (returnedIndex === -1) return -1;
    else return mid + 1 + returnedIndex;
  }

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

/** "Returns boolean based on whether brackets are ordered and closed properly" */

expect(balancedBrackets('')).toBe(true);
expect(balancedBrackets('hello')).toBe(true);
expect(balancedBrackets('(hi)[there]')).toBe(true);
expect(balancedBrackets('[()][(a)(b)]()')).toBe(true);

function balancedBrackets(str, left = "") {
  //go until we hit a left bracket.
  //Then: if left -> drop down
  //If right, compare and return

  '(hello)'

  for (let i = 0; i < str.length; i++){
    const char = str[i];
    if ("([{".includes(char)){
      left = char + left;
    }
    if (")]}".includes(char)){
      if (char !== left[0]) { //technically, right flipped left
        return false;
      } else {
        left = left.slice(1);
      }
    }
  }

  // return true;
}

function checkBracketPairs(char1, char2) {
  console.log("Comparing", char1, char2);
  if (char1 === "(" && char2 === ")") return true;
  if (char1 === "[" && char2 === "]") return true;
  if (char1 === "{" && char2 === "}") return true;

  return false;
}


  // /*
  //   l pointer, r pointer
  //   looping through, hit a l bracket
  //    -> keep going right until we hit a match
  // */

  // for (let i = 0; i < str.length; i++){
  //   const char = str[i];
  //   if (")]}".includes(char)){
  //     for(let j = i -1; j >= 0; j--){
  //       const reverseChar = str[j];
  //       if ("([{".includes(reverseChar)){
  //         if (!checkBracketPairs) return false;
  //         str.split("").splice(j, i-j).join("");
  //       }
  //       return false;
  //     }
  //   }
  // }

// const char *match(const char *str)
// {
//         if( *str == '\0' || *str == ')' ) { return str; }
//         if( *str == '(' )
//         {
//                 const char *closer = match(++str);
//                 if( *closer == ')' )
//                 {
//                         return match(++closer);
//                 }
//                 return str - 1;
//         }

//         return match(++str);
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
  balancedBrackets
};
