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

let girl = girlmodel;
let girlmodel = girl;
