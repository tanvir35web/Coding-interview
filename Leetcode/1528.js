var restoreString = function(s, indices) {

    newS = '';
    for(i=0; i < s.length; i++){
        newS += s[indices.indexOf(i)];

    }
    return newS;
   
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));