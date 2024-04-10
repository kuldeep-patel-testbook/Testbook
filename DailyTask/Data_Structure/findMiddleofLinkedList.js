class Node {
    constructor(data) {
        this.head = data;
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

    middleNode() {

        let temp = this.head;
        let length = 0;
    
        while(temp!=null) {
            length++;
            temp = temp.next;
        }
    
        let mid =  Math.floor(length/2);
        temp = this.head;
    
        for(let i=1; i< mid; i++) {
            temp = temp.next;
        }
        console.log("Middle element:", temp);
        return temp;
    
    }
}

let head = new LinkedList();
head.insertAtHead(0);
head.insertAtHead(1);
head.insertAtHead(2);
head.insertAtTail(4);
head.insertAtTail(5);
head.insertAtTail(6);
head.middleNode();

// var middleNode = function (head) {
//     let temp = head;
//     let length = 0;

//     while (temp != null) {
//         length++;
//         temp = temp.next;
//     }
//     let mid = Math.floor(length/2);
//     temp = head;

//     for (let i = 1; i <=mid; i++) {
//         temp = temp.next;
//     }
//     return temp;
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while(fast!=null && fast.next!=null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};