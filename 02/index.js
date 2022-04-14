// function for finding the index of a number
// from an sorted array

const findIndex = (array, l, h, key) => {
  let result = -1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (array[mid] === key) {
      result = mid;
      h = mid - 1;
    } else if (array[mid] > key) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return result;
};

module.exports = findIndex;
