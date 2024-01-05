let defangIPaddr = function(address) {
    let ip = address.replaceAll(".","[.]");
    return ip;
}


let address = "1.1.1.1";

console.log(defangIPaddr(address));
