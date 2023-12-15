function reverseString(userName) {
    let output = "";
    let len = userName.length-1;

    for( let i = len; i >= 0; i--){
        output += userName[i];
    }
    return output;
}

let res = reverseString("tanvir");

if (res === "rivnat"){
    console.log("true")
} else{
    console.log("false")
}
