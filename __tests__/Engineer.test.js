const Engineer = require('../lib/Engineer');

test('set GitHub username to engineer object', () => {
    const testInput = 'rtanguyen';
    const engineer = new Engineer ('Rebecca', 32, 'rebecca@dundermifflin.com', testInput);

    expect(engineer.github).toBe(testInput);
})

test('gets GitHub username', () => {
    const engineer = new Engineer ('Rebecca', 32, 'rebecca@dundermifflin.com', 'rtanguyen');
    
    expect(engineer.name).toBe('Rebecca');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@dundermifflin.com'));

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('getRole() overridden to return Engineer', () => {
    const testInput = 'Engineer';
    const engineer = new Engineer ('Rebecca', 32, 'rebecca@dundermifflin.com', 'rtanguyen');

    expect(engineer.getRole()).toBe(testInput);
})