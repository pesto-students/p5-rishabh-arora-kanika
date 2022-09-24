function funcSort(arr) {
  let min = arr[0];
  let ind = 0;
  var temp = 0;
  var bolVal = false;
  for (var i = 0; i < arr.length; i++) {
    min = arr[i];
    bolVal = false;

    for (var j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        bolVal = true;
        min = arr[j];
        ind = j;
      }
    }
    if (bolVal) {
      temp = arr[ind];
      arr[ind] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
let result = funcSort([0, 1, 2, 0, 0, 1, 2, 0, 0, 2, 2, 2]);
console.log(result);
