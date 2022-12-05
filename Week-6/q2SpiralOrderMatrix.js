function spiralArr(r, c, arr) {
  var top = 0;
  var bottom = r - 1;
  var left = 0;
  var right = c - 1;
  var spiralArr = [];

  while (top <= bottom && left <= right) {
    //moving from left to right
    for (var i = left; i <= right; i++) {
      spiralArr.push(arr[top][i]);
    }
    top++;

    //moving from top to bottom
    for (var i = top; i <= bottom; i++) {
      spiralArr.push(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
      //moving from right to left
      for (var i = right; i >= left; i--) {
        spiralArr.push(arr[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      //moving from bottom to top
      for (var i = bottom; i >= top; i--) {
        spiralArr.push(arr[i][left]);
      }
      left++;
    }
  }
  return spiralArr;
}

var matrixArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let result = spiralArr(4, 4, matrixArr);
console.log(result);
