function addtionalHandler(n1: number, n2: number, sum: (num: number) => void) {
  const result = n1 + n2;
  sum(result);
}

let combineValues: (param1: number, param2: number) => number;
let resultValues: (param3: number) => number;

addtionalHandler(30000, 20, (result) => {
  console.log(result);
});