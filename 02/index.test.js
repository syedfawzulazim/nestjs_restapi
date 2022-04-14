// Unit test for different test cases

const findIndex = require("./index");

test("returns -1 when array is empty", () => {
  const array = [];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 5)).toBe(-1);
});

test("returns -1 when number(15) is not found", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 12, 12, 13, 18, 18, 20];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 15)).toBe(-1);
});

test("returns the index of the number when array size is odd", () => {
  const array = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 3)).toBe(5);
});

test("returns the index of the number when array size is even", () => {
  const array = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 3)).toBe(5);
});

test("returns 0 when number(1) is in the first index", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 12, 12, 13, 18, 18, 20];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 1)).toBe(0);
});

test("returns last index when number(20) is in the last position", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 12, 12, 13, 18, 18, 20];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 20)).toBe(size - 1);
});

test("returns first index when number(2) is multiple", () => {
  const array = [
    1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 12, 12, 13, 18, 18, 20,
  ];
  const size = array.length;
  expect(findIndex(array, 0, size - 1, 2)).toBe(1);
});
