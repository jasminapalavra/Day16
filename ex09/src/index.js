class Person {
constructor(name) {
    this.name = name
}
getPerson(){
   var personInfo = 'Name: ${this.name}, email: ${this.email}, age: ${this.age}';
   return personInfo;
}
}
module.exports = Person;