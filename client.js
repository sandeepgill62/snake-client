// connect.js

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
    console.log("Successfully connected to game server");
    conn.write("Name: SD");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  conn.on("connect", () => {
    conn.write("Move: left");
  });

  conn.on("connect", () => {
    conn.write("Move: down");
  });

  conn.on("connect", () => {
    conn.write("Move: right");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {
  console.log("ok");
  // your code here
};

module.exports = { connect };