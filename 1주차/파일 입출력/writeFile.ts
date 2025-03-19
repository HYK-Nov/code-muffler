import fs = require("fs");

const file = "file.txt";
const data = "파일에 데이터 쓰기";

// 비동기
fs.writeFile(file, data, (err) => {
  console.log(err);
});

// 비동기
try {
  fs.writeFileSync("file.txt", data);
} catch (err) {
  console.log(err);
}
