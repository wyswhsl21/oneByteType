//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var user = {
    name: "rlawodn",
    role: Role.ADMIN,
};
var user4 = {
    name: "jaewoo",
    role: Role.USER,
};
var user3 = {
    name: "아무개",
    role: Role.GUEST,
};
console.log(user, user4, user3);
