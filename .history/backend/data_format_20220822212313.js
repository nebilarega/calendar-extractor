const fs = require("fs");
let raw_data = fs.readFileSync("data.json");
let data = JSON.parse(raw_data);

data.forEach((a) => {
  console.log(a);
});

let string = "August 22, 2022 2:00 PM-8:00 PM";

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

let index = getPosition(string, " ", 3);
let new_string = string.substring(index + 1);

let date = new Date("August 22, 2022 2:00 PM").toISOString();
console.log(new Date().toISOString());
console.log(date);
