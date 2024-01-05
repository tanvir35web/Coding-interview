function formatIP(ip) {
    return ip.split('.').join('[.]');
}

let address = "1.1.1.1";
console.log(formatIP(address));