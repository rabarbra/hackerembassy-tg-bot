const Database = require("better-sqlite3");

const IsDebug = process.env["BOTDEBUG"] === "true";

const options = IsDebug ? { verbose: console.log } : undefined;
const db = new Database("./data/data.db", options);

module.exports = db;
