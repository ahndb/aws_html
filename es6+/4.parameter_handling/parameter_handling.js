/*
  매개변수 기본값 : 
  - 함수 호출시 인수를 전달하지 않았으면 사용할 기본값을 지정할 수 있음
*/
const add = (a = 10, b = 20) => { return a + b};
console.log(add());
console.log(add(30, 90));

console.log("========================================");

/*
  rest 매개변수 : 
  - 매개변수 앞에 ...을 붙여서 정의한 매개변수
  - 함수에 전달받은 인수의 목록을 배열로 전달 받음
  - rest 매개변수는 반드시 제일 마지막에 선언되어야 함
*/
const restFunction1 = (...args) => {
  console.log(args);
};
restFunction1(1,2,3,4,5);

// arg1 도 받고 뒤에 도 몇개인지 모르지만 받고 싶을 경우 뒤에 ...을 작성해야 함
const restFunction2 = (arg1, ...args) => {
  console.log(arg1);
  console.log(args);
};
restFunction2(1,2,3,4,5);



console.log("========================================");

/*
  spread 연산자 : 
  - ...을 사용하여 대상을 개별 요소로 분리 (배열인 것을 나누는 것)
  - 반드시 피연산자는 반복 가능한 객체 (배열, 객체, 문자열 등) 이어야 함
*/
const numbers = [1,2,3,4,5];
console.log(numbers);

console.log(...numbers);
console.log(1,2,3,4,5);

console.log("========================================");

// 배열 복사에 사용
// 요소만 뽑아와서 새로운 배열을 만든거기 때문에 메모리 주소가 다름(값은 같지만 별개의 배열임)
const copyNumbers = [ ...numbers ];
console.log(copyNumbers);

copyNumbers[0] = 10;
console.log(numbers);
console.log(copyNumbers);

console.log("========================================");

// 배열 연결에 사용
const numbers2 = [6,7,8,9,10];
let newNumbers = [ ...numbers, ...numbers2 ];
console.log(numbers2);
console.log(newNumbers);
newNumbers = [...numbers2, ...numbers]
console.log(newNumbers);

console.log("========================================");

// 배열 요소 추가에 사용

newNumbers = [...numbers, 0,-1,-2]
console.log(newNumbers);

console.log("========================================");

// 객체 복사, 연결, 요소 추가에 사용

// 복사
const king = {
  name: '이성계',
  tombName: '태조'
};

let newKing = { ...king };
console.log(newKing);

newKing.name = '이방과'
console.log(newKing);
console.log(king);

// 연결
const kingInfo = {
  address: '서울특별시',
  country: '고려'
}

newKing = {...newKing, ...kingInfo}
console.log(newKing);

// 요소 추가
newKing = {...king, birth: '1335.11.04'}
console.log(newKing);

// key가 종복이면 value가 덮어씌어짐 (수정하면서 요소를 추가할 때 자주 사용됨)
newKing = {...king, name: '이단', birth: '1335.11.04'}
console.log(newKing);