class Person {
  constructor(name, house) {
    this.name = name
    this.house = house
  }
  saySomething() {
    console.log('I am person')
  }
}

class House {
  constructor(city){
    this.city = city
  }
  saySomething() {
    console.log('I am from ' + city)
  }
}

class A extends Person {
  constructor(name, house) {
    super(name, house)
  }
  saySomething() {
    console.log('I am A;I am from ' + this.house.city)
  }
}

let aHouse = new House('北京')
let p = new A('zhangsan', aHouse)
p.saySomething()