function hasDuplicate(arr) {
  var bolVal;
  const mySet = new Set(arr);

  if (mySet.size != arr.length) {
    bolVal = true;
  } else {
    bolVal = false;
  }
  return bolVal;
}

var isDuplicate = hasDuplicate([1, 2, 4, 3, 7, 4]);
console.log(isDuplicate);
