const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || !members) {
    return false;
  }

  return members.map(m => {
    if (typeof m === 'string') {
      return m.trim()[0].toUpperCase();
    }
  }).sort().join('');
};
