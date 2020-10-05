const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value) {
    if (value === 'undefined') {
      this.values.push(`( )`);
    } else {
      this.values.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || (position < 0 && position >= this.values.length)) {
      this.values = [];
      throw new Error('The position of the link to be deleted was entered incorrectly.');
    }
    
    this.values.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.values.reverse();
    return this;
  },

  finishChain() {
    const str = this.values.join('~~');
    this.values = [];
    return str;
  }
};

module.exports = chainMaker;