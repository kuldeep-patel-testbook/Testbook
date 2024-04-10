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

    deleteAtHead() {
        
        console.log("DeleteAtHead");
        if(this.head == null) {
            console.log("Linked list is empty, cannot delete node");
            return;
        }
        this.head = this.head.next;

    }

    insertAtTail(value) {
        let newNode = new Node(value);
        
        //check is liked list is empty 
        if(this.head == null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while(temp.next!=null) {
            temp = temp.next;
        }
        // temp has reached the last node
        temp.next = newNode;


    }

    deleteAtTail() {
        // If single node, head will become null
        if(this.head.next == null || this.head == null){
            this.head = null;
            return;
        }

        let temp = this.head;
        //Reach the second last node
        while(temp.next.next!=null) {
            temp = temp.next;
        }
        // temp is the second last node
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

let getNode = new Node(5);
console.log(getNode.data);
console.log(getNode.next);

let getLinkedList = new LinkedList();
getLinkedList.insertAtTail(2); //2
getLinkedList.insertAtTail(3); // 2 3
getLinkedList.insertAtTail(4); // 2 3 4
console.log(getLinkedList);
getLinkedList.printData();
getLinkedList.insertAtHead(0); // 0 2 3 4
getLinkedList.insertAtHead(1); // 1 0 2 3 4
getLinkedList.printData();

console.log("DeleteTail");
getLinkedList.deleteAtTail(); // 1 0 2 3
getLinkedList.deleteAtTail(); // 1 0 2
//getLinkedList.deleteAtTail(); // 1 0

// getLinkedList.deleteAtTail(); // 1
// getLinkedList.deleteAtTail(); // Empty
getLinkedList.deleteAtHead();
//getLinkedList.deleteAtHead();
//getLinkedList.deleteAtHead();
//getLinkedList.deleteAtHead();
//getLinkedList.deleteAtHead();
getLinkedList.printData();