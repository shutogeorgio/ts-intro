function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addtionalHandler(n1: number, n2: number, sum: (num: number) => void) {
  const result = n1 + n2;
  sum(result);
}

printResult(add(5, 12));

let combineValues: (param1: number, param2: number) => number;
let resultValues: (param3: number) => void;

combineValues = add;
resultValues = printResult;

console.log(combineValues(3, 78));
resultValues(combineValues(45, 78));

addtionalHandler(30000, 20, (result) => {
  console.log(result);
});