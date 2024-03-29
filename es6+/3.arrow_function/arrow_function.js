/*
  화살표 함수 : 
  - function 키워드 대신 화살표 (=>)를 사용하여 함수를 생성하는 방법 (기본적으로 일회성, 익명)
*/

let func = function (arg1, arg2) {
  
}

func = (arg1, arg2) => {

}


/* 
  매개변수 지정 방법 
*/

// 매개변수가 없을 경우
func = () => { }

// 매개변수가 하나일 경우
func = (arg) => { }
func = arg => { } // 소괄호 제거 가능

// 매개변수가 여러개 일 경우
func = (arg1, arg2) => { }

// 1. func = arg1 2. arg => { }
// func = arg1, arg2 => { } // 매개변수 위치의 소괄호 제거 불가능

/*
  구현부 지정 방법
*/

// single line block
func = (arg) => { 
  return arg * arg;
};

// 구현부가 한 줄이면 중괄호를 생략할 수 있으며, 해당 구문의 결과를 return 해줌
func = arg => arg * arg; // 중괄호 생략시 return도 생략해야 함

// 구현부가 한 줄이면서 객체 리터럴을 반환할 때, 함수의 중괄호를 제거하면 객체 리터럴을 소괄호로 묶어야 함
func = (name, tobName) => {
  return {
    name,
    tobName
  };
};

func = (name, tobName) => ({
  name,
  tobName
}); // 객체리터럴 겉을 소괄호로 묶음

/*
  화살표 함수의 호출 : 
  - 화살표 함수는 익명 함수로만 사용할 수 있기 때문에 함수 표현식 형태로 변수에 저장하여 사용
  - 콜백 함수에 많이 사용됨
*/
const pow = (x) => {
  return x * x;
};

console.log(pow(10));

const numbers = [1,2,3,4,5];

numbers.forEach(function (value, index) {
  console.log(`indeex : ${index} / value : ${value}`);
});

numbers.forEach((value, index) => {
  console.log(`indeex : ${index} / value : ${value}`);
});
