const fc = require("fast-check");

const contains = (pattern, text) => text.indexOf(pattern) !== -1;

test("The concatenation of a, b and c always contains b", () => {
  fc.assert(
    fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
      return contains(b, a + b + c);
    })
  );
});

test("Also works with expect", () => {
  fc.assert(
    fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
      expect(contains(b, a + b + c)).toBe(true);
    })
  );
});
