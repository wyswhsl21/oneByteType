/**
 * 함수 타입 표현식
 */

type Operations = (a: number, b: number) => number;

const add: Operations = (a, b) => {
  return a + b;
};
const sub: Operations = (a, b) => a - b;
const multiply: Operations = (a, b) => a * b;
const divide: Operations = (a, b) => a / b;

/**
 * 호출시그니처
 * (콜 시그니처)
 */
//콜 시그니처를 사용하면 프로퍼티를 추가할 수 있다. 
// 하이브리드 타입이라고 부른다.
type Operations2 = {
  (a: number, b: number): number;
};
const add2: Operations2 = (a, b) => {
  return a + b;
};
const sub2: Operations2 = (a, b) => a - b;
const multiply2: Operations2 = (a, b) => a * b;
const divide2: Operations2 = (a, b) => a / b;
