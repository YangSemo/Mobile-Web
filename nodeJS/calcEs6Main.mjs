import { add, subtract, multiply, divide } from "./calcEs6M.mjs";
console.log("결과: ", add(5, 10));
console.log("결과: ", subtract(52, 10));
console.log("결과: ", multiply(5, 10));
console.log("결과: ", divide(50, 10));

import { months } from "./calcEs6M.mjs";
console.log(months);

import { User } from "./calcEs6M.mjs";
const user = new User(1001, "sony");
console.log(user);
