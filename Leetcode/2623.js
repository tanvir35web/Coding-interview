function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = String(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
}

// memoize=fn=>{
//     let cache = new Map()
//     return (a,b=0)=>{
//         const key = (a << 16) | b;

//         if (!cache.has(key))
//             cache.set(key, fn(a,b));

//         return cache.get(key);
//     }
// }
