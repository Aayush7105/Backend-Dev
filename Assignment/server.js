const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const logFile = path.join(__dirname, "visitors.log");
const backupFile = path.join(__dirname, "backup.log");

const server = http.createServer((req, res) => {
  // /visit
  if (req.url === "/visit") {
    const entry = `Visit: ${new Date().toISOString()}\n`;
    fs.appendFile(logFile, entry, () => res.end("Visitor Logged"));
  }

  // /logs
  else if (req.url === "/logs") {
    fs.readFile(logFile, "utf8", (e, data) => {
      if (e) return res.end("No Logs Found");
      res.end(data);
    });
  }

  // /copy-logs
  else if (req.url === "/copy-logs") {
    fs.copyFile(logFile, backupFile, () =>
      res.end("Logs Copied to backup.log"),
    );
  }

  // /clear-logs
  else if (req.url === "/clear-logs") {
    fs.unlink(logFile, () => res.end("Visitor Logs Deleted"));
  }

  // /system-info
  else if (req.url === "/system-info") {
    const info = `
Hostname: ${os.hostname()}
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Cores: ${os.cpus().length}
Total Memory: ${os.totalmem()}
Free Memory: ${os.freemem()}
Uptime: ${os.uptime()}
`;
    res.end(info);
  }

  // 404
  else {
    res.statusCode = 404;
    res.end("404 Route Not Found");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
