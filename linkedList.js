const prompt = require("prompt-sync")();

//Class takes in age and highlight

class Node {
  constructor(year, highlight, nextNode = null) {
    this.year = year;
    this.highlight = highlight;
    this.nextNode = nextNode;
  }
}
//Creating a LinkedList

class LinkedList {
  constructor(year, highlight) {
    this.head = new Node(year, highlight);
  }


  getNewNode= (year, highlight) => {
    const newNode = new Node(year, highlight, this.head);
    this.head = newNode;
  };



  getList = () => {
  
    let currentNode = this.head;
    while (currentNode) {
      console.log(`Age: ${currentNode.year}, Highlight: ${currentNode.highlight}`);
      currentNode = currentNode.nextNode;
    }
  };

  insertHighlights = (year) => {
    let currentNode = this.head;
    while (currentNode.year < year) {
      let currentAge = currentNode.year + 1;
      if (currentNode.nextNode && currentNode.nextNode.year === currentAge) {
        currentNode = currentNode.nextNode;
      } else {

        let highlight = prompt(`enter highlight  for age  ${currentAge} `);

        let newNode = new Node(currentAge, highlight, currentNode.nextNode);
        currentNode.nextNode = newNode;
        currentNode = newNode;
      }
    }
  };
}
//
const myList = new LinkedList(7, "I turned seven");
myList.getNewNode(3, "I started walking");
myList.getNewNode(1, "I was born");

const year = prompt("enter age : ");

myList.insertHighlights(year);

myList.getList();