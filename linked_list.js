
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    clear = () => {
        this.head = null;
        this.size = 0;
    };

    isEmpty = () => {
        if (this.head == null)
            return true;
        return false;
    };

    getSize = () => {
        return this.size;
    };

    addAtStart = (elem) => {
        const node = new Node(elem);
        if (this.isEmpty()) {
            this.head = node;
            this.size = this.size + 1;
            return;
        }
        const aux = this.head;
        this.head = node;
        node.next = aux;
        this.size = this.size + 1;
    };

    addAtEnd = (elem) => {
        const node = new Node(elem);
        if (this.head == null) {
            this.head = node;
            this.size = this.size + 1;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.size = this.size + 1;
    };

    addAtPosition = (index, elem) => {
        if (index == 0) {
            this.addAtStart(elem);
            return;
        }
        if (!this.get(index)) {
            this.addAtEnd(elem);
            return;
        }
        const node = new Node(elem);
        let aux = this.getNode(index - 1);
        node.next = aux.next;
        aux.next = node;
        this.size = this.size + 1;
    };

    get = (index) => {
        let current = this.getNode(index);
        if (current)
            return current.value;
        return null;
    };

    getNode = (index) => {
        if (index < 0 || index > this.getSize())
            return null;
        let current = this.head;
        let i = 0;
        while (i != index) {
            current = current.next;
            i++;
        }
        if (current) 
            return current;
        return null;
    };

    contains = (elem) => {
        let indexElem = this.indexOf(elem); 
        if (indexElem != -1) {
            return true;
        }
        return false;
    };

    indexOf = (elem) => {
        let current = this.head;
        let i = 0;
        while (current) {
            if (current.value == elem)
                return i;
            current = current.next;
            i++;
        }
        return -1;
    };

    removeAtPosition = (index) => {
        if (this.isEmpty() || !this.get(index)) {
            return null;
        }
        let item = null;
        let aux = null;
        if (index == 0) {
            item = this.head.value;
            this.head = this.head.next;
            this.size = this.size - 1;
            return item;
        }
        if (index == this.getSize() - 1) {
            item = this.get(index);
            aux = this.getNode(index - 1);
            aux.next = null;
            this.size = this.size - 1;
            return item;
        }
        aux = this.getNode(index - 1);
        item = aux.next.value;
        aux.next = (aux.next).next;
        this.size = this.size - 1;
        return item;
    };

    remove = (elem) => {
        let index = this.indexOf(elem);
        if (this.isEmpty() || index == -1) {
            return false;
        }
        this.removeAtPosition(index);
        return true;
    };

    printLinkedList = () => {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    };
}

module.exports = { LinkedList };

// let linkedList = new LinkedList();

// 20 -> 9 -> 86-> -2 -> 16 

// linkedList.addAtEnd(20);
// linkedList.addAtEnd(9);
// linkedList.addAtEnd(86);
// linkedList.addAtEnd(-2);
// linkedList.addAtEnd(16);

// console.log("Imprime lista:");
// linkedList.printLinkedList();

// console.log("Removendo elemento 86:", linkedList.remove(86));

// console.log("Imprime lista:");
// linkedList.printLinkedList();

// console.log("Removendo elemento 16:", linkedList.remove(16));

// console.log("Imprime lista:");
// linkedList.printLinkedList();

// console.log("Removendo elemento 10:", linkedList.remove(10));

// console.log("Imprime lista:");
// linkedList.printLinkedList();

// linkedList.clear();
// console.log("Removendo elemento 20:", linkedList.remove(20));


// console.log("Removendo elemento da posicao 3:", linkedList.removeAtPosition(3));

// console.log("Imprime lista:");
// linkedList.printLinkedList();

// console.log("Removendo elemento da posicao 10:", linkedList.removeAtPosition(10));

// console.log("Imprime lista:");
// linkedList.printLinkedList();



