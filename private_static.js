class Employee {
  #salary = 50000;
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
  static getInstance(name) {
    return new Employee(name);
  }
  saySalary() {
    console.log(this.#salary);
  }
}
sabitha = Employee.getInstance("Sabitha");
console.log(sabitha.saySalary());
console.log(sabitha.sayName());

console.log(Employee.getInstance("name").saySalary());
