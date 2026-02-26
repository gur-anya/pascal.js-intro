
import { runFile, insp } from '../../helpers/testsHelper';


let pjs = runFile(import.meta.url, 'brackets.code');

test('result = 5', () => {
  expect(pjs.engine.results[0]).toBe(5);
});

test('result = 14', () => {
  expect(pjs.engine.results[1]).toBe(14);
});

test('result = 20', () => {
  expect(pjs.engine.results[2]).toBe(20);
});

test('result = 5', () => {
  expect(pjs.engine.results[3]).toBe(5);
});

test('result = 17', () => {
  expect(pjs.engine.results[4]).toBe(17);
});

test('result = -5', () => {
  expect(pjs.engine.results[5]).toBe(-5);
});

test('result = -4', () => {
  expect(pjs.engine.results[6]).toBe(-4);
});
