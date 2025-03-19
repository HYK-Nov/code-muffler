import fs = require("fs");

const file = "file.txt";

// 비동기
fs.unlink(file, (err) => {
  console.log(err);
});

// 비동기
try {
  fs.unlinkSync(file);
}catch(err) {
  console.log(err);
}