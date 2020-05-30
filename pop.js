const numbers = [10, 20, 30, 40];

const value = numbers.pop(2);
console.log(value);
// 40

// 배열의 뒤쪽의 요소가 배열에서 빠져나와서 pop 를 통해서 value 안으로 들어가지게 된다. 
// 그래서 pop 를 통해서 기존의 배열을 수정하게 된다. 
// 꼭 변수에 할당을 해줘야 한다. 

// console.log(numbers);
// [10, 20, 30]

// pop 를 통해서 value에 40을 할당함으로써 기존 배열의 numbers 에서 40은 빠지게 된다. 
// 위쪽에 pop를 쓴 부분에 numbers.pop(); 을 여러번 하면 뒤에서부터 빠지게 되는거니까
// 세번째 두번째 요소도 그 만큼 빠지게 된다. 
// 배열안에 아무것도 없어질때까지 빠지게 된다.
// 요소의 사이즈(즉, length) 보다 더 많이 pop을 쓰게 되면 계속해서 빈 배열만 나오게 된다.

// pop은 맨 뒤에서부터 요소 하나씩 바닥 날때까지 밖으로 꺼내는 걸 의미한다. 
// pop() <- 괄호는 원래 비워 놓는것이다.