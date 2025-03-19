import fs = require("fs");

// fs-dir 디렉토리 생성
// 비동기
fs.mkdir("fs-dir", (err) => {console.log(err)});
// 비동기
try {
  fs.mkdirSync('fs-dir');
}catch(err) {
  console.error(err);
}

// fs-dir 디렉토리 삭제
// 비동기
fs.rmdir('fs-dir', (err) => {console.log(err)});
// 비동기
try {
  fs.rmdirSync('fs-dir');
}catch(err) {
  console.error(err);
}
