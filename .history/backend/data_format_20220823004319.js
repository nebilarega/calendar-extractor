const fs = require("fs");
let raw_data = fs.readFileSync("data.json");
let data = JSON.parse(raw_data);

// data.forEach((a) => {
//   console.log(a);
// });

let processedData = [];

let string = "August 22, 2022 2:00 PM-8:00 PM";

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function format_time(time) {
  let index = getPosition(time, " ", 3);
  let start_end = string.substring(index + 1);
  let pre = string.substring(0, index + 1);
  let start =
    pre + start_end.substring(0, getPosition(start_end, "-", 1)) + " UTC";
  let end =
    pre + start_end.substring(getPosition(start_end, "-", 1) + 1) + " UTC";
  return { start, end };
}
data.forEach((obj) => {
  processedData.push({
    submmary: obj.actName,
    description: obj.description,
    location: obj.location,
    start: format_time(obj.Time).start,
    end: format_time(obj.Time).end,
  });
});

console.log(processedData[0]);
