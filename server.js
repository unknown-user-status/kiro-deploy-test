const http = require("http");
const os = require("os");
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`<h1>🚀 V3 — WEBHOOK AUTO-DEPLOY by git push!</h1><p>host: ${os.hostname()} · commit: v2-webhook · ${new Date().toISOString()}</p>`);
}).listen(process.env.PORT || 3000);
