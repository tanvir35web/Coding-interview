var interpret = function(command) {
    let decodedCommand = command.replace(/\(\)/g, 'o');
    return decodedCommand;
};

console.log(interpret("G()(al)"));;