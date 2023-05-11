class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    insert(data, index) {
        if (index < 0 || index > this.length) {
            throw Error("invalid index");
        }
        let newNode = new Node(data);
        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.length++;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            throw Error("invalid index");
        }
        if (index == 0) {
            this.head = this.head.next;
        } else {
            let current_node = this.head;
            for (let i = 0; i < index - 1; i++) {
                current_node = current_node.next;
            }
            current_node.next = current_node.next.next;
        }
        this.length--;
    }

    getAll() {
        let current_node = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(current_node.data);
            current_node = current_node.next;
        }
    }

    reverse_S1() {
        let previous_node = null;
        let current_node = this.head;
        while (current_node !== null) {
            let next = current_node.next;
            current_node.next = previous_node;
            previous_node = current_node;
            current_node = next;
        }
        console.log(previous_node);
        this.head = previous_node;
    }
}

let linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(4);
linkedList.append(3);
linkedList.reverse_S1();
// linkedList.getAll();
