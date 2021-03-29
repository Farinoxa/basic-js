
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || !Array.from(this.chain.keys()).includes(position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.filter((_, i) => i !== position -1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.map((_) => `( ${_} )`).join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
