const str = ' a a a a b s s d d d s ';

const Count = {};

for (let i = 0; i < str.length; i++) {
  const letter = str[i];

  if (letter !== ' ') {
    Count[letter] = (Count[letter] || 0) + 1;
  }
}


for (const letter in Count) {
  console.log(`${letter}:${Count[letter]}`);
}
