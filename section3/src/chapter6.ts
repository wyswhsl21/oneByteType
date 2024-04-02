/**
 *@title 타입 단언
 *@description
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 이런경우에 타입단언을 한다
// 타입 단언은 as 를 붙여서 타입을 지정 시켜주면 된다.
person.name = "김재우";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;
// 초과 프로퍼티 검사 때문에 브리드는 넣을 수 없게 되는데 이때 타입단언을 하면
// 오류를 방지할 수 있다.

/**
*@title 타입 단언의 규칙
*@description 
값 as 단언 <-
 A as B

 A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야함. 
*/

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // number 타입과 string 타입은 같은 레벨에 위치해있기 때문에
// 단언 할 수 없음!

/**
 *@title const 단언
 *@description
 */

// const 단언은 리터럴 타입으로 만들 수 있다.
// 주로 객체 타입에 const 단언을 많이 사용하는데
// 이유가뭘까 ?
// -> 이유는 바로 const 단언을 하게 되면 모든 객체의 프로퍼티들을 readonly 타입으로 만들 수 있기 때문이다.
let cat = {
  name: "냥구니",
  color: "gray",
} as const;

// cat.name ='' // cat 의 프로퍼티를 수정하려고 하지만 , readonly 타입이여서 수정이 되지 않는다.

/**
 *@title Non Null 단언
 *@description
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
  author: "김재우",
};

const len: number = post.author.length;
