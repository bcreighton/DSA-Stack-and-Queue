class _Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class DoublyQueue {
    constructor() {
        this.first = null;
        this.next = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null ) {
            this.first = node;
        };

        if (this.last) {
            this.last.next = node;
            node.prev = this.last;
        }

        this.last=node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;
        this.first.prev = null;

        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }
}

const main = () => {
    const starTrekQ = new DoublyQueue;

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    return starTrekQ;
}

console.log(main())