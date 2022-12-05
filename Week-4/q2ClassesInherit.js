function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher(name, age) {
  Person.call(this, name, age); 
  // we are trying to call function with different context so that our current
  //object goes to Person gets values assigned according to our parameter
}

Teacher.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject + " ");
};
//Object.setPrototypeOf(Teacher.prototype,Person.prototype) 
//is the above line required

const t = new Teacher("Adam", 45);

t.teach("Inheritance");
