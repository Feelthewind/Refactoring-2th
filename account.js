// 함수 다른 클래스로 옮기기

class Account {
  constructor(data) {
    this._daysOverdrawn = data.daysOverdrawn;
    this._overdraftCharge = data.overdraftCharge;
    this.type = data.type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this._overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    } else return this._daysOverdrawn * 1.75;
  }
}

class AccountType {
  constructor(isPremium) {
    this.isPremium = isPremium;
  }
}

module.exports = {
  Account,
  AccountType,
};
