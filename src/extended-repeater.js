const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'
}) {
  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += String(str);
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += String(addition);
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
};
  