import fs = require('fs');

const file = "file.txt";
const data = "데이터 추가하기";

// 비동기
fs.appendFile(file, data, (err) => {
  console.log(err);
});

// 비동기
try {
  fs.appendFileSync(file, data);
}catch(err) {
  console.log(err);
}