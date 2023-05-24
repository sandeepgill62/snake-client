// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "10.0.2.15", // IP address here,
//     port: 50541 // PORT number here,
//   });


//   conn.on("data", (data) => {
//     console.log("Server says: ", data);
//   });

//   conn.on("connect", () => {
//     conn.write("Hello from client!");
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");



//   return conn;
// };

// console.log("Connecting ...");

// connect();


const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Hello from client!");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");



  return conn;
};

console.log("Connecting ...");
connect();