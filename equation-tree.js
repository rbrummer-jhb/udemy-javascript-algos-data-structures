// const operators = {
//     "sum": (v1,v2)=>{
//         return v1+v2;
//     },
//     "diff":(v1,v2)=>{
//         return v1-v2;
//     },
//     "multiply":(v1,v2)=>{
//         return v1*v2;
//     },
//     "divide":(v1,v2)=>{
//         return v1/v2;
//     }
// }

// solve(){
//     return this.operators[op](v1,v2)
// }

// function solve(){
//     console.log(tree.solve());
// }

let operators = {
        "+": (o1,o2) => {
            return o1 + o2;
        },
        "-": (o1,o2) => {
            return o1 - o2;
        },
        "*": (o1,o2) => {
            return o1 * o2;
        },
        "/": (o1,o2) => {
            return o1 / o2;
        }
    }

function stepThroughTree(node){
    
    let left = node.left;
    let right = node.right;

    if (typeof left === 'object') {
        left =  stepThroughTree(left);
    }
    if (typeof right === 'object') {
        right = stepThroughTree(right);
    }
    return operators[node.op](left,right);
}

let tree = {
    left:{
        left:2,
        right:{
            left:2,
            right:{
                left:2,
                right:{
                    left:2,
                    right:12,
                    op:"*"
                },
                op:"*"
            },
            op:"*"
        },
        op:"*"
    },
    right:2,
    op:"/"
}

// let tree = new Node("+",new Node("+",3,4),5);
// let tree1 = new Node("+", 3, new Node("+", 10, 40).solve());


console.log(stepThroughTree(tree));

// class EquationTree {
//     constructor() {

//     }

//     solve(o1, op, o2) {
//         return this.operators[op](o1, o2);
//     }
// }

// let equation = new EquationTree();

// 2 x 3 + 3 x 4
// let left = new Node(equation.solve(2, '*', 3));
// let right = new Node(equation.solve(3, '*', 4));

// console.log(equation.solve(left.value, '+' , right.value));

// console.log(
//     equation.solve(
//         new Node(equation.solve(2, '*', 3)).value, '+',
//         new Node(equation.solve(3, '*', 4)).value
//     )
// );

// console.log(equation.solve(2, '+', 1));
// console.log(equation.solve(2, '-', 1));
// console.log(equation.solve(2, '*', 2));
// console.log(equation.solve(10, '/', 2));