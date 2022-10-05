const homeworkPart1 = document.querySelector("#partOne");
homeworkPart1.textContent = `${sortArray}`;
const homeworkPart2 = document.querySelector("#partTwo");
homeworkPart2.textContent = "Part2";

let n1 = 23;
let n2 = -3446;
let n3 = 92329029952;
let sortArray = [n1, n2, n3];
sortArray.sort((a, b) => a - b);
console.log({ sortArray });
