const { Account, AccountType } = require("../account");

test("overdraftCharge", () => {
  const data = {
    daysOverdrawn: 10,
    overdraftCharge: 50,
    type: new AccountType(false),
  };
  const account = new Account(data);
  const expected = 17.5;

  expect(account.overdraftCharge).toBe(expected);
});
