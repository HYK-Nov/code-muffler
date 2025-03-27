import http = require('http');

const app = http.createServer((req, res) =>{
  let url = new URL(req.url, "http://localhost:3000");
  let query = new URLSearchParams(url.search);

  if(url.pathname === '/'){
    url.pathname = '/index.html';
  }

  res.writeHead(200);
  res.end(query.get('id'));
});

app.listen(3000);