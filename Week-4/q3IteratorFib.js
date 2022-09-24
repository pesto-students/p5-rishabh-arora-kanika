function displayElements(n) {
  // to update the iteration

  let iterationCount = 0;
  let first = 0;
  let second = 1;
  let curr = 0;
  const rangeIterator = {
    // implementing the next() function
    next() {
      if (iterationCount < n) {
        curr = first + second;
        first = second;
        second = curr;
        iterationCount++;
        return {
          value: curr,
          done: false,
        };
      }

      return {
        value: undefined,
        done: true,
      };
    },
  };
  return rangeIterator;
}

const it = displayElements(10);

let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}
