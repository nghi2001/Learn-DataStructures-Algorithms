class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)

    }

    pop() {
        if(this.items.length ==0) {
            return "rong"
        }
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length-1]
    }
    isEmpty() {
        return this.items.length ==0
    }
}

let stack = new Stack();

for(let i =0;i<10;i++) {
    stack.push(i)
}

let last = stack.pop()
let selast = stack.pop()
console.log(selast);