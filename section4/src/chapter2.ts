/**
 * 함수타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
//기준 1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 다운캐스팅이기 때문에 되지 않음.
// a=  number type 이고 b는 넘버 리터럴 타입이기 때문에 다운캐스팅이 일어나 호환 되지 않는다 .

// 기준2. 매개변수가 호환되는가
// 매개변수의 타입을 기준으로 함수의 호환성을 판단할때는 업캐스팅이 되면 안된다 .

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
// animalFunc = dogFunc;  // 매개변수의 타입을 기준으로 함수의 호환성을 판단할때는 업캐스팅이 되면 안됨 .
dogFunc = animalFunc;

// 매개변수의 개수가 다를 때
// 매개변수의 개수가 더 많은쪽을 할당하는건 안된다 .
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
