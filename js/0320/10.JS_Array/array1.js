/*
  배열 : 여러 데이터를 하나의 변수로 저장할 때 사용
*/

/*
  배열 리터럴 : 
  - 0개 이상의 값을 쉼표로 []로 묶어 표현
  - 배열[인덱스]로 요소에 접근 가능, 단, 존재하지 않는 인덱스에 접근하면 undefined반환
  - 자바스크립트 배열 각 요소의 데이터 타입이 서로 달라도 됨
*/
const emptyArray = [];
console.log(emptyArray[2]);

const numbers = [1, 2, 3, 4, "5"];
console.log(numbers);

const funcs = [
  function () {
    console.log("함수1");
  },
  function () {
    console.log("함수2");
  },
];
console.log(funcs);
funcs[0]();

console.log("==============================");

/*
  배열의 요소 추가
  - 배열[인덱스] = 값 : 요소 추가 기능, 순서를 생각할 필요는 없음
  - 뛰어 넘은 인덱스의 값에는 empty item이 추가됨
*/
const emptyArray2 = [];
emptyArray2[2] = 10;
console.log(emptyArray2);

console.log("==============================");

/*
  배열의 요소 삭제
  - delote 연산자를 사용하여 제거 가능
*/
delete emptyArray2[2];
console.log(emptyArray2);

console.log("==============================");

/*
  배열의 순회
  - for-in 문을 사용하여 index 값을 가지고 순회 가능
*/
const fruits = ["apple", "banana", "melon"];
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

for (const index in fruits) { //* 변경작업시 in사용
  console.log(fruits[index]);
}

console.log("==============================");

/*
  - for-in 순회 방식은 index를 사용하여 한번 더 작업해야 하기 때문에 요소를 읽어들이는 순회에는 적합하지 않을 수 있음
  - forEach 메서드 혹은 for - of 문을 사용
*/
for (const item of fruits) { //* 읽기전용
  console.log(item);
}

fruits.forEach(function (item,index) {
  console.log(`index:${index}, item:${item}`);
});

console.log("==============================");

/*
  배열의 길이 : 
*/

console.log("==============================");

/*
  배열 메서드
*/

/*
  indexOf(element) : 
  - 
  - 
*/

console.log("==============================");

/*
  includes(element) :
  - 
*/

console.log("==============================");

/*
  push(element) :
  - 
*/

console.log("==============================");

/*
  pop() :
  - 
*/

console.log("==============================");

/*
  shift() :
  - 
*/

console.log("==============================");

/*
  reverse() :
  - 
*/

console.log("==============================");

/*
  concat(array or item) : 
  - 
*/

console.log("==============================");

/*
  slice(start, end) : 
  - 
*/

console.log("==============================");

/*
  splice(start, eleteCount, items...) :
  - 
*/
