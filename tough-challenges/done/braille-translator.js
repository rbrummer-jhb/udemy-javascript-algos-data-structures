/*
The following picture represents the Braille alphabet.

For the purpose of this exercise, each dot will be represented as a '1' and each
blank as a '0' meaning that 'a' will be represented by '100000' and 'b' as '110000'
(reading from top left to bottom left then top right to bottom right within each block)

Your goal is to complete the 'translateToBraille()' function to return a given string
input into a string output in Braille.

Note: the Braille character for 'space' is '000000' and to capitalize a character,
use '000001' in before your character, i.e. 'A' = '000001100000'.
*/

let alphabet = {
    'a': '100000',
    'b': '110000',
    'c': '100100',
    'd': '100110',
    'e': '100010',
    'f': '110100',
    'g': '110110',
    'h': '110010',
    'i': '010100',
    'j': '010110',
    'k': '101000',
    'l': '111000',
    'm': '101100',
    'n': '101110',
    'o': '101010',
    'p': '111100',
    'q': '111110',
    'r': '111010',
    's': '011100',
    't': '011110',
    'u': '101001',
    'v': '111001',
    'w': '010111',
    'x': '101101',
    'y': '101111',
    'z': '101011',
    ' ': '000000'
}

function translateToBraille(s) {
    let brailleStr = '';

    for (let letter of s.split('')) {
        if (letter === letter.toUpperCase() && letter !== ' ') {
            brailleStr += `000001${alphabet[letter.toLowerCase()]}`;
        } else {
            brailleStr += alphabet[letter];
        }
    }
    return console.log(brailleStr);
}

translateToBraille('AaBbc ');