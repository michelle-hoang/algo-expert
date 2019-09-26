// binary search

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  const root = Math.floor(left + right / 2);
  const current = array[root];
  if (target === current) {
    return root;
  } else if (target < current) {
    return binarySearchHelper(array, target, left, root - 1);
  } else {
    return binarySearchHelper(array, target, root + 1, right);
  }
}

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

module.exports = { binarySearch };
