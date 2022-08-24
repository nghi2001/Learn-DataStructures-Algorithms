class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor () {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;
        if( this.head == null) {
            this.head = node
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size ++;
    }

    insertAt( element, index) {
        if( index < 0 || index > this.size) {
            return 'invalid index'
        } else {
            let node = new Node(element);
            let curr,prev;
            curr = this.head;
            if(index == 0) {
                node.next = this.head;
                this.head = node
            } else {
                curr = this.head;
                let it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
                // console.log(prev);
            }
            this.size++
        }
    }
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.element);
            current = current.next;
        }
    }
}

function reverse(node) {
    let current = node;
    let next = null;
    let prev = null;
    while(current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        console.log(prev);
    }
    node = prev;
    // console.log(node);
}
/**
 * current = head; next = null; prev = null
 * chạy while
 * next = current.next => 3
 */
let list = new LinkedList()
list.add(new Node(1))
list.add(new Node(2));
list.add(new Node(4));

list.insertAt(new Node(3),1)
list.printListData();

reverse(list.head);