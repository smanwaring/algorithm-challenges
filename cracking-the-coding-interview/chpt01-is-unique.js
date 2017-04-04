/*
Implement an algorithm to determine if a string has all unique chars.
What if you cannot use an additional data structure?

Questions to ask:
- Is it just regular alphabet?
- Do caps matter?

*/

//SOLUTION 1
//Time Complexity: O(n)
let isUnique = function(str){
  let stringObj = {};
  for (let i = 0; i < str.length; i++){
    if (stringObj[str[i]]){
      return false;
    } else {
      stringObj[str[i]] = true;
    }
  }
  return true;
};

//isUnique("hello") will return false
//isUnique("heLlo") will return true

//SOLUTION 2

//Assuming ASCII characters (256 or 128)
//Assuming you cannot use a data structure
//Time Complexity: O(n)
function hasUniqueChars(str) {
	//can't have unique characters if string length is greater than the # of possible characters
	if (str.length > 256) {
	  return false;
	}
	for (var i = 0; i < str.length; i++) {
	  //if the first found index does not equal the lastIndex of
	  // OR the last found index of the letter does not equal i 
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) || str.lastIndexOf(str[i]) !== i) {
			return false;
		}
	}
	return true;
}
