function print(st) {
  process.stdout.write(st);
}

function printLn(st) {
  console.log(st)
}

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
        print('Test failed.\n  Inp:    ')
        printLn(c.inp)
        print('  Out:\n    ')
        printLn(r.ret)
        print('  Expected:\n    ')
        printLn(c.out)
      } else {
        print('Test passed\n  Inp:\n    ')
        printLn(c.inp)
        printLn('')
      }
    });
  }

  compare(res, out) {
    return res === out;
  }
}