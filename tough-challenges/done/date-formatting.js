/*
Sometimes date fields need to be formatted for custom record numbering.
The 'formatAsCustomString()' function below is supposed to achieve this but it
doesn't seem to work.

Your goal is to fix the method below to format the date and number and return it
as a string, while keeping the following in mind:

1. The format is as follows: number-date.
2. The number portion has to be 5 characters (prefix with zeros).
3. The date portion is YYMMDD - it must be 6 characters.
*/

function formatAsCustomString(date, number) {
    let paddedNum = padLeft(number,5);
    return paddedNum.substring(paddedNum.length - 5,paddedNum.length) +
   "-" + formatDate(date);
}

function padLeft (str, max) {
    str = str.toString();
    return str.length < max ? padLeft("0" + str, max) : str;
}
   
function formatDate(date) {
    let d = new Date(date);
    console.log('Date : ' + d);
    let month = '' + (d.getMonth() + 1);
    console.log('Month : ' + month);
    let day = '' + d.getDate();
    console.log('Day : ' + day);
    let year = d.getFullYear().toString();
    console.log('Year ' + year);
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year.substring(2,4), month, day].join("");``
}

console.log(formatDate('January 2 1999'));
console.log('-----------------------------------------');
console.log(formatAsCustomString('January 20 1999', 17));