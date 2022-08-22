const fs = require("fs");
let raw_data = fs.readFileSync("data.json");
let data = JSON.parse(raw_data);

data.forEach((a) => {
  console.log(a);
});
