// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Function 1
test(`valid number without area code`, () => {
  let number = '456-7890';
  expect(isPhoneNumber(number)).toEqual(true);
});

test(`valid number with area code`, () => {
  let number = '123-456-7890';
  expect(isPhoneNumber(number)).toEqual(true);
});

test(`invalid number, too small`, () => {
  let number = '7890';
  expect(isPhoneNumber(number)).toEqual(false);
});

test(`invalid number, no dashes`, () => {
  let number = '1234567890';
  expect(isPhoneNumber(number)).toEqual(false);
});


// Function 2 
test ('valid username with only letters', () => {
  let email = 'user@gmail.com';
  expect(isEmail(email)).toEqual(true);
});

test ('valid username with letters and numbers ', () => {
  let email = 'user123@gmail.com';
  expect(isEmail(email)).toEqual(true);
});

test ('invalid username with only punctuation in user', () => {
  let email = 'first.last@gmail.com';
  expect(isEmail(email)).toEqual(false);
});

test ('invalid username with long domain', () => {
  let email = 'user@gmail.loooooong';
  expect(isEmail(email)).toEqual(false);
});


// Function 3 
test('strong password, short', () => {
  let password = 'abcd';
  expect(isStrongPassword(password)).toEqual(true);
});

test('strong password, long', () => {
  let password = 'abcdefghik12345';
  expect(isStrongPassword(password)).toEqual(true);
});

test('bad password, does not start with letter', () => {
  let password = '1abc';
  expect(isStrongPassword(password)).toEqual(false);
});

test('bad password, uses bas characters', () => {
  let password = 'abc%^&';
  expect(isStrongPassword(password)).toEqual(false);
});


// Fuction 4
test('valid date, 1 digit x', () => {
  let date = '1/1/1111';
  expect(isDate(date)).toEqual(true);
});


test('valid date, 2 digit x', () => {
  let date = '11/11/1111';
  expect(isDate(date)).toEqual(true);
});

test('invalid date, not 4 digit y', () => {
  let date = '1/1/11';
  expect(isDate(date)).toEqual(false);
});

test('invalid date, no demarcater', () => {
  let date = '111111';
  expect(isDate(date)).toEqual(false);
});


// function 5 
test('valid hex code, 3 characters', () => {
  let color = 'FFF';
  expect(isHexColor(color)).toEqual(true);
});

test('valid hex code, 6 characters', () => {
  let color = 'A3F8B2';
  expect(isHexColor(color)).toEqual(true);
});

test('invalid hex code, bad length', () => {
  let color = 'A3F8B235';
  expect(isHexColor(color)).toEqual(false);
});

test('invalid hex code, bad characters', () => {
  let color = 'zzz';
  expect(isHexColor(color)).toEqual(false);
});




