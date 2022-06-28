const arithmetic = require("./arithmetic");

test('one plus two equals three', () => {
    expect(arithmetic.add(1, 2)).toBe(3);
});