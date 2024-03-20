/*
  배열 고차 함수
  - 배열의 불변성을 최대한 보장하여 부수효과를 제거한 메서드
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
  sort(비교 함수) : 배열의 요소를 적절하게 정렬 
  - 배열명.sort()정렬하면 사전식 정렬을 하게 됨
*/
// array.sort();
// console.log(array);
const asc = function (x, y) {
  return x-y;
} 
array.sort(asc);
console.log(array);

array.sort(function (x, y) {return y - x;})
console.log(array);

const objects = [
  {x: 9, y:-5},
  {x: -2, y:0},
  {x: 0, y:-3},
  {x: 6, y:5}
];
console.log(objects);
objects.sort(function(a,b){
  return a.x - b.x;
});
console.log(objects);

console.log('==============================');

/*
  forEach(콜백 함수) : for문 대신 사용
  - 배열을 순회하면서 각 요소와 인덱스를 사용할 수 있도록 함 
  - 원본 배열 변경하지 않음
  - break, continue, ... 부가적인 작업을 추가 할 수 없음
  - for 문보다 성능 떨어짐, 가독성이 좋고 편리하므로 자주 사용됨
*/



console.log('==============================');

/*
  map(콜백 함수) : 
  - 
  - 
*/


console.log('==============================');

/*
  filter(콜백 함수) : 
  - 
  - 
*/


console.log('==============================');

/*
  find(value, index) : 
*/


console.log('==============================');

/*
  find(value, index) : 
*/


console.log('==============================');