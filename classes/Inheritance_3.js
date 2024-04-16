class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const bonus = this.salary * 0.1;
    return super.calculateAnnualSalary() + bonus;
  }
}

const manager1 = new Manager('Nick', 50000, 'Sales');
const manager2 = new Manager('Alex', 60000, 'Marketing');

const annualSalary1 = manager1.calculateAnnualSalary();
const annualSalary2 = manager2.calculateAnnualSalary();
