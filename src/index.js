class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let person1 = new Person('qiushunbin')
alert(person1.getName())