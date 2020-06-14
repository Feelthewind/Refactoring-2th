class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }

  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    this._discountRate += 0.03;
  }
  applyDiscount(amount) {
    return amount.substract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
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
