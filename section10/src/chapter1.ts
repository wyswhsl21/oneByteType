/**
 *  유틸리티 타입
 *  PICK, Omit , Record
 */

/**
 * pick 타입 객체 타입으로부터 특정 프로퍼티만 골라서 만드는 타입
 *
 */
interface Post {
  title: "";
  tags: string[];
  content: "";
  thumbnailURL: string;
}

const pickPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};

/**
 * Omit
 * ->  타입 객체로부터 특정 프로퍼티를 생략해서 만드는 타입
 */
const omitPost: Omit<Post, "title"> = {
  tags: [],
  content: "",
  thumbnailURL: "",
};

/**
 * Record
 * -> 중복된 객체의 key value 를  만드는 타입
 */
type legacyRecord = Record<
  "large" | "small" | "eduBtn" | "middle",
  { url: string; size: string }
>;
