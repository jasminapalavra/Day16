class Person {
     constructor(){
     }
show(){
}
static display() {
    return "Static method is invoked from Person class";
   
}


}
var message = new Person();

message.show();
module.exports = Person;
console.log(Person.display());