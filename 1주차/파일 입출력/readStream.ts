import fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log(`data: ${chunk} ${chunk.length}`);
})

readStream.on('end', () => {
  console.log(`readStream end`);
});

readStream.on('error', (err) => {
  console.log(err);
})