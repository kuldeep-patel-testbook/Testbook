
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(value) {
        // Create a new Node
        let newNode = new Node(value);

        if(this.head == null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.previous = newNode;
        //Change the head
        this.head = newNode;
    }

    deleteAtHead(){

        if(this.head == null) {
            console.log("List is empty, can not delete node");
            return;
        }

        // If single node head is become a null
        if(this.head.next == null) {
            this.head = null;
            return;
        }

        // Move Head
        this.head = this.head.next;
        // Head Previous Set it to Null
        this.head.previous = null;

    }

    insertAtTail(value) {
        // Create a New Node
        let newNode = new Node(value);

        if(this.head == null) {
            this.head = newNode;
            return;
        }

        // traverse to find last node
        let temp = this.head;
        while(temp.next!=null) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.previous = temp;
    }

    deleteAtTail() {

        if(this.head == null) {
            console.log("List is empty, can not delete node");
            return;
        }

        // If single node head is become a null
        if(this.head.next == null) {
            this.head = null;
            return;
        }

        // Reach the second Last
        let temp = this.head;
        while(temp.next.next!=null) {
            temp = temp.next;
        }

        // Now temp is at secondLast
        temp.next = null;

    }


    printData() {
        let temp = this.head;
        while(temp!=null) {
            console.log(temp.data);
            temp = temp.next;
        }
        
    }
}

let dl = new doublyLinkedList();
dl.insertAtTail(10); //10
dl.insertAtTail(20); // 10 20
dl.insertAtTail(30); // 10 20 30
dl.insertAtTail(40); // 10 20 30 40
dl.insertAtHead(5); // 5 10 20 30 40
dl.insertAtHead(3); // 3 5 10 20 30 40
dl.insertAtHead(2); // 2 3 5 10 20 30 40
dl.deleteAtTail(); // 2 3 5 10 20 30
dl.deleteAtTail(); // 2 3 5 10 20
dl.deleteAtHead(); // 3 5 10 20
dl.deleteAtHead(); // 5 10 20
//dl.deleteAtHead(); // 10 20
//dl.deleteAtHead(); // 20
//dl.deleteAtHead(); //
//dl.deleteAtHead();
dl.printData();
