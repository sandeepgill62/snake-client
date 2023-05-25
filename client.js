// client.js
const { IP, PORT } = require("./constants");

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    ip: IP, // IP address,
    port: PORT // PORT number,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SD");
  });

  conn.on("end", () => {
    process.exit();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };