/*
A binary tree is made of nodes, where each node contains a 'left' reference, a
'right' reference and a data element. The topmost node in the tree is called 
the root'. Every node (excluding a root) in a tree is connected by a directed
edge from exactly one other node. This node is called a parent. Each node can be
connected to an arbitrary number of nodes, called children. Nodes with no children
are called leaves, or external nodes. Nodes which are not leaves are called
internal nodes. Nodes with the same parent are called siblings.

The following picture represents a perfect binary tree with a depth of 2.
    3
  /  \
1     2
Your goal is to complete the 'findParent()' function to return the parent node
of a given label using post-order traversal, i.e. should the input label be '1',
return the tree node with label 3 given the tree above.

Hint: look at the way the tree is constructed.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  
  constructor() {
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    let current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value < current.value){
          if(current.left === null){
              current.left = newNode;
              return this;
          }
          current = current.left;
      } else {
          if(current.right === null){
              current.right = newNode;
              return this;
          } 
          current = current.right;
      }
    }
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  findParent(node, val, parent) {
    if (node === null) return;

    if (node.value === val) {
      console.log(parent);
    } else {
      this.findParent(node.left, val, node.value);
      this.findParent(node.right, val, node.value);
    }
  }
}

/*
       10
      /  \
     6   15
   / \    \
 3    8   20
*/

let tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

// console.log(tree.DFSPostOrder());

// let root = new Node(10);
// root.left = new Node(6);
// root.right = new Node(15);
// root.left.left = new Node(3);
// root.left.right = new Node(8);
// root.right.right = new Node(20);

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8)
root.right.left = new Node(7)

// root, the node, the parent
tree.findParent(root, 2, -1);
tree.findParent(root, 3, -1);
tree.findParent(root, 4, -1);
tree.findParent(root, 5, -1);
tree.findParent(root, 7, -1);
tree.findParent(root, 8, -1);