function reversedString(word){
  const wordarray =word.split("")
  const reversedwordarray = wordarray.reverse();
  const reversedword =reversedwordarray.join("")
  return reversedword;
}

function isPalindrome(word) {
  const reversedword = reversedString(word)
  if(word === reversedword){
    return true
  }
  else{
    return false
  }
}

/* 
  if reversed string = normal string
    return true
  else
    return false
*/
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
