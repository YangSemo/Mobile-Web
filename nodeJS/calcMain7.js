import { add, subtract, multiply, divide } from "./calcM7.js";
console.log("결과: ", add(5, 10));
console.log("결과: ", subtract(10, 5));
console.log("결과: ", multiply(10, 20));
console.log("결과: ", divide(20, 2));

import { months } from "./calcM7.js";
console.log(months);

import { User } from "./calcM7.js";
const user = new User(1001, "sony");
console.log(user);

import def from "./calcM7.js";
console.log(def.mul(5, 5));
