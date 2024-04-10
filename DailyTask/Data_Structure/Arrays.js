// Array notation -> []

let fruits = ["Apple","Banana","Mango","Orange","Kiwi"];
console.log(fruits);

let marks = [90,88,92,85,96];
let n = marks.length;
let totalMarks = 0;

for(let i=0;  i < n; i++) {
   totalMarks += marks[i];
}
let averageMarks = totalMarks / n;
let perMarks = (averageMarks / 100)*100;

console.log("Total Marks", totalMarks);
console.log("Average Marks", averageMarks);
console.log("Percentage", perMarks+"%");

