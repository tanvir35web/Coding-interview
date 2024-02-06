// let objects = {
//     one: 1,
//     two: 2,
// }

// let keys = [];
// for(let object in objects) {
//     if(objects.hasOwnProperty(object)){
//         keys.push(object)
//     }
// }
// console.log(keys);




let objects = {
    one: 1,
    two: 2,
};

let key = Object.keys(objects)
let value = Object.values(objects)
let entries = Object.entries(objects)


console.log(key);
console.log(value);
console.log(entries);

