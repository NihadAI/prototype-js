class Employee {
    constructor(name, age, salary) {
      this._name = name;
      this._age = age;
      this._salary = salary;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      this._age = value;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(value) {
      this._salary = value;
    }
  }
  
  class Programmer extends Employee {
    constructor(name, age, salary, lang) {
      super(name, age, salary);
      this._lang = lang;
    }
  
    get lang() {
      return this._lang;
    }
  
    set lang(value) {
      this._lang = value;
    }
  
    get salary() {
      return this._salary * 3;
    }
  }
  
  const programmer1 = new Programmer('John Doe', 30, 5000, ['JavaScript', 'Python']);
  const programmer2 = new Programmer('Jane Smith', 25, 4000, ['Java', 'C++']);
  
  console.log(programmer1);
  console.log(programmer2);
  

  /*
  
  1. Prototypical inheritance in JavaScript is based on the concept of prototypes.
  Each object has an internal link to another object called its prototype.
  When a property or method is accessed on an object,
  JavaScript looks for it in the object itself first, then in its prototype,
  and continues up the prototype chain until it finds the property or method.

  2. Calling super() in the constructor of a child class is necessary to invoke the constructor 
  of the parent class. It ensures that the inherited properties and behaviors from the parent 
  class are properly initialized before the child class performs its own initialization.*/