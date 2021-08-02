class Node {
    constructor(value) {
        this.value =  value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

// Every parent node has at most 2 children.
// Every node to the left of the parent node is always less than the parent.
// Every node to the right of the parent node is always greater than the parent.

/*
let tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
*/

// INSERTING A NODE
// Steps - Iteratively
// * Create a new node.
// * Starting at the root node,
//      * Check if there is a root, if not - the root now becomes that new node.
//      * If there is a root, check if the value of the new node is greater than or less than the value of the root.
//          * If it is greater,
//              * Check if there is a right node.
//                  * If there is, move to that node and repeat these steps.
//                  * If there is not, add that node as the right property.
//          * If it is less,
//              * Check if there is a left node.
//                  * If there is, move to that node and repeat these steps.
//                  * If there is not, add that node as the left property.

/*
let tree = new BST();
tree.insert(1);
tree.insert(2);
tree.insert(3);

console.log(tree);
*/

// FINDING A NODE IN A BST
// * Starting at the root.
//      * Check if there is a root, if not - we're done searching.
//      * If there is a root, check if the value of the new node is the value we are looking for. If it is found, we're done.
//      * If not, check if the value is greater than or less than the value of the root.
//      * If it is greater,
//          * Check if there is a node to the right.
//              * If there is, move to that node and repeat these steps.
//              * If there is not, then we are done searching.
//      * If it is less,
//          * Check if there is a node to the left.
//              * If there is, move to that node and repeat these steps.
//              * If there is not, then we are done searching.

let tree = new BST();
tree.insert(7);
tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
console.log(tree.find(5));