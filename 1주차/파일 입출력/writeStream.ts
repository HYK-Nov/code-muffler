import fs = require('fs');

const writeStream = fs.createWriteStream('./file.txt');

writeStream.on('finish', () => {
  console.log('writeStream end');
})

writeStream.write("첫번째 글 쓰기\n");
writeStream.write("두번째 글 쓰기\n");
writeStream.end();