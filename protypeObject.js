//Creating Objects using prototypes
const engineerProtype = {
  type: "Engineer",
  sayHello() {
    return `Hello! I am ${this.name} and I am an ${this.type}`;
  },
};
console.log(engineerProtype.sayHello());
const pandaTheEngineer = Object.create(engineerProtype);
pandaTheEngineer.name = "Panda";
console.log(pandaTheEngineer.name);
console.log(pandaTheEngineer.sayHello());
engineerProtype.sayGoodbye = () => "GoodBye!";
console.log(pandaTheEngineer.sayGoodbye());
pandaTheEngineer.sayGoodbye = () => "Yo!";
console.log(pandaTheEngineer.sayGoodbye());
delete pandaTheEngineer.sayGoodbye;
console.log(pandaTheEngineer.sayGoodbye());
console.log(Object.getPrototypeOf(engineerProtype));
console.log(Object.getOwnPropertyNames(engineerProtype));
console.log(Object.getPrototypeOf(pandaTheEngineer));
console.log(Object.getOwnPropertyNames(pandaTheEngineer));
console.log(
  Object.getOwnPropertyNames(Object.getPrototypeOf(pandaTheEngineer))
);

//Creating Objetcs using ECMAScript 2015 Class Definition Syntax
class Engineer {
  type = "Engineer";
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I am class ${this.name} and I am an ${this.type}`;
  }
}
const panda = new Engineer();
console.log(panda.sayHello());
console.log(Object.getPrototypeOf(panda));
console.log("--------------");
console.log(Object.getOwnPropertyNames(panda));
console.log("--------------");
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(panda)));
console.log("--------------");
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Engineer)));
console.log(Engineer.length);
