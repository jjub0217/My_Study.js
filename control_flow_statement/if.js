const a = 1;
if ( a + 1 === 2) { // 특정 조건이 만족할때만
const a = 2; // 전역변수에서 쓰인 변수 a 와 if 문 안에 지역변수로 쓰인 변수 a 는 서로 다른 변수이다. 
console.log(`if 문 안의 a 값은 ${a}`); 
// 전역변수와 지역변수의 이름이 똑같아 보이지만,
// if 문 밖의 해당 동일한 변수는 무시된다. 
console.log(a);
// 2
}
console.log(`if문 밖의 a 값은 ${a}`);
// 전역변수 a의 값을 참조한것이다.
// 지역변수에서 쓰인 a 값은 무시된다. 
console.log(a);
// 1

