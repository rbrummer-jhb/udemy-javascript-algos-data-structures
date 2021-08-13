/*
Each South African citizen has a unique ID number, and this unique identifier is
key to accessing a range of South African resources such as banking facilities,
retail, medical aid, insurance and travel. The number combines bits of information
that can be used to validate the combination of data.

The following information will help you understand what the numbers in the South
African ID represent.

A South African ID number is a 13-digit number which is defined by the following
format: YY MM DD SSSS CAZ.

    1. The first 6 digits (YY MM DD) are based on your date of birth.
    20 February 1992 is displayed as 920220.

    2. The next 4 digits (SSSS) are used to define your sex. Females are assigned
    numbers in the range 0000-4999 and males from 5000-9999.

    3. The next digit (C) shows if you're a South African citizen status with 0
    denoting you were born a South African citizen and 1 denoting that you're a
    permanent resident.

    4. The last digit (Z) is a checksum digit, used to check that the number
    sequence is accurate using a set formula called the Luhn algorithm.

Luhn algorithm with 800101 5009 087 as an example:
    1. Add all the digits in the odd positions (excluding the last digit) [1]
    8 + 0 + 0 + 5 + 0 + 0 = 13

    2. Move the even positions into a field and multiply the number by 2. [2]
    011098 x 2 = 22196

    3. Add the digits of the results. [3]
    2 + 2 + 1 + 9 + 6 = 20

    4. Add the second answer [3] to the first answer [1].
    13 + 20 = 33

    5. Subtract the second digit (i.e. 3) from 10. The number must tally with the
    last number in the ID Number. If the answer differs, the ID number is invalid.

Requirements:
(The following has already been done for you)
For a valid SA ID number, the decoded information should be returned, with no
white space, in the following format: 'YYYY-MM-DD,Sex,Citizenship' where:

    1. 'YYYY-MM-DD is the date of birth within the last 100 years.

    2. Sex is the biological differences between males and females, such as
    genitalia and genetic differences as indicated in the SA ID number and
    document, i.e. 'Male' or 'Female'.

    3. Citizenship is either 'Citizen' or 'PermanentResident'.
Validity checks:
    1. For length violation, return 'invalid length'.

    2. For character violations, return 'invalid characters'.

    3. For date violations, return 'invalid date of birth'.

    4. For citizenship violations, return 'invalid citizenship status'.

Your task:
You are required to complete the 'validateCheckSum()' function which will, once
the program is executed, validate the given South African ID number based on the
Luhn algorithm described above. Should the checksum fail return 'Invalid sequence'
as a result.

The following are example outputs:

1974-11-15,Male,Citizen
Invalid length
1974-10-04,Male,PermanentResident
Invalid citizenship status
*/

function validateCheckSum(n) {
    if (isNaN(n)) return 'invalid characters';
    if (n.length !== 13) return 'invalid length';

    let dt = n.slice(0,6),
        y = dt.slice(0,2),
        m = dt.slice(2,4),
        d = dt.slice(4,6);
        yearToday = String(new Date().getFullYear()).slice(2,4);
        century = String(new Date().getFullYear()).slice(0,2);
    
    y = y > yearToday ? (century - 1) + y : century + y;
    dateNumbers = y + '-' + m + '-' + d;
    date = new Date(dateNumbers).toISOString().slice(0,10);
    
    let sex = n.slice(6,10);
    if (sex >= 0000 && sex < 5000) sex = 'Female';
    if (sex >= 5000 && sex < 10000) sex = 'Male';

    let citizenship = n.slice(10,11),
        person = '';

    if (citizenship === '0') person = 'Citizen';
    else if (citizenship === '1') person = 'PermanentResident';
    else return 'invalid citizenship status';

    let oddPos = [],
        evenPos = '';

    for (let i = 0; i < n.length-1; i += 2) {
        oddPos.push( Number(n[i]) );
    }
    for (let i = 1; i < n.length; i += 2) {
        evenPos += n[i];
    }

    let evenTotalProduct = Number(evenPos) * 2,
        evenTotalArr = Array.from(evenTotalProduct.toString()).map(Number),
        evenTotal = evenTotalArr.reduce((acc, num) => acc + num, 0);

    let oddTotal = oddPos.reduce((acc, num) => acc + num, 0);

    let lastDigit = 10 - String(evenTotal + oddTotal)[1];

    if (String(lastDigit) !== n[n.length-1]) return 'Invalid sequence';

    let details = [date, sex, person].join(',');

    return details;
}

console.log(validateCheckSum('9711125168081'));
console.log(validateCheckSum('0409100169088'));
console.log(validateCheckSum('9905240280082')); 
console.log(validateCheckSum('7209255027088'));
console.log(validateCheckSum('5107070091085'));