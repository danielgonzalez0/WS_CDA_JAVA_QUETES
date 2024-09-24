"use strict";
class Employee {
    constructor(name, code) {
        this.empName = name;
        this.empCode = code;
    }
}
class SalesEmployee extends Employee {
    constructor(name, code, department) {
        super(name, code);
        this.department = department;
    }
}
let emp = new SalesEmployee('John Smith', 123, 'Sales');
// emp.empCode = 456 //Compiler Error
console.log(emp);
