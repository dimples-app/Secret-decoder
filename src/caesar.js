const caesarModule = (function () {
  // you can add any code you want within this function scope

  
  const regex = "[a-zA-Z]";

  /**
   *  Helper function to convert input to lowercase
   * @param {*} input 
   * @returns string with lower case
   */

  function convertToLowerCase(input) {
    const stringWithLowerCase = input.toLowerCase();
    return stringWithLowerCase;
  } 

  /**
   *  Helper function to shift letter
   * @param {*} letter 
   * @param {*} shift 
   * @returns 
   */

  function shiftletter(letter, shift) {
    let newLetter ="";
    let currentLetter = letter.charCodeAt(0);
    let newLetterCode = currentLetter + shift;

    if (newLetterCode < 97) {
      newLetterCode += 26;
    } else if (newLetterCode > 122) {
      newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);

    return newLetter;
  }

  /**
   * function with caesar shift algorithm
   * @param {*} input 
   * @param {*} shift 
   * @param {*} encode 
   * @returns  
   */

  function caesar(input, shift, encode = true) {

    let encryptedMessage = "";
    const inputInLowercase = convertToLowerCase(input);
    let messageToBeEncrypted = [...inputInLowercase];

    if( !shift || shift === 0 || shift < -25 || shift > 25 ) {
      return false;
    }

    if (encode) {
       messageToBeEncrypted = messageToBeEncrypted.forEach ((char) => {
        if (!char.match(regex)) {
          return encryptedMessage += char;
        }
         encryptedMessage += shiftletter(char, shift);        
      })

       //console.log(encryptedMessage);
    } else {

      messageToBeEncrypted = messageToBeEncrypted.forEach ((char) => {
        if (!char.match(regex)) {
          return encryptedMessage += char;
        }
         encryptedMessage += shiftletter(char, shift);        
      })
      console.log(encryptedMessage);
    }
      return encryptedMessage;
  } 
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
