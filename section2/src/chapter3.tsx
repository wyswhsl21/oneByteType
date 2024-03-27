//object
let user: { id?: number; name: string } = {
  id: 1,
  name: "김재우",
}; // 객체 리터럴 타입

let cat: { name: string; color: string } = {
  name: "냥군이",
  color: "gray",
};

// *명목적 타입 시스템이 아닌 구조적 타입 시스템을 사용한다 !

user = {
  id: 1,
  name: "rlawodn",
};

let config: { readonly apiKey: string } = {
  apiKey = "MY API KEY",
};

// config.apiKey = "hacked";
