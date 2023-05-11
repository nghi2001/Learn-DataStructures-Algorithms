class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(node) {
        const index = this.children.indexOf(node);
        if (index != -1) {
            this.children.slice(index, 1);
        }
    }

    traverseDF(callback) {
        (function recurse(currentNode) {
            for (
                let i = 0, length = currentNode.children.length;
                i < length;
                i++
            ) {
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        })(this);
    }

    traverseBF(callback) {
        const queue = [this];
        let currentNode = queue.shift();
        while (currentNode) {
            for (
                let i = 0, length = currentNode.children.length;
                i < length;
                i++
            ) {
                queue.push(currentNode.children[i]);
            }
            callback(currentNode);
            currentNode = queue.shift();
        }
    }
}

// Example usage:

const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
root.addChild(nodeB);
root.addChild(nodeC);

const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

// Traverse the tree using depth-first search (DFS)
// root.traverseDF((node) => {
//     console.log(node.data);
// });

// Traverse the tree using breadth-first search (BFS)
root.traverseBF((node) => {
    console.log(node.data);
});
