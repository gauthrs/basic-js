const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (const r of backyard) {
    for (const c of r) {
      if (c === '^^') {
        count++;
      }
    }
  }
  return count;
};