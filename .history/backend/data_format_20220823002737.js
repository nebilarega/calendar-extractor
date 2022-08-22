const fs = require("fs");
let raw_data = fs.readFileSync("data.json");
let data = JSON.parse(raw_data);

// data.forEach((a) => {
//   console.log(a);
// });

let string = "August 22, 2022 2:00 PM-8:00 PM";

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

let index = getPosition(string, " ", 3);
let start_end = string.substring(index + 1);
let pre = string.substring(0, index + 1);

let start = pre + start_end.substring(0, getPosition(start_end, "-"));
let end = pre + start_end.substring(getPosition(start_end, "-") + 1);

console.log(pre);
// console.log(end);
