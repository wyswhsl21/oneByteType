//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role {
  ADMIN,
  USER,
  GUEST,
}
const user = {
  name: "rlawodn",
  role: Role.ADMIN,
};
const user4 = {
  name: "jaewoo",
  role: Role.USER,
};
const user3 = {
  name: "아무개",
  role: Role.GUEST,
};
console.log(user, user4, user3);
