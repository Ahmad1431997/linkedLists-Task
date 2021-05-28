class Node {
  constructor(groupsize, nextNode = null) {
    this.groupsize = groupsize;
    this.nextNode = nextNode;
  }
}

class Queue {
  constructor(limit = 4) {
    this.frontNode = null;
    this.backNode = null;
    this.size = 0;
    this.limit = limit;
    this.waitingtime = 0;
  }

  isFull = () => this.size === this.limit;

  isEmpty = () => this.size === 0;

  addnode = (groupsize) => {
    const newNode = new Node(groupsize);
    if (this.isEmpty()) this.frontNode = newNode;
    else this.backNode.nextNode = newNode;
    this.backNode = newNode;
    this.size++;
    this.waitingtime += groupsize * 0.5;
    console.log(
      `${this.size} groups of people in frontNode of u. You have to wait ${this.waitingtime} min`
    );
  };
  enqueue = (groupsize) => {
    if (this.isFull()) {
      console.log("Line is Full");
    } else {
      let peoplenum = groupsize;
      while (peoplenum > 12) {
        this.addnode(12);
        peoplenum -= 12;
      }
      this.addnode(peoplenum);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      const removed = this.frontNode;
      if (this.size === 1) {
        this.frontNode = null;
        this.backNode = null;
      } else {
        this.frontNode = removed.nextNode;
      }
      this.size--;
      this.waitingtime -= removed.groupsize * 0.5;
      return `\nThe frontNode group entered. ${this.size} groups left. You have to wait ${this.waitingtime} min`;
    }
  };
}

const ride = new Queue();

ride.enqueue(2);
ride.enqueue(8);
ride.enqueue(16);
ride.enqueue(20);
ride.enqueue(6);

console.log(ride.dequeue());
console.log(ride.dequeue());
