function vowelCount(strVal) {
  var vowel = "aeiou";
  let vowelMap = new Map();
  for (var i = 0; i < strVal.length; i++) {
    let ind = vowel.indexOf(strVal[i]);
    if (ind != -1) {
      if (vowelMap.has(vowel[ind])) {
        var count = vowelMap.get(vowel[ind]);

        vowelMap.set(vowel[ind], 1 + count);
      } else {
        vowelMap.set(vowel[ind], 1);
      }
    }
  }
  return vowelMap;
}

let map = vowelCount("javascript");
console.log(map);
