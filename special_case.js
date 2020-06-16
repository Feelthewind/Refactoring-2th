class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : this._customer;
  }
}

class Customer {
  get isUnknown() {
    return false;
  }
  get name() {}
  get paymentHistory() {}
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return "거주자";
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
}

function aaa() {
  const aCustomer = new Site(new Customer()).customer;
  const customerName = aCustomer.name;
}
