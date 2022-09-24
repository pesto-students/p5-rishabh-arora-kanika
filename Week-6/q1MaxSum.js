function maxSum(arr) {
  let max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    let total = 0;
    total = arr[i];
    for (var j = i + 1; j < arr.length; j++) {
      total = total + arr[j];

      if (total > max) {
        max = total;
      }
      if (max < arr[j]) {
        max = arr[j];
      }
    }
  }
  return max;
}

let result = maxSum([1, 2, 3, 4, -10]);
console.log(result);
