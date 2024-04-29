/**
 *  분산적인 조건부
 *
 *
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// number , string |
// string, string |
// boolean ,string

//2단계
// number 가 string 의 subType 인지를 확인하고 아니면 삼항 연산자로 T 가 오고 아니면 never 타입이 옴
//  number
//  never
//  boolean

//결과 number | never | boolean
// 합집합을 하게 되면 never 와 number를 합집합 하면  number
//  그래서 결국 never는 사라지고 number | boolean 만 남는다.

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

//1단계
//  Extract<number , string> |
//  Extract<string , string> |
//  Extract<boolean , string>

//2단계
// never
// string
// never

//결과 string

// 분산을 막기 위해서는 제네릭에 [] 감싸주면 분산을 막을 수 있다 . 
// [T] extends [U] ? T : never