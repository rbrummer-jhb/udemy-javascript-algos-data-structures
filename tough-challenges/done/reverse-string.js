/*
The following code is meant to take individual words in a sentence and reverse
the characters of those words while keeping all punctuation and spaces in the
same place.

Unfortunately, the 'reverseWords()' function does not complete, and we suspect
it may also contain logical errors. Your goal is to fix the code so that it
compiles correctly, and returns the right answer.
*/

function reverseString(s) {
    reverseStr = '';

    for (let i = s.length - 1; i > 0; i--) {
        reverseStr += s[i];
    }
    return console.log(reverseStr);
}

reverseString('string, .');