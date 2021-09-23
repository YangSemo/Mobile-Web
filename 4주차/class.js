//Gatter & Setter
class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get age() {
      return this._age; // this.age 선언 시 오류 => 계속 재귀 호출되어 오류 발생
    }
    set age(value) {
      this._age = value < 0 ? 0 : value;
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  const user1 = new User("John", "Smith", 27);
  console.log(`name: ${user1.getFullName()}, age: ${user1.age}`);