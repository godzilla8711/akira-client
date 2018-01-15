class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi ${this.name}!`;
  }

  getDetails() {
    if (this.age && this.age > 17) {
      return 'You\'re allowed to vote.';
    }
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDetails() {
    let details = super.getDetails();
    if (this.hasMajor()) {
      details += ` You\'re major is ${this.major}.`;
    }
    return details;
  }
}

console.log('<-------------------------- Persons');

const anonymous = new Person();
console.log(anonymous.getGreeting());
console.log(anonymous.getDetails());

const child = new Person('Tom', 7);
console.log(child.getGreeting());
console.log(child.getDetails());

const adult = new Person('Cindy', 43);
console.log(adult.getGreeting());
console.log(adult.getDetails());

console.log('<-------------------------- Students');

const student1 = new Student();
console.log(student1.getGreeting());
console.log(student1.getDetails());

const student2 = new Student('Samual', 19);
console.log(student2.getGreeting());
console.log(student2.getDetails());

const student3 = new Student('Gayle', 21, 'Aerospace');
console.log(student3.getGreeting());
console.log(student3.getDetails());
console.log(student3.hasMajor());
