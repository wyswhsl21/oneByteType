/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBarked: boolean;
}
interface Cat extends Animal {
  isScracth: boolean;
}
interface Chiken extends Animal {
  isFly: boolean;
}
