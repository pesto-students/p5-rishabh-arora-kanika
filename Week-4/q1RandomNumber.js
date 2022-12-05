function getNumber() {
  let x = Math.random();
  let state; //PENDING=1,FULFILLED=2, REJECTED=3

  if (x % 5 == 0) {
    state = 3;
  } else {
    state = 2;
  }

  if (state == 1) {
    getNumber();
  } else if (state == 2) {
    resolvePromise();
  } else if (state == 3) {
    rejectPromise();
  }
}
function rejectPromise() {
  console.log("Your promise has been rejected");
}

function resolvePromise() {
  console.log("Your promise has been resolved");
}
