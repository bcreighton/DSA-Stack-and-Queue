// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const peek = (stack) => {
    if(stack.top === null) { 
        return 'This stack is empty';
    }

    return stack.top;
}

const isEmpty = (stack) => {
    if (stack.top === null ) {
        return true
    }

    return false;
}

const display = (stack) => {
    if(isEmpty(stack)) return;

    if ( stack.top.next === null ) {
        return console.log(stack.top.data);
    }

    while ( stack.top.next !== null ) {
        console.log(stack.top.data);
        stack.top = stack.top.next
    }

    return console.log(stack.top.data);
}

const is_palindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    const stringStack = new Stack();
    const revStringStack = new Stack();
    const compareStack = new Stack();

    [...s].map(l => stringStack.push(l));
    [...s].map(l => compareStack.push(l));

    while ( stringStack.top !== null ) {
        revStringStack.push(stringStack.pop());
    }

    while ( compareStack.top !== null ) {
        if ( compareStack.top.data === revStringStack.top.data ) {
            debugger;
            compareStack.pop();
            revStringStack.pop();
        } else { return false}
    }

    return true;
}

const sortedInsert = (stack, x) => {
    if (isEmpty(stack) || x > stack.top.data) { // Base case: either stack is empty or newly inserted item is greater than top
        stack.push(x);
        return;
    }

    let temp = stack.pop(); // If top is greater, remove the top item and recur
    sortedInsert(stack, x);

    stack.push(temp); // Put back the top item removed earlier
}

const sort = (stack) => {
    if (!isEmpty(stack)) {
        let x = stack.pop(); // Remove the top item

        sort(stack); //Sort remaining stack

        sortedInsert(stack, x); // Push the top item back in sorted stack
    }

    return stack
}

const queueStack = (stack) => {
    if(isEmpty(stack)) return;

    const queuedStack = new Stack();

    while (!isEmpty(stack)) {
        queuedStack.push(stack.pop())
    }

    debugger;

    return queuedStack;
}

const main = () => {
    const starTrek = new Stack();
    const emptyStack = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    display(queueStack(starTrek))
}

const unorderedStack = new Stack();

unorderedStack.push(5);
unorderedStack.push(-1);
unorderedStack.push(53);
unorderedStack.push(23);
unorderedStack.push(13);
unorderedStack.push(90);
unorderedStack.push(-12);
unorderedStack.push(9);
unorderedStack.push(39);
unorderedStack.push(22);

main();
