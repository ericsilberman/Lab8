// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//Matches valid phone numbers
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    expect(functions.isPhoneNumber('123-4567890')).toBe(true);
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
    expect(functions.isPhoneNumber('123456789')).toBe(false);
});
//Matches valid emails
test('isEmail', () => {
    expect(functions.isEmail('12345d@gmail.com')).toBe(true);
    expect(functions.isEmail('gsagsg5d@yahoo.com')).toBe(true);
    expect(functions.isEmail('12345d@gmail')).toBe(false);
    expect(functions.isEmail('gsagsg5d@yahoo')).toBe(false);
});
/**
 * The password's first character must be a letter, 
 * it must contain at least * 4 characters and no more than
 * 15 characters and no characters other than * * letters, 
 * numbers and the underscore may be used
 */
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('A12345d')).toBe(true);
    expect(functions.isStrongPassword('H124143Td')).toBe(true);
    expect(functions.isStrongPassword('1234')).toBe(false);
    expect(functions.isStrongPassword('gsa')).toBe(false);
});
//This regular expressions matches dates of the form XX / XX / YYYY where
//XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('isDate', () => {
    expect(functions.isDate('12/12/2020')).toBe(true);
    expect(functions.isDate('11/11/2020')).toBe(true);
    expect(functions.isDate('12/12/20')).toBe(false);
    expect(functions.isDate('1/1/20')).toBe(false);
});
//Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('isHexColor', () => {
    expect(functions.isHexColor('d12345')).toBe(true);
    expect(functions.isHexColor('c12345')).toBe(true);
    expect(functions.isHexColor('zghhy6')).toBe(false);
    expect(functions.isHexColor('zvnyum')).toBe(false);
});

