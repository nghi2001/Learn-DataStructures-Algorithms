class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    append(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length++
    }

    insert(index, data) {
        if (index < 0 || index > this.length) {
            throw Error("index out of length")
        }
        let newNode = new Node(data)
        if (index == 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let currentNode = this.head
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode
        }
        this.length++
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            throw Error("index out of length")
        }
        if (index == 0) {
            this.head = this.head.next
        } else {
            let currentNode = this.head
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next
            }
            currentNode.next = currentNode.next.next
        }
        this.length--
    }

    get(index) {
        if (index < 0 || index > this.length) {
            throw Error("index out of length")
        }
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode.data
    }
    set(index, data) {

        if (index < 0 || index > this.length) {
            throw Error("index out of length")
        }
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        currentNode.data = data
        return currentNode.data
    }
    reverse() {
        let previous_node = null;
        let current_node = this.head;
        while (current_node !== null) {
            const next_node = current_node.next;
            current_node.next = previous_node;
            previous_node = current_node;
            current_node = next_node;
        }
        this.head = previous_node;
    }

    toArray() {
        let result = []
        let current_node = this.head
        while (current_node !== null) {
            result.push(current_node.data)
            current_node = current_node.next
        }
        return result
    }

    toString() {
        return this.toArray().toString()
    }
}
// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// console.log(list.toString()); // prints "1,2,3,4"
// list.reverse();
// console.log(list.toString());

module.exports = {
    LinkedList,
    Node
}