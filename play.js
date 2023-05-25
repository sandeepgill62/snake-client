// play.js

//require
const { connect } = require("./client");
const { setupInput } = require("./input");

//message on console
console.log("Connecting ...");

//connect object
const conn = connect();

//call setupInput using connect object
setupInput(conn);