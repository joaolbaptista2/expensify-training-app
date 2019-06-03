const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;


test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7)
});

test('Should show the string with the passed name', () => {
    const result = generateGreeting('Joao');

    expect(result).toBe('Hello Joao');
})