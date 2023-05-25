// input.js

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

//function to handle the keyboard input
const handleUserInput = function (data) {
  //move up
  if (data === "w") {
    connection.write("Move: up");
  }

  //move left
  if (data === "a") {
    connection.write("Move: left");
  }

  //move down
  if (data === "s") {
    connection.write("Move: down");
  }

  //move right
  if (data === "d") {
    connection.write("Move: right");
  }

  //send message to server
  if (data === "q") {
    connection.write("Say: Hello");
  }
};

//export module
module.exports = { setupInput };