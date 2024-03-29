/*
  디스트럭처링 :
  - 구조화된 배열 또는 객체를 비구조화, 구조화된 것을 파괴하여 개별 변수로 할당하는 것
  - 배열 또는 객체에서 필요한 데이터만 추출해서 변수에 할당하여 사용할 수 있도록 함
*/

let king = {
  name: '이성계',
  tombName: '태조',
  birth: '1335.11.04.',
  death: '1408.06.27.'
};

// let name = king.name;
// let tombName = king.tombName;
// let birth = king.birth;
// let death = king.death;

let fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];
// let fruit4 = fruits[3];
// let fruit5 = fruits[4];

/*
  배열 디스트럭처링
  - 배열의 각각의 요소를 배열로부터 추출해서 변수에 할당 
  - 할당 기준은 인덱스
*/
// fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];

// 만약 배열 디스트럭처링에 배열의 길이를 초과한 변수를 선언하면
// 초과한 범위에 대하여 해당 변수는 undefined가 됨
// let을 사용하면 값을 변경할 수 있는데 그럼 비구조화를 사용하는 의미가 없음
// 그래서 왠만하면 const를 사용함
const [fruit1, fruit2, fruit3, fruit4, fruit5, fruit6] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit6); // undefined

console.log("========================================");

/*
  spread 연산자를 활용
  - 배열 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 요소로 새로운 배열을 생성
*/
const [anotherFruits, ...otherFruits] = fruits
console.log(anotherFruits);
console.log(otherFruits);

console.log("========================================");

/*
  객체 디스트럭처링
  - 객체의 각 속성을 객체로부터 추출하여 변수에 할당
  - 할당 기준은 키
*/

// king = {
//   name: '이성계',
//   tombName: '태조',
//   birth: '1335.11.04.',
//   death: '1408.06.27.'
// };

// 객체 디스트럭처링에서는 변수의 순서는 상관없지만, 이름은 반드시 객체의 키의 이름과 같아야 함
const { name, tombName } = king;
console.log(name);
console.log(tombName);


console.log("========================================");

/*
  spread 연산자를 활용
  - 객체 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 속성으로 새로운 객체를 생성
*/
const { birth, death , ...reftKing } = king;
console.log(birth);
console.log(death);
console.log(reftKing);

console.log("========================================");
