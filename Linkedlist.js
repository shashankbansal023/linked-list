
class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value);
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
    }

    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value){
        if(index===0){
            return this.prepend(value);
        }
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        let currentNode = this.head;

        for(let i = 0;i < index-1;i++){
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.length++;
        return this.printList();
    }

    remove(index){
        if(index===0){
            let secondNode = this.head.next;
            this.head.next = null;
            this.head = secondNode;
            this.length--;
            return this;
        }
        if(index >= this.length-1){
            index = this.length - 1;
            let currentNode = this.traverse(this.length-2);
            currentNode.next = null;
            this.tail = currentNode;
            this.length--;
            return this;
        }

        let currentNode = this.traverse(index - 1);
        let deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
        deletedNode.next = null;
        this.length--;
        return this;
    }

    traverse(index){
        let currentNode = this.head;
        for(let i = 0;i < index;i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    reverse(){
        if(!this.head.next){
            return this;
        }
        let first = this.head.next;
        let second = first.next;

        this.tail = this.head;
        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next= null;
        this.head = first;
        return this;
    }

}

const myLinkedList = new LinkedList(5);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(25);
myLinkedList.append(30);

// console.log(myLinkedList.printList());
// myLinkedList.remove(0);
myLinkedList.remove(100);
console.log(myLinkedList.printList());
// let reverseArray = myLinkedList.reverse();
// reverseArray.printList();
console.log(myLinkedList.reverse());
