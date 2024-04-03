/**
 *@title 타입 좁히기
 *@description 조건문등을 이용해 넓은 타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법!
 */
// value =>> Date  : getTime

type Person = {
  name: string;
  age: number;
};
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime()); // 자바스크립트의 typeof 연산자는 null 값에다가
    //똑같이 typeof 를 해도 objcect 를 반환하기 때문에 좋은 방법이 아님!
  }
  //   else if( value instanceof Person){ // 인스턴스 of 연산자는 오른쪽에 오는 항이 타입이 올수없음 . class 가 와야함
  // value 가 인스턴스 인지 확인하는 연산자 이기 때문에
  else if (value && "age" in value) {
    // in 연산자는 앞에 null 값이나  undefined 가 오면 안되기 때문에 무조건 && 연산자나 null 과 undefined 체크를 하고
    // 사용해야한다.
    console.log(`${value.name}은 ${value.age}입니다.`);
  }
}
