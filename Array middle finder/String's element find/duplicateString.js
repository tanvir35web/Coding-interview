const str = "aasddhssda"

counter = " ";

for(i = 0; i < str.length; i++) {
    for(j = i + 1; j < str.length; j++) {
        if(str[i] === str[j]) {
            if(!counter.includes(str[i])){
                counter += str[i] + " " ;
            }
        }      
    }
}

console.log(counter);



