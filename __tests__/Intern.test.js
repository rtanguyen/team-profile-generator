const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('set school to intern object', () => {
    const testInput = 'University of Texas';
    const intern = new Intern ('Ryan', 100, 'ryan@dundermifflin.com', testInput);

    expect(intern.school).toBe(testInput);
})

test('gets school', () => {
    const intern = new Intern ('Ryan', 100, 'ryan@dundermifflin.com', 'University of Texas');
    
    expect(intern.name).toBe('Ryan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@dundermifflin.com'));

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test('getRole() overridden to return intern', () => {
    const testInput = 'Intern';
    const intern = new Intern ('Ryan', 100, 'ryan@dundermifflin.com', 'University of Texas');

    expect(intern.getRole()).toBe(testInput);
})