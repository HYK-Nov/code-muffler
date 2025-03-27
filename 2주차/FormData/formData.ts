import http = require('http');
import {parse} from 'querystring';

const app = http.createServer((req, res) =>{
    if(req.method == 'POST' && req.url === '/'){
    let body = '';

    // 데이터 청크 받기
    req.on('data', (chunk) => {
      body += chunk.toString();
    })
    req.on('end', () => {
      // querystring을 이용해서 폼 데이터 파싱
      const formData = parse(body);
      const name = formData['name'];
      const message = formData['message'];

      console.log(`name: ${name}`);
      console.log(`message: ${message}`);
    })
  }
});

app.listen(3000);