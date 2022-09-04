//Bind Use
function sum(a, b) {

  return this.a + this.b;

}

const bindUse = sum.bind({
  a: 10,
  b: 20
});
console.log(bindUse());

//Call use

var speak = function () {
  console.log(this.language);
}
var saySomething = {
  language: "new"

};
speak.call(saySomething);

//Apply Use we can pass array in apply 


const person = {
  firstName: 'Kanika',

}

function userInfo(greeting, message) {

  return (greeting + " " + this.firstName + " " + message);
}

let result = userInfo.apply(person, ['Hello', 'Member of P5']);

console.log(result);