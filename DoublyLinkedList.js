
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    printList(){
        const newArray = [];
        let currentNode = this.head;
        while(currentNode){
            newArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return newArray;
    }

    insert(index, value){
        let newNode = new Node(value);
        let leader = this.traverse(index - 1);
        let follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
    }

    traverse(index){
        let currentNode= this.head;
        for(let i = 0;i < index;i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}


const newList = new DoublyLinkedList(10);
newList.append(15);
newList.append(20);
newList.append(25);
newList.append(30);
// console.log(newList);
console.log(newList.printList());
newList.prepend(5);
// console.log(newList);
console.log(newList.printList());
newList.insert(3,17);
console.log(newList.printList());
