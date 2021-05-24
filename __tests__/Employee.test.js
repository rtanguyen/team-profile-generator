const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Dwight', 1, 'Dwight@dundermifflin.com');

    expect(employee.name).toBe('Dwight');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('Dwight@dundermifflin.com');
})

test('check role returns employee', () => {
    const employee = new Employee('Dwight', 1, 'Dwight@dundermifflin.com');

    expect(employee.getRole()).toBe('Employee');
})