var defangIPaddr = function(address) {

    let output = '';
    for(i=0; i < address.length; i++) {
        if(address[i] === "."){
            output += "[.]";
            continue;
        }
        output += address[i];
    }

    return output;
}

console.log(defangIPaddr("1.1.1.1"));

