const { Customer, Amount } = require("../customer");

test("applyDiscount", () => {
  const customer = new Customer("임창수", 0.1);
  const expected = 900;

  expect(customer.applyDiscount(new Amount(1000))).toBe(expected);
});
