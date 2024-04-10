
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


    checkPalindrome() {
        let start = this.head;
        let end = this.head;

        while(end.next!=null) {
            end = end.next;
        }

        while(start!=null) {
            if(start.data != end.data)
                return false;

            start = start.next;
            end = end.previous;
        }
        //All Nodes Are Checked
        return true;
    }

}

let dl = new doublyLinkedList();
dl.insertAtTail(1); //1
dl.insertAtTail(2); // 1 2
dl.insertAtTail(3); // 1 2 3
dl.insertAtTail(2); // 1 2 3 2
dl.insertAtTail(1); // 1 2 3 2 1
dl.printData();
console.log(dl.checkPalindrome());
