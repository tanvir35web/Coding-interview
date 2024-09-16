function wordOccarance(str) {

  // create a Hash map to store and see the output like object

  let hashMap = {};

  // capitalized or smallized all the character 
  const capitalizedForm = str.toUpperCase();


  // iterate the full sentence using loop
  for(let i = 0; i < capitalizedForm.length; i++) {
    let char = capitalizedForm[i];

    //store every word standalone and checking every char, if already exist the count + 1  the current word otherwise set the value 1

    // 1st way 
    // if(char in hashMap){
    //   hashMap[char] = hashMap[char] + 1;
    // } else {
    //   hashMap[char] = 1;
    // } 


    // 2nd way 
    // char in hashMap ?  hashMap[char] = hashMap[char] + 1 :  hashMap[char] = 1;

    hashMap[char] = (hashMap[char] || 0) + 1;

  }
  
  //return the object
  return hashMap;

}

console.log(wordOccarance("Developper"))