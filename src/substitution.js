// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || !input) return false
    for (letter of alphabet){ //unique letter's index will always equal last index
      if(alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) return false;
    }

    input = input.toLowerCase();
    let output= [];
    const originalAlpha = "abcdefghijklmnopqrstuvwxyz "
    alphabet = [ ...alphabet, " "]


    
    if (encode == true){
      for(i=0; i< input.length; i++){
        const searchItem = input[i];
        if (!originalAlpha.includes(input[i])) return false;        
        else {
        output.push(alphabet[originalAlpha.indexOf(searchItem)])
        }
      }
    }else{ //decoding  
      for(i=0; i< input.length; i++){
        const searchItem = input[i];
        if (!alphabet.includes(input[i])) return false;        
        else{ 
        output.push(originalAlpha[alphabet.indexOf(searchItem)])
        }
      }
    }
    if (output.includes(undefined)) return false;
    return output.join("");
  }

  return {
    substitution,
  };
})();

module.exports =  {substitution: substitutionModule.substitution};
