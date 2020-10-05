const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let result = [];

  
  for (let i = 0; i < arr.length; i++) {
    /*
    if (arr[i] === '--discard-next') {
      if ((i + 1) < arr.length) {
        i++;
        continue;
      } else {
        break;
      }
    }

    if (arr[i] === '--discard-prev') {
      if ((i - 1) >= 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
        continue;
      } else {
        continue;
      }
    }

    if (arr[i] === '--double-next') {
      if ((i + 1) < arr.length) {
        result.push(arr[i + 1]);
        continue;
      } else {
        break;
      }
    }

    if (arr[i] === '--double-prev') {
      if ((i - 1) >= 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
        continue;
      } else {
        continue;
      }
    }

    result.push(arr[i]);
    */
    
    switch (arr[i]) {
      case '--discard-next':
        if ((i + 1) < arr.length) {
          i++;
          continue; 
        }
        break;

      case '--discard-prev':
        if ((i - 1) >=0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;

      case '--double-next':
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if ((i - 1) >= 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
    
      default:
        result.push(arr[i]);
        break;
    }

  }

  return result;
};
