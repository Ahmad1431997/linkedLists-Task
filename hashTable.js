const prompt = require("prompt-sync")();
let classSize = prompt(`enter the maximum number of students in class: `);
classSize = parseInt(classSize);
const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

class hashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], OTHER: [] };
  }

  hash = (score) => {
    let hashCode = 0;
    if (score >= 90) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score >= 60 && score < 70) {
      return "D";
    } else {
      return "OTHER";
    }
  };

  // compress=(hashCode)=>hashCode % this.classSize;

  insert = (student) => {
    let x = this.hash(student.score);
    this.classes[x].push({ name: student.name, score: student.score });
  };

  // search = (key) => {
  //     const hashCode = this.hash(key);
  //     let index = this.compress(hashCode);
  //     return this.classes
  // }
}

let table = new hashTable(classSize);

students.forEach((student) => {
  table.insert(student);
});

console.log(table.classes);
