/*
Write a function called `sameFrequency()`.
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution must have the following complexities:
Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(x,y){
    let xStr = x.toString();
    let yStr = y.toString();
    if(xStr.length !== yStr.length) return false;

    let xCount = {};
    let yCount = {};
    for(let i = 0; i < xStr.length; i++){
        xCount[xStr[i]] = (xCount[xStr[i]] || 0) + 1;
    }
    for(let j = 0; j < yStr.length; j++){
        yCount[yStr[j]] = (yCount[yStr[j]] || 0) + 1;
    }
    for(let key in xCount){
        console.log(key);
        if(xCount[key] !== yCount[key]) return false;
    }
    for(let [key,value] of Object.entries(xCount)){
        console.log(value);
    }
    return true;
}

console.log(sameFrequency(182,281));