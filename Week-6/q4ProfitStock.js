function findProfit(arr) {
  let max = -1;

  for (var i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let profit = arr[j] - arr[i];

        if (max < profit) {
          max = profit;
        }
      }
    }
  }
  if (max == -1) {
    return 0;
  } else return max;
}

profitVal = findProfit([7, 6, 4, 3, 1, 14, 12, 1]);
console.log(profitVal);
