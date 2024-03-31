//슈퍼 타입에서 서브타입으로 할당하는것을 다운 캐스트 라고 하고
//서브타입에서 슈퍼타입으로 할당 되는것을 업 캐스트라고 한다
//대부분의 경우 다운캐스트는 되지 않음

// 예시
// 모든 직사각형은 정사각형이 될수없다, 그러나 모든 정사각형은 직사각형에 포함된다.
//넘버타입과 넘버 리터럴 타입에서 넘버타입은 슈퍼타입 , 넘버 리터럴타입은 서브타입인데
//넘버 리터럴 타입은 넘버타입에 속하지만 넘버타입이 넘버 리터럴 타입이 될순없다.ㅞㅡ

console.log("hello typescript");

const unknwown = 1;
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = undefined;
  let e: unknown = null;
  // 업 캐스트 할 수 있음.

  let unknownVar: unknown;
  //   let str: string = unknownVar; // 다운 캐스트는 할 수 없음.
  function neverFunc(): never {
    while (true) {}
  }
  let never1: number = neverFunc();
  let never2: string = neverFunc();
  let never3: void = neverFunc();
  /**
   *@title never Type 은 가장 밑에 있는 공집합
   *description 모든 타입들과 업캐스트가 가능하기 때문에 어떤 타입에든 할당 할 수 있다.
   */

  // let never4: never = 10; // 네버 타입에 다른 타입들을 넣는것은 다운캐스트이기 때문에 할당 될 수 없음.
}

/**
 *@title  Void
 *description void 에 대한 설명
 *void 타입은 중간쯤에 위치해 있으며 undefined 를 할당 할 수 있다.
 */
const voidFunction = (): void => {
  console.log("void 타입");
  return undefined;
};

/**
 *@title anyExam
 *@description any 타입은 타입 계층도를 무시하기 때문에 왠만하면 사용 안하는걸 추천
 */
const anyExam = (): any => {};
