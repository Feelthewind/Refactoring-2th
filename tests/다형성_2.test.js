const { rating } = require("../다형성_2");

test("rating", () => {
  const voyage = { zone: "중국", length: 10 };
  const history = [
    { zone: "동인도", profit: 5 },
    { zone: "서인도", profit: 15 },
    { zone: "중국", profit: -2 },
    { zone: "서아프리카", profit: 7 },
  ];
  const myRating = rating(voyage, history);

  expect(myRating).toBe("A");
});
