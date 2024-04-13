/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 방법
 * -> 하나의 함수 func
 * -> 매개변수가 1개 - > 이 매개변수에 20을 곱한 값 출력
 * -> 매개변수가 3개 -> 이 매개변수를 다 더한값을 출력
 */

// 버전들 => 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실체 구현부 -> 구현 시그니처
// 실제 코드가 동작하는 함수
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
