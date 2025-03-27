import http = require('http');

const app = http.createServer((req, res) =>{
  let url = new URL(req.url, "http://localhost:3000");
  let query = new URLSearchParams(url.search);

  if(url.pathname === '/'){
    const title = '동적 웹페이지';
    const description = '사용 예시: ?item=item1&item=item2';
    const items = query.getAll('item');
    const template = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fc;
            color: #333;
            margin: 0;
            padding: 0;
          }
          header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 24px;
          }
          .container {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .description {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          h2 {
            color: #4CAF50;
            margin-top: 20px;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            background-color: #f1f1f1;
            margin: 8px 0;
            padding: 10px;
            border-radius: 4px;
            font-size: 18px;
          }
          footer {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
          }
        </style>
      </head>
      <body>
        <header>
          ${title}
        </header>
        <div class="container">
          <p class="description">${description}</p>
          <div>
            <button onclick="location.href='/?item=item1'">item1</button>
            <button onclick="location.href='/?item=item2'">item2</button>
            <button onclick="location.href='/?item=item3'">item3</button>
           </div>
          <h2>Items List:</h2>
          <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <footer>
          <p>&copy; 2025 Dynamic Page Example</p>
        </footer>
      </body>
      </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(template);
  }else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

app.listen(3000);