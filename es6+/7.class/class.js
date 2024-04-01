/*
  클래스 정의 : class 키워드를 사용하여 선언
  - constructro를 이용해서 멤버 변수를 선언 및 초기화를 할 수 있음
  - 생성자에서 this를 이용해서 멤버 변수를 지정
  - new 연산자를 통해서 인스턴스를 생성할 수 있음
*/
// 왕 클래스 : 이름 / 묘명 / 생일 / 사망일
// class King {
//   constructor () {
//     this.name = '이성계';
//     this.tombName = '태조';
//     this.birth = '1335-11-04';
//     this.death = '1408-06-27';
//   }
// }

// const taejo = new King();
// console.log(taejo);

console.log("==================================================");

/*
  constructor: 
  - 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 용도로 사용되는 특수한 메서드 (생성자)
  - 생성자안에서 this 키워드를 이용해서 클래스의 멤버변수를 선언하고 초기화 할 수 있음
  - 생성자의 매개변수로 각 속성에 값을 받아서 초기화
  - 자바스크립트의 생성자는 오버로드가 되지 않음
*/
class King {
  // constructor () {

  // }
  constructor (name, tombName, brith, death) {
    this.name = name;
    this.tombName = tombName;
    this.brith = brith;
    this.death = death;
  }
}

const junjong = new King('이방과', '정종', '1357-07-26', '1419-10-24');

console.log(junjong);

console.log("==================================================");

/*
  클래스의 필드 선언 : ES6+의 클래스가 가질 수 있는 제어자
  - 퍼블릭 필드
  - 프라이빗 필드
  - 정적(스테틱) 퍼블릭 필드
  - 정적(스테틱) 프라이빗 필드
  - public, protected, default , private
*/
class Sample1 {
  // 퍼블릭 필드
  publicField;
  // 프라이빗 필드
  #privateField;
  // 정적 퍼블릭 필드
  static staticPublicField = '정적 퍼블릭 필드';
  // 정적 프라이빗 필드
  static #staticPrivateField = '정적 프라이빗 필드';

  constructor (publicField, privateField) {
    this.publicField = publicField;
    this.#privateField = privateField;
    // this.staticPublicField = publicField; 
    // this.#staticPrivateField = privateField; //정적으로 선언하면 인스턴스로 사용할 수 없음
  }
}

console.log("==================================================");

/*
  getter, setter : 
  - 
  - 
*/

console.log("==================================================");

/*
  인스턴스 메서드와 정적 메서드 : 
  - 
  - 
*/

console.log("==================================================");

/*
  클래스 상속 : 
  - 
  - 
  - 
*/
