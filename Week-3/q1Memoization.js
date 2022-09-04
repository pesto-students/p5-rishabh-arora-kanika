function memoize(fn) {
  const cache = new Map();

  return function (...args) {


    const key = args.toString();

    if (args.length != 2) {
      return args.toString();
    } else if (cache.has(key)) {

      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  }

}

function add(a, b) {
  return a + b;
}

const memoizeAdd = memoize(add);

 memoizeAdd(100, 100);


memoizeAdd(100, 100);


memoizeAdd(300, 200);


memoizeAdd(100);