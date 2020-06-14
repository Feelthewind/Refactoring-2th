class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(new Date());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._discountRate;
  }

  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._discountRate += 0.03;
  }
  applyDiscount(amount) {
    return amount.substract(amount.multiply(this._contract.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(arg) {
    this._discountRate = arg;
  }
}

class Amount {
  constructor(value) {
    this._value = value;
  }

  substract(data) {
    return this._value - data;
  }

  multiply(rate) {
    return this._value * rate;
  }
}

module.exports = {
  Customer,
  Amount,
};
