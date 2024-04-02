/*
  제너릭 : 
  - 선언 시점이 아니라 컴파일 시점에 타입을 명시하여 하나의 타입이 아닌 여러 타입을 사용할 수 있도록 하는 기법
  - 코드 안전성과 재사용성을 높일 수 있음
*/
interface Person<T> {
  name: string;
  data: T;
}

const person: Person<string> = {
  name: '홍길동',
  data: '김철수'
}

person.data;

const func = <T>(name: string, data: T) => {
  const result: Person<T> = { name, data }
  return result;
}

const person1 = func('김철수', '홍길동');
const person2 = func('이영희', 20);

person2.data

console.log("==================================================");
