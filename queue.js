// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }


    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}

const peek = (queue) => {
    return queue.first.value;
}

const isEmpty = (queue) => {
    if (queue.first === null) return true;

    return false;
}

const display = (queue) => {
    if(isEmpty(queue)) return

    (queue.first.next === null ) && queue.first.value;

    while (queue.first.next !== null ) {
        console.log(queue.first.value);
        queue.first = queue.first.next;
    }

    return queue.first.value;
}

const squareDance = queue => {
    debugger;
    if(isEmpty(queue)) return

    const spares = new Queue;
    let spareCount = 0;
    let waiting = null;
    let ready = null;

    while (!isEmpty(queue)) {
        waiting = queue.dequeue();
        ready = queue.dequeue();

        if(waiting.startsWith('M') === ready.startsWith('M')) {
            spares.enqueue(waiting);
            spares.enqueue(ready);
        } else if (waiting.startsWith('F') && !isEmpty(spares)) {
            spares.enqueue(ready);
            console.log(`${waiting} | ${spares.dequeue()}`)
        } else { 
            console.log(`${waiting} | ${ready}`) 
        }
    }

    while (!isEmpty(spares)) {
        spares.dequeue();
        spareCount++;
    }

    if (spareCount !== 0) console.log(`${spareCount} men are waiting for a partner.`)
}

const ophidianBank = queue => {
    let randomNum = Math.floor(Math.random() * 5) // random number to simulate 25% 
    let customerCount = 0;

    if (isEmpty(queue)) console.log('No one is in line');

    while (!isEmpty(queue)) {
        if (customerCount === 50 ) console.log('Paperwork is bad today!');

        if (customerCount !== randomNum ) {
            console.log(queue.dequeue());
            customerCount++;
        } else {
            console.log('End of the line please...');
            queue.enqueue(queue.dequeue());
            customerCount = 0;
            randomNum = Math.floor(Math.random() * 5);
        }
    }
}

const main = () => {
    const starTrekQ = new Queue;
    const emptyQ = new Queue;
    const squareDancers = new Queue;
    const bankCustomers = new Queue;

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    starTrekQ.dequeue();
    starTrekQ.dequeue();

    squareDancers.enqueue('F Jane');
    squareDancers.enqueue('M Frank');
    squareDancers.enqueue('M John');
    squareDancers.enqueue('M Sherlock');
    squareDancers.enqueue('F Madonna');
    squareDancers.enqueue('M David');
    squareDancers.enqueue('M Christopher');
    squareDancers.enqueue('F Beyonce');

    bankCustomers.enqueue('Cust. 1');
    bankCustomers.enqueue('Cust. 2');
    bankCustomers.enqueue('Cust. 3');
    bankCustomers.enqueue('Cust. 4');
    bankCustomers.enqueue('Cust. 5');
    bankCustomers.enqueue('Cust. 6');
    bankCustomers.enqueue('Cust. 7');
    bankCustomers.enqueue('Cust. 8');
    bankCustomers.enqueue('Cust. 9');
    bankCustomers.enqueue('Cust. 10');
    bankCustomers.enqueue('Cust. 11');
    bankCustomers.enqueue('Cust. 12');

    ophidianBank(bankCustomers);
    // return emptyQ;
}

main();