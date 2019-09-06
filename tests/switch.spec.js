const fc = require("fast-check");

const myCode = require("../src/switch");

test("The switch will always return a string", () => {
  const expected = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ""
  ];

  fc.assert(
    fc.property(fc.array(fc.nat(6)), data => {
      expect([myCode.myFunction(parseInt(data))]).not.toEqual(
        expect.arrayContaining(expected)
      );
    })
  );
});
