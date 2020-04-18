/*
const person: {
  name: string;
  age: number;
  sports: string[];
  role: [number, string];
} = {
  name: "georgio",
  age: 30,
  sports: ["tennis", "soccer"],
  role: [2, 'author']
};
*/

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: "georgio",
  age: 30,
  sports: ["tennis", "soccer"],
  role: Role.ADMIN
};

let vacations: any[];
vacations = ['nice', 'amazing'];

for (const sport of person.sports) {
  console.log(sport.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}