const { Province, Producer, sampleProvinceData } = require("../chapter4");

test("shortfall", () => {
  const asia = new Province(sampleProvinceData());

  expect(asia.shortfall).toBe(5);
});

test("profit", () => {
  const asia = new Province(sampleProvinceData());
  expect(asia.profit).toBe(230);
});

test("change production", () => {
  const asia = new Province(sampleProvinceData());
  asia.producers[0].production = 20;
  expect(asia.shortfall).toBe(-6);
  expect(asia.profit).toBe(292);
});

test("zero demand", () => {
  const asia = new Province(sampleProvinceData());
  asia.demand = -1;
  expect(asia.shortfall).toBe(-26);
  expect(asia.profit).toBe(-10);
});

test("no producers", () => {
  let noProducers;
  const data = {
    name: "No producers",
    producers: [],
    demand: 30,
    price: 20,
  };
  noProducers = new Province(data);

  expect(noProducers.shortfall).toBe(30);
  expect(noProducers.profit).toBe(0);
});

test("string for producers", () => {
  let noProducers;
  const data = {
    name: "String producers",
    producers: "",
    demand: 30,
    price: 20,
  };
  prov = new Province(data);

  expect(prov.shortfall).toBe(0);
});
