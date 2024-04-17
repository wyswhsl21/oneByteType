/**
 *  인터페이스
 */

interface Person {
  name: string;
  age: number;
  //   sayHi: () => void;
  //   sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
  //함수 타입 표현식을 쓰면 식별자 중복이 되기 때문에 호출 시그니처를 사용해야한다 . ex) sayHi():void
}

const person: Person = {
  name: "김재우",
  age: 28,
  sayHi: function () {
    console.log("HI");
  },
};
//함수 오버로딩을 쓰고 싶을때
person.sayHi();
person.sayHi(1, 2);
