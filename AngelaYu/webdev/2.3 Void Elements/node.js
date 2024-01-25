// const http = require("http");

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<h1>Welcome to Node!</h1> <p> Status: Running..</p>");
//     response.end();
//   })
//   .listen(6600);
/////////////////////////////////////////////////////////////////////////////////////////
// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(
//       JSON.stringify([
//         { Name: "TV", Price: 46000.44, Stock: true },
//         { Name: "Mobile", Price: 12000.44, Stock: false },
//       ])
//     );
//     response.end();
//   })
//   .listen(6600);
// console.log("Server Started http://127.0.0.1:6600");
/////////////////////////////////////////////////////////////////////////////////////////
// const os = require("os");
// console.log(os.hostname());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
/////////////////////////////////////////////////////////////////////////////////////////

const path = require("path");
console.log(path.dirname("d:\\Study\\data.js"));
console.log(path.basename("d:\\Study\\data.js"));
console.log(path.extname("d:\\Study\\data.js"));
console.log(path.toNamespacedPath("d:\\Study\\data.js"));
console.log(path.parse("d:\\Study\\data.js"));
// console.log(path.delimiter("d:\\Study\\data.js"));
