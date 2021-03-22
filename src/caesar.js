const caesarModule = (function () {
  // you can add any code you want within this function scope
  const encryptedMessage = "";
  const regex = /[A-Z]/gi

  /**
   * Helper Function to shift character
   * @param {letter} any 
   * @param {shift} any
   * @returns 
   */

  function shiftingCharacter(letter, shift) {
    const encryptedLetter = "";
    const currentLetterCode = letter.charCodeAt(0);
    const newLetterCode = currentLetterCode + shift;

    if (newLetterCode < 97) {
      newLetterCode += 26;
    } else if (newLetterCode > 122) {
      newLetterCode -= 26;
    } 

    encryptedLetter = letter.fromCharCode(newLetterCode);

  return encryptedLetter;

  }

  function caesar(input, shift, encode = true) {

    const encryptWord = input.split(" ");

    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }

    // shfif letter when !letter.match(regex)
    if (encode) {

      encryptWord = encryptWord.map( (letter) => {
        if (!letter.match(regex)) {
          return letter;
        } 
        const rightShift = shiftingCharacter(letter, shift);    
        console.log(rightShift);
        return  rightShift
      });
     
    } else {

      encryptWord = encryptWord.map( (letter) => {
        if (!letter.match(regex)) {
          return letter;
        } 
        const leftShift = shiftingCharacter(letter, shift * -1);  
        console.log(leftShift);
        return leftShift;

      });
    } 
    
    encryptedMessage = encryptWord.join("");

      console.log(encryptedMessage);
      return encryptedMessage;
   
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
