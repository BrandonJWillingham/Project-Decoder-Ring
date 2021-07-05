// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    let output = [];
    // decoding if encode is false
    if (encode == false && shift < 0) {
      shift = Math.abs(shift);
    } else if ( encode == false && shift > 0){
      shift = (0 - shift);
    }
    // checking if shift is less than -25 or greater than 25
    if (shift < -25 || shift > 25 || !shift ) return false;
    // converting to lowercase
    input = input.toLowerCase(); 
    // creating algorithm key
    const algoKey = "abcdefghijklmnopqrstuvwxyz"
    // matching algokey to input
    for (i = 0; i < input.length; i++ ){
      if (input[i] == " " || !algoKey.includes(input[i])){
        output.push(input[i]);
      }else {
      const searchTerm = input[i]
      const indexOfLetter = algoKey.indexOf(searchTerm)
      let newIndex;
      const shiftAmount = indexOfLetter + shift 
      // wrapping 
      if (shiftAmount < 0){
        newIndex = shiftAmount + 26;
      }else if (shiftAmount > 25){
        newIndex = shiftAmount - 26 }
      else{
        newIndex = shiftAmount
      }
      output.push(algoKey[newIndex])}
    }
    
    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports =  {caesar: caesarModule.caesar};
