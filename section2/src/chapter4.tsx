//타입 별칭 alias

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
let user1: User = {
  id: 1,
  name: "김재우",
  nickname: "jaewoo",
  birth: "1995.07.26",
  bio: "안녕하세요",
  location: "서울시 강남구 선릉로",
};

let user2: User = {
  id: 2,
  name: "이정환",
  nickname: "lee",
  birth: "1997.01.07",
  bio: "hi",
  location: "부천시",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "Ko",
  UnitedState: "us",
  UnitedKindom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKindom: 826,
};
