const str = ' abcabcacxddf';

const count = {};

for (let i = 0; i < str.length; i++) {
  const letter = str[i];

  if (letter !== ' ') {
    count[letter] = (count[letter] || 0) + 1; // ( and Operator || ) return first value if the value is Truthy, Otherwise it's returns second value.
  }
}

console.log(count);


// for (const letter in Count) {
//   console.log(`${letter}:${Count[letter]}`);
// }
