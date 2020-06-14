const { TelephoneNumber } = require("../person");

test("telephone equals", () => {
  expect(new TelephoneNumber("312", "555-0142")).toStrictEqual(
    new TelephoneNumber("312", "555-0142")
  );
});
