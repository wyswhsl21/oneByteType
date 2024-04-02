/**
 *@title 타입추론
 *@description */

let a = 10; // -> //number
let b = "hello"; // -> string
let c = {
  id: "jaewoo",
  name: {
    firstname: "jaewoo",
    lastname: "kim",
  },
  profile: {
    email: "wyswhsl21@naver.com",
  },
};

let { id, name, profile } = c;
// -> 구조 분해를 해도 타입 추론이 가능

let d; // -> any 타입으로 추론
d = 10; // ->  number 타입을 가진다
d.toFixed();

d = "hello";
d.toUpperCase(); // string 타입을 가지기 때문에
// string method 사용 가능

const num = 10;
