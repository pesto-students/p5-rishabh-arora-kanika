function maxSum(arr, target) {
  var len = arr.length;

  let x = 0;
  let y = 0;

  let sumVal = arr[0] + arr[1] + arr[2];
  let min = target - (arr[0] + arr[1] + arr[2]);
  let diff;

  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      x = arr[i] + arr[j];

      for (k = j + 1; k < len; k++) {
        y = x + arr[k];

        diff = target - y;

        if (diff < min) {
          min = target - y;
          sumVal = y;
        }
      }
    }
  }
  return sumVal;
}

var finalVal = maxSum([-1, 2, 1, -4], 2);
console.log(finalVal);
