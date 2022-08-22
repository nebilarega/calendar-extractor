const fs = require("fs");
let raw_data = fs.readFileSync("data.json");
let data = JSON.parse(raw_data);

console.log(typeof data[0]);
