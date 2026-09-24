const http = require("http");
const os = require("os");
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`<h1>🔄 Push-to-Deploy via Openship Webhook!</h1><p>host: ${os.hostname()} · ${new Date().toISOString()}</p>`);
}).listen(process.env.PORT || 3000);
