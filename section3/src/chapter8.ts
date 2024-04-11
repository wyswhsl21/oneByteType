/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 *
 *
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};
type User = Admin | Member | Guest;
// Admin => {name}님 현재까지 {kickCount} 명 강퇴했습니다.
// Member => {name}님 현재까지 {point} 명 모았습니다.
// Guest => {name}님 현재까지 {visitCount} 번 오셧습니다
function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}명 모았습니다.`);
  } else {
    console.log(
      `${user.name}님 현재까지 ${user.visitCount}명 방문 하셨습니다.`
    );
  }
}

type LoadingType = {
  state: "LOADING";
};

type FailedType = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessType = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
/**
 * 비동기를 동작을 실행하는 함수의 코드를 나타내는 타입을 만든다..?
 *
 *
 */
type AsyncTask = LoadingType | FailedType | SuccessType;
function asyncTest(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      "loading";
      break;
    case "FAILED":
      console.log(task.error.message);
      break;

    case "SUCCESS":
      console.log(task.response.data);
      break;
  }
}
