class test {
  *[Symbol.iterator]() {
    const a = yield 1;
    console.log(a);
    yield 2;

    const b = yield 2 + a;

    // console.log(b);
    yield* [4];
  }
}

const t1 = new test();

for (let value of t1) {
  // console.log(value);
}
