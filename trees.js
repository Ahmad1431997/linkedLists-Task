const prompt = require("prompt-sync")();

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild = (child) => {
    if (this.children.length < 2) {
      this.children.push(child);
      console.log(`a child ${child.name} has been added`);
    } else console.log("child is an orphen");
  };
  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
      //   nodes = [...nodes, ...nodes.pop().children];
    }
  };
  search = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      if (child.name.split(" ")[1] === current.name.split(" ")[0]) {
        return current;
      }
      // console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
    return "parent not exist";
  };
}

const root = new TreeNode("family");
// childOne = new TreeNode("Fahad");
// root.addChild(childOne);
// console.log(root);

let x = prompt(`enter child full name (done if finished) : `);
let child;
while (x !== "done") {
  child = new TreeNode(x);
  let parent = root.search(child);
  if (parent !== "parent not exist") {
    parent.addChild(child);
  } else {
    console.log(parent);
  }
  x = prompt(`enter child full name (done if finished) : `);
}
root.traverse();
