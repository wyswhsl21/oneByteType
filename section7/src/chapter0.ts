/**
 *  제네릭
 */

//제네릭 함수
function func<T>(value: T): T {
  return value;
}
let num = func(10);
let bool = func(true);
let str = func("heelo");

// 제네릭 함수에 인자값을 넣고 싶을때 ?
// 이렇게 넘버 배열 타입을 튜플로 줄수있다. 그치만 이렇게 쓰는것 보다
let arr = func([1, 2, 3] as [number, number, number]);

// 제네릭 호출할때 튜플타입을 인자로 보낼 수 있다.
let arr1 = func<[number, number, number]>([1, 2, 3]);
