module.exports = getDate;
// to export one more function use module.exports.getDate=getDate and so on

function getDate() {
  let today = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  return today.toLocaleDateString("en-US", options);
}

getDate();
