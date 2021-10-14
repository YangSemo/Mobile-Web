export function add(a, b) {
  return a + b;
}

const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { subtract, multiply, divide };

export let months = ["1월", "2월", "3월", "4월"];

export const PORT = 3000;

export class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// Default export는 한 개만 선언 가능
export default (a, b) => a * b;
