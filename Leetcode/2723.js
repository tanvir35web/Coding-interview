var addTwoPromises = async function(promise1, promise2) {
    // let total = await Promise.all([promise1, promise2]).then((data) => {
    //     return data[0] + data[1];
    // })
    // return total;

    const [value1,value2] = await Promise.all([promise1,promise2]);

    return value1+ value2
};

const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 30))
const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 50))

addTwoPromises(promise1, promise2).then(console.log); 