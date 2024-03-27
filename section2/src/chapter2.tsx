//배열 튜플하기
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hi", "jaewoo", "go", "to", "program"];

let boolArr: Array<boolean> = [true, false, false, true];

//배열
let multiArr: number | string = [1, "hello"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플
//길이와 타입이 고정된 배열을 튜플이라고 한다.
let tupl: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

//배열을 사용할때 길이가 정해져있고 , 넣어야 하는 값들이 정해져있는 상황에서
//튜플을 사용한다!
const users: [string, number][] = [
  ["이정환", 1],
  ["김재우", 2],
  ["김동욱", 3],
  ["김희조", 4],
  //   [5, "최아무개"],
];
