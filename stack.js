class Node {
  constructor(color, number, nextNode = null) {
    this.color = color;
    this.number = number;
    this.nextNode = nextNode;
  }
  getData = () => `${this.color}(${this.number})`;
}

class Stack {
  constructor(limit = 20) {
    this.topNode = null;
    this.size = 0;
    this.limit = limit;
  }

  isFull = () => this.size === this.limit;

  isEmpty = () => this.size === 0;

  peek = () => {
    if (this.isEmpty()) {
      console.log("Oh no! The deck is empty.");
    } else {
      return this.topNode.getData();
    }
  };

  push = (color, number) => {
    if (this.isFull()) {
      console.log("Oops! The deck is full.");
    } else {
      const newNode = new Node(color, number, this.topNode);
      this.topNode = newNode;
      this.size++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("Oh no! The deck is empty.");
    } else {
      const popped = this.topNode;
      this.topNode = popped.nextNode;
      this.size--;
      return popped.getData();
    }
  };

  createDeck = () => {
    let deckCounter = 0;
    while (deckCounter < this.limit) {
      this.push(random(colors), random(numbers));
      deckCounter++;
    }
  };
}

const colors = ["red", "blue", "green", "yellow"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

let deck = new Stack();

deck.createDeck();

let playerOne = new Stack(5);
let counterOne = 0;
if (playerOne.isEmpty() && !playerOne.isFull()) {
  console.log(` -------------------------
  Player 1: \n -------------------------
  `);
  while (counterOne < playerOne.limit) {
    let card = deck.pop();
    playerOne.push(card);
    console.log(`${counterOne + 1}- ${card}`);
    counterOne++;
  }
}

let playerTwo = new Stack(5);
let playerTwoCounter = 0;
if (playerTwo.isEmpty() && !playerTwo.isFull()) {
  console.log(` -------------------------
  Player 2: \n -------------------------
  `);
  while (playerTwoCounter < playerTwo.limit) {
    let card2 = deck.pop();
    playerTwo.push(card2);
    console.log(`${playerTwoCounter + 1}- ${card2}`);
    playerTwoCounter++;
  }
}

console.log(`----------------------------------------
The first card in the deck is ${deck.peek()} \n----------------------------------------
`);
