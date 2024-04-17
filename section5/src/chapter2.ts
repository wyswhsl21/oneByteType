/**
 * 인터페이스의 선언 합치기
 */

//타입 별칭은 동일한 이름으로 선언할 수 없지만 인터페이스는 동일한 이름으로 선언할 수 있으며
// 자동으로 합쳐진다 모든선언은 합쳐지고, 선언 합침. declare

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
