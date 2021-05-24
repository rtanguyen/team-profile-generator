const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Stanley', 1, 'stanley@email');

    expect(employee.name).toBe('Stanley');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('stanley@email');
})

test('check role returns employee', () => {
    const employee = new Employee('Stanley', 1, 'stanley@email');

    expect(employee.getRole()).toBe('Employee');
})