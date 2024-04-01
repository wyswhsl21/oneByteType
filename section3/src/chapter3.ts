/**
 *@title 객체 타입의 호환성
 *@description 객체 타입의 호환성에 대해서 공부 하기
 */
type person = {
  name: string;
  gender: string;
  age: number;
};

type model = {
  name: string;
  gender: string;
  age: number;
  tall: number;
};
let girl: person = {
  name: "김와우",
  gender: "girl",
  age: 25,
};
let girlmodel: model = {
  name: "이성경",
  gender: "female",
  age: 33,
  tall: 178,
};

/**
*@title 객체에서 프로퍼티가 많다고 슈퍼타입이 아님 . 프로퍼티가 적은 객체가 슈퍼타입이 되고 프로퍼티가 많은 객체는 
서브타입이 됨.
*@description
*/

/**
 *@title 대수타입
 *@description ->여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 *@title 1.합집합 - Union 타입
 *@description
 */
let a: string | number | boolean | undefined;
a = 1;
a = "hello";

a = true;
let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

/**
 *@title 교집합 타입 - Intersection 타입
 *@description
 */
let variable: number & string;
