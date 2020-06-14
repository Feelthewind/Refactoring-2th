const { Customer } = require("./customer");

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  constructor() {
    this._customers = new Map();
  }

  registerCustomer(id) {
    if (!this._customers.has(id)) {
      _customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this._customers.get(id);
  }
}
