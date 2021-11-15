// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("testing (123)456-7890", () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test("testing (858)534-2230", () => {
    expect(functions.isPhoneNumber('(858)534-2230')).toBe(true);
});

test("testing 1234567890", () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test("testing (123)4567890", () => {
    expect(functions.isPhoneNumber('(123)4567890')).toBe(false);
});

test("testing a@b.com", () => {
    expect(functions.isEmail('a@b.com')).toBe(true);
});

test("testing admissionsreply@ucsd.edu", () => {
    expect(functions.isEmail('admissionsreply@ucsd.edu')).toBe(true);
});

test("testing a@b", () => {
    expect(functions.isEmail('a@b')).toBe(false);
});

test("testing a@b.com.com", () => {
    expect(functions.isEmail('a@b.com.com')).toBe(false);
});

test("testing 10/16/2001", () => {
    expect(functions.isDate('10/16/2001')).toBe(true);
});

test("testing 11/14/2021", () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test("testing Oct 16, 2001", () => {
    expect(functions.isDate('Oct 16, 2001')).toBe(false);
});

test("testing Nov 14, 2021", () => {
    expect(functions.isDate('Nov 14, 2021')).toBe(false);
});

test("testing a123", () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
});

test("testing abc1", () => {
    expect(functions.isStrongPassword('abc1')).toBe(true);
});

test("testing a", () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

test("testing 1abc", () => {
    expect(functions.isStrongPassword('1abc')).toBe(false);
});

test("testing #FFFFFF", () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test("testing #123", () => {
    expect(functions.isHexColor('#123')).toBe(true);
});

test("testing #FFFF", () => {
    expect(functions.isHexColor('#FFFF')).toBe(false);
});

test("testing #1234", () => {
    expect(functions.isHexColor('#1234')).toBe(false);
});