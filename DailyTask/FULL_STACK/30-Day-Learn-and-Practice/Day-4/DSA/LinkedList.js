class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(value) {
        
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(value) {
        let newNode = new Node(value);

            if(this.head == null) {
                this.head = newNode;
                return;
            }
            
            let temp = this.head;
            while(temp.next != null) {
                temp = temp.next;
            }
            
            // temp has reached last node
            temp.next = newNode;
    }

    deleteAtHead() {

    }

    deleteAtTail() {

    }

    printData() {
        let temp = this.head;

        while(temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

//let newNode = new Node(5);
//console.log(newNode);

let ll = new LinkedList();

ll.insertAtHead(1);
ll.insertAtHead(2);
ll.insertAtHead(3);
ll.insertAtHead(0);
ll.insertAtTail(4);
ll.printData();

//console.log(ll);