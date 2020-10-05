class VigenereCipheringMachine {
  constructor (value = true) {
    this.isReverse = !value ? true : false;
    this.alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt (message, key) {
    return this.crypt(message, key);
  }

  decrypt (message, key) {
    return this.crypt(message, key, false);
  }

  crypt (message, key, encrypt = true) {
    if (!message || !key) {
      throw new Error();
    }

    let result = [];

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < message.length; i++) {
      if (!key[k]) {
        k = 0
      };

      if (!this.alph.includes(message[i])) {
        result.push(message[i]);
        continue;
      }
      
      let keyRow = this.alph
      .slice(
        this.alph.indexOf(key[k]),
        this.alph.length
      )
      .concat(
        this.alph.slice(
          0,
          this.alph.indexOf(key[k])
        )
      );

      result.push(
        (!encrypt ? this.alph : keyRow)
        [(!encrypt ? keyRow : this.alph).indexOf(message[i])]
      );

      k++;
    }

    if (this.isReverse) {
      result.reverse();
    }

    return result.join('');
  }
}

module.exports = VigenereCipheringMachine