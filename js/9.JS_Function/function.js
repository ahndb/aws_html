/*
  함수 : 어떤 작업을 수행하기 위해 필요한 구문들의 집합
  - function 함수명 (매개변수, ...) {실행 구문}
  - 동일한 코드를 반복해서 작성할 필요없이 미리 하나의 코드만 작성한 후 호출하여 사용해서 코드의 재사용성을 높일 수 있음
  - 특정 기능이나 코드 구문에 대해서 이름을 부여하는 용도로 사용할 수 있음
  - 특정 작업들에 대해서 모듈화를 위한 용도로 사용할 수 있음
*/
function add(x, y) {
  return x + y;
}
add(1, 2);

/*
  함수 표현식 : 함수도 객체 리터럴 방식으로 정의 할 수 있고 변수에 할당할 수 있음
*/
/*
  - 기명 함수 표현식
*/
let func1 = add;
// func1 = add();
const func2 = function add2 (x, y) {
  return x + y
};

console.log(func1(1, 2));
console.log(func2(1, 2));
//  기명 함수 형태로 작성한 함수 표현식은 해당 함수명으로 호출 발가능
// console.log(add2(1, 2));

/*
  - 익명 함수 표현식
*/
const func3 = function (x, y) {
  return x + y
};
func3(1, 2)


/*
  콜백 함수 : 다른 함수에매개변수로 전달하는 함수
*/
function getInteger(number) {
  return number - (number % 1)
};

function add2 (preProcessing , x, y) {
  return preProcessing(x) + preProcessing(y)
}

const result = add2(getInteger, 14.67, 16.33)
console.log(result);