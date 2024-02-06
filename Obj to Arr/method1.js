let objects = {
    one: 1,
    two: 2,
}

let keys = [];
for(let object in objects) {
    if(objects.hasOwnProperty(object)){
        keys.push(object)
    }  
}
console.log(keys);