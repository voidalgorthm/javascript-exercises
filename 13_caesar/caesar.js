const caesar = (msg, shift) => {
  let encryptedMessage = '';

  // loop-like conditional to eliminate greater than alphabet size shifts (  > 26, resets to 1 )
  if (shift > 26) {
    shift = shift % 26;
  }

  // traverse through the message variable msg
  for (let index = 0; index < msg.length; index++) {
    let charCode = msg[index].charCodeAt();
    let shiftCode = charCode + shift;
    // lowercase basic latin letters
    if (charCode >= 65 && charCode <= 90) {
      if (shiftCode < 65) {
      shiftCode += 26;
      } else if (shiftCode > 90) {
        shiftCode -= 26;
      } // uppercase basic latin letters
    } else if (charCode >= 97 && charCode <= 122) {
      if (shiftCode < 97) {
        shiftCode += 26;
      } else if (shiftCode > 122) {
        shiftCode -= 26;
      }
    } else {
      shiftCode = charCode;
    }
    encryptedMessage += String.fromCharCode(shiftCode);
  }

  return encryptedMessage;
};

// Do not edit below this line
module.exports = caesar;
