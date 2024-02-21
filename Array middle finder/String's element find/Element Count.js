function ElementCounter(letters) {
    let counterAry = [];

    for (i = 97; i < 123; i++) {
        counterAry[i] = 0;
    }

    for (i = 0; i < letters.length; i++) {
        indx = letters[i].charCodeAt(0);

        value = counterAry[indx];
        values = value + 1;
        counterAry[indx] = values;
    }

    result = {};
    for (i = 97; i < 123; i++) {
        let character = String.fromCharCode(i);
        result[character] = counterAry[i];
    }
    return result;
}

const str = "asdaassssdsa";
console.log(ElementCounter(str));
