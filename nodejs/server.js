const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url.split("?")[0];

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to home page");
      break;

    case "/about-us":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Know more about us");
      break;

    case "/userlog":
      const userlog = {
        id: 1,
        name: "Aayush Rawat",
        email: "aayush@dmail.com",
        role: "user",
        isActive: true,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        url: req.url,
        method: req.method,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userlog));
      break;

    case "/user":
      const user = {
        id: 1,
        name: "Aayush Rawat",
        email: "aayush@dmail.com",
        role: "user",
        isActive: true,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        url: req.url,
        method: req.method,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
      break;

    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Page not found" }));
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
