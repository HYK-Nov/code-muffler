const query = new URL("https://avatars.githubusercontent.com/u/109024054?v=4");

// 전체 쿼리 스트링 확인
console.log(query.search);

// 문자열 쿼리 스트링을 URLSearchParams 객체로 만들기
const searchParams1 = new URLSearchParams(query.search);
// 객체로 URLSearchParams 객체 생성
const searchParams2 = new URLSearchParams({mode:"dark", page:"1"});

console.log(searchParams1);
console.log(searchParams2.toString());