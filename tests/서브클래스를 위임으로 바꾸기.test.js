const { createPremiumBooking } = require("../서브클래스를 위임으로 바꾸기");

test("hasTalkback", () => {
  const show = {
    talkback: "funfunfun",
  };
  const extras = {
    premiumFee: 10,
    dinner: "korean",
  };
  const booking = createPremiumBooking(show, new Date(), extras);

  expect(booking.hasTalkback).toBe(true);
});

test("basePrice", () => {
  const show = {
    talkback: "funfunfun",
    price: 5,
  };
  const extras = {
    premiumFee: 10,
    dinner: "korean",
  };
  const booking = createPremiumBooking(show, new Date(), extras);

  expect(booking.basePrice).toBe(16);
});
