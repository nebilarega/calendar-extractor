let data_array = [];
function getValue() {
  const otherval = document.querySelectorAll(".notion-collection-item");
  const title_array = [
    "actName",
    "day",
    "description",
    "property",
    "groups",
    "location",
    "respTeam",
    "Time",
    "lead",
    "link",
    "status",
    "type",
    "doc",
  ];
  otherval.forEach((vals) => {
    let obj = {};
    vals.childNodes.forEach((v, index) => {
      obj[title_array[index]] = v.textContent;
    });
    console.log(obj);
    data_array.push(obj);
  });
}
getValue();
