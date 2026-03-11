
import { runFile, insp } from '../../helpers/testsHelper';

let pjs = runFile(import.meta.url, 'variables.code');

test('result = 40.5', () => {
  expect(pjs.engine.results[0]).toBe(40.5);
});

test('result = 40.5', () => {
  expect(pjs.engine.results[1]).toBe(40.5);
});

test('result = 41.5', () => {
  expect(pjs.engine.results[2]).toBe(41.5);
});

test('result = 82', () => {
  expect(pjs.engine.results[3]).toBe(82);
});

test('uninitialized variable', () => {
  expect(() => {
    runFile(import.meta.url, 'variables_error.code');
  }).toThrow();
});