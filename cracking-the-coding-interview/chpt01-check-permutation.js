/*
Given two strings, write a method to decide if one is a permutation of the other
*/

//CHECK PERMUTATION BY LOOPING THROUGH ONE
// THEN MODIFYING THE OTHER
var permutation1 = function(s1, s2){
  var s1Arr = s1.split("");
  var s2Arr = s2.split("");

  if(s1.length !== s2.length){
    return false;
  }

  for (var i = 0; i < s1Arr.length; i++){
    var foundIndex = s2Arr.indexOf(s1Arr[i]);
    if (foundIndex > -1){
      s2Arr.splice(foundIndex, 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(permutation1("hoops", "hoojs"));


//SORT THEM FIRST, THEN COMPARE
var permutation2 = function(s1, s2){
  var s1Arr = s1.split("");
  var s2Arr = s2.split("");

  if (s1.length!== s2.length) {
    return false;
  } 

  if (s1Arr.sort().join("") !== s2Arr.sort().join("")){
    return false;
  }
  return true;

}
console.log(permutation2("hoo", "ooh"));

//MOST EFFICIENT SOLUTION, USE A DATASTRUCTURE
//Time Complexity: O(a + b)
var isPermutation = function(s, t) {
    var sLength = s.length;
    var tLength = t.length;

    if (sLength !== tLength) {
      return false;
    }

    //create an array of 256 elements all set to 0
    var s_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);

    for (var i = 0; i < sLength; i++) {
      //charCodAt(0) checks the 0th element left of the . (just one letter in this case) and returns the ASCII character code for that element, and increments it
      s_array[s[i].charCodeAt(0)]++;
    }

    //loop through second string and decrement the letter at each letter
    //if that index ever goes below 0, you know it is not a permutation
    for (var i = 0; i < tLength; i++) {
      if (--s_array[t[i].charCodeAt(0)] < 0){
        return false;
      }
    }
    return true;
}

isPermutation("hello", "elloh");

