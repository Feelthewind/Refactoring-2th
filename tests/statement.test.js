const fs = require("fs");

const { statement } = require("../statement");
const createStatementData = require("../createStatementData");

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

test("createStatementData", () => {
  const invoicesJsonString = fs.readFileSync("./invoices.json", "utf8");
  const invoices = JSON.parse(invoicesJsonString);
  const playsJsonString = fs.readFileSync("./plays.json", "utf8");
  const plays = JSON.parse(playsJsonString);

  const expected = {
    customer: "BigCo",
    performances: [
      {
        amount: 65000,
        audience: 55,
        play: { name: "Hamlet", type: "tragedy" },
        playID: "hamlet",
        volumeCredits: 25,
      },
      {
        amount: 49000,
        audience: 35,
        play: { name: "As you Like It", type: "comedy" },
        playID: "as-like",
        volumeCredits: 12,
      },
      {
        amount: 50000,
        audience: 40,
        play: { name: "Othello", type: "tragedy" },
        playID: "othello",
        volumeCredits: 10,
      },
    ],
    totalAmount: 164000,
    totalVolumeCredits: 47,
  };

  expect(createStatementData(invoices[0], plays)).toStrictEqual(expected);
});
