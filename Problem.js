module.exports = class Problem {
  cases = []
  name = ''

  run(inp) {
    return inp;
  }

  test(inp, out) {
    const ret = this.run(inp);
    const res = this.compare(ret, out);
    return { res, ret }
  }

  testAll() {
    console.log(this.name);
    console.log(`Running ${this.cases.length} tests:`);
    this.cases.forEach((c) => {
      const r = this.test(c.inp, c.out);
      if (!r.res) {
        console.log(`Test failed. Inp: ${c.inp}, Out: ${r.ret}, Expected: ${c.out}`)
      } else {
        console.log(`Passed: Inp: ${c.inp}`)
      }
    });
    console.log('')
  }

  compare(res, out) {
    return res === out;
  }
}