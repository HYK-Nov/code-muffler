import fs = require("fs");

const file = "file.txt";

// 비동기
fs.readFile(file, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

// 동기
try {
  const data = fs.readFileSync(file, "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
}
