const arithmetic = require("./arithmetic");

// addition tests

test('one plus two equals three', () => {
    expect(arithmetic.add(1, 2)).toBe(3);
});

test('twelve point two plus two equals fourteen point two', () => {
    expect(arithmetic.add(12.2, 2)).toBe(14.2);
});

test('zero plus three equals three', () => {
    expect(arithmetic.add(0, 3)).toBe(3);
});

// subtraction tests

test('one sub two equals negative one', () => {
    expect(arithmetic.sub(1, 2)).toBe(-1);
});

test('ten point seven sub seven equals three point five', () => {
    expect(arithmetic.sub(10.5, 7)).toBe(3.5);
});

test('zero sub three equals negative three', () => {
    expect(arithmetic.sub(0, 3)).toBe(-3);
});

// multiplication tests

test('one times two equals two', () => {
    expect(arithmetic.multiply(1, 2)).toBe(2);
});

test('two point five time six equals fifteen', () => {
    expect(arithmetic.multiply(2.5, 6)).toBe(15);
});

test('zero time seven equals zero', () => {
    expect(arithmetic.multiply(0, 7)).toBe(0);
});

// division tests

test('one by two equals zero point five', () => {
    expect(arithmetic.divide(1, 2)).toBe(0.5);
});

test('ten by five equals two', () => {
    expect(arithmetic.divide(10, 5)).toBe(2);
});

test('zero by zero equal NaN', () => {
    expect(arithmetic.divide(0, 0)).toBe(NaN);
});