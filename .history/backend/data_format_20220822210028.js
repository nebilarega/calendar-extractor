const fs = require("fs");
let raw_data = fs.readFileSync("data.json");
let data = fs.parse(raw_data);
console.log(data);
