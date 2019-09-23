//bubblesort

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

​function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}


//insertion sort 
function insertionSort () {

}

// selection sort 
function selectionSort () {

}

// quick sort 
function quickSort () {

}

// heap sort 
function heapSort () {

}

// merge sort 
function mergeSort () {

}

module.exports = {
    bubbleSort,
    insertionSort,
    selectionSort,
    quickSort, 
    heapSort,
    mergeSort
  };
  