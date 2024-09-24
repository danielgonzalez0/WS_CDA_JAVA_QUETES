import assert from 'assert';

class BankCustomer {
  private name: string;
  private secretCode: string;

  constructor(name: string, code: string) {
    this.name = name;
    this.secretCode = code;
  }

  public getName(): string {
    return this.name;
  }

  public verifyPinInput(code: string): boolean {
    return this.secretCode === code;
  }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
