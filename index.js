const fs = require("fs");
const { statement } = require('./statement');

try {
  const invoicesJsonString = fs.readFileSync("./invoices.json", "utf8");
  const invoices = JSON.parse(invoicesJsonString);
  const playsJsonString = fs.readFileSync("./plays.json", "utf8");
  const plays = JSON.parse(playsJsonString);

  const result = statement(invoices[0], plays);
  console.log(result);
} catch (error) {
  console.error(error);
}
