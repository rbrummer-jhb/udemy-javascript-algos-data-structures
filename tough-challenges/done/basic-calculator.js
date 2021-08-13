/*
The following program implements a basic calculator with three string parameters
that contain two values and a calculation operator. The calculator method must
read the three parameters and perform the calculation based on the supplied
calculation operator. The calculation operators are 'Add', 'Subtract', 'Multiply'
and 'Divide'. The implementation does not work and fails with an error. Your goal
is to find and repair the defects in the Calc method.

Hints:
1. Parameters value1 and value2 may contain non-numeric values. In these cases, set the ErrorMessage variable to 'VALUES MUST BE NUMERIC'.

2. As the calculation operator is passed in as a string, it can be set to anything.
Should this be the case, set the ErrorMessage to 'INCORRECT OPERATOR'.

3. Remember to cater for basic and standard mathematical rules in relation to the
effect of each operator on 2 values. In the case of an arithmetic rule violation,
set the ErrorMessage to 'ARITHMETIC ERROR'.
*/

function calc(o1, o2, operator) {
    let errorMessage = '';
    
    if (isNaN(o1) || isNaN(o2)) {
        errorMessage = 'VALUES MUST BE NUMERIC';
        return errorMessage;
    }

    if (o2 === '0' && operator === 'Divide') {
        errorMessage = 'ARITHMETIC ERROR';
        return errorMessage;
    }

    if (operator.toLowerCase() === 'add') {
        return Number(o1) + Number(o2);
    }

    if (operator.toLowerCase() === 'subtract') {
        return Number(o1) - Number(o2);
    }

    if (operator.toLowerCase() === 'multiply') {
        return Number(o1) * Number(o2);
    }

    if (operator.toLowerCase() === 'divide') {
        return Number(o1) / Number(o2);
    }
}

console.log(calc('2', '3', 'Divide'));