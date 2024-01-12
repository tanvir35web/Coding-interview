function halvesAreAlike(s) {
  let vowels = "aeiouAEIOU";

  let firstHalf = s.slice(0, s.length / 2);
  let secondHalf = s.slice(s.length / 2);

  let counterA = 0;
  let counterB = 0;

  for (i = 0; i < firstHalf.length; i++) {
    if (vowels.includes(firstHalf[i])) {
      counterA++;
    }
    if (vowels.includes(secondHalf[i])) {
      counterB++;
    }
  }
  return counterA === counterB;
}

console.log(halvesAreAlike("boiiok"));

// let vowels = 'aeiouAEIOU';
// let a = s.slice(0, s.length / 2);
// let b = s.slice(s.length / 2);
// let countA = 0, countB = 0;

// for (let i = 0; i < a.length; i++) {
//     if (vowels.includes(a[i])) {
//         countA++;
//     }
//     if (vowels.includes(b[i])) {
//         countB++;
//     }
// }

// return countA === countB;
