
import { runFile, insp } from '../../helpers/testsHelper';


let pjs = runFile(import.meta.url, 'assigment_chain.code');

test('result = 5', () => {
  expect(pjs.engine.results[0]).toBe(5);
});

test('result = 10', () => {
  expect(pjs.engine.results[1]).toBe(10);
});

test('result = 13', () => {
  expect(pjs.engine.results[2]).toBe(13);
});

test('result = 5', () => {
  expect(pjs.engine.results[3]).toBe(5);
});

test('result = 10', () => {
  expect(pjs.engine.results[4]).toBe(10);
});

