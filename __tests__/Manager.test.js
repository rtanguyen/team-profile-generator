const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('set office number to manager object', () => {
    const testInput = 5;
    const manager = new Manager ('Michael', 12, 'michael@dundermifflin.com', testInput);

    expect(manager.officeNumber).toBe(testInput);
})

test('gets office number', () => {
    const manager = new Manager('Michael', 12, 'michael@dundermifflin.com', 5);
    
    expect(manager.name).toBe('Michael');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@dundermifflin.com'));

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
})

test('getRole() overridden to return Manager', () => {
    const testInput = 'Manager';
    const manager = new Manager('Michael', 12, 'michael@dundermifflin.com', 5);

    expect(manager.getRole()).toBe(testInput);
})