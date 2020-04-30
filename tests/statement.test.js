const fs = require("fs");

const { statement } = require("../statement");

test("statement", () => {
  const invoicesJsonString = fs.readFileSync("./invoices.json", "utf8");
  const invoices = JSON.parse(invoicesJsonString);
  const playsJsonString = fs.readFileSync("./plays.json", "utf8");
  const plays = JSON.parse(playsJsonString);

  const expected = `청구 내역 (고개명: BigCo)
 Hamlet: $650.00 (55석)
 As you Like It: $490.00 (35석)
 Othello: $500.00 (40석)
총액: $1,640.00
적립 포인트: 47점
`;

  expect(statement(invoices[0], plays)).toBe(expected);
});
