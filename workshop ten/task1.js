const person = new Object();
person.firstName = "Mack";
person.lastName = "Candie";
person.age = "21";

document.getElementById("demo").innerHTML = person.firstName + person.lastName + person.age;

function employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
} 

e = new employee(90, "Mack", 30000)

