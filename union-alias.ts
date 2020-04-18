type Flexible = number | string;
type Converter = 'as-number' | 'as-string';

function combine(input1: Flexible, input2: Flexible, agenda: Converter) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' && agenda === 'as-number') {
    result = input1 + input2;
  } else {
    result = agenda + "\t" + input1.toString() +'\t'+ input2.toString();
  }
  return result;
}

const combinedAges = combine(35, 56, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-string'); 
console.log(combinedNames);