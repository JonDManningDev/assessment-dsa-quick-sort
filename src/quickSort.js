function quickSort(
  compare, // how to compare
  array, // what to sort
  lowerIndex = 0, // where to start
  upperIndex = array.length - 1 // where to stop
) {
  // base case (stop when lower index is no longer lower than upper index)
  if (lowerIndex >= upperIndex) return array;

  const index = partition(compare, array, lowerIndex, upperIndex); // divide the original array (and partially sort)
  quickSort(compare, array, lowerIndex, index - 1); // finish sorting the lower half
  quickSort(compare, array, index + 1, upperIndex); // finish sorting the upper half

  return array; // return sorted array
}

function partition(compare, array, lowerIndex, upperIndex) {
  const pivotValue = array[upperIndex]; // value to compare against
  let partitionIndex = lowerIndex; // start moving the partition up from the bottom

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, array[index]);

    if (comparison > 0) {
      if (partitionIndex !== index) {
        // if you're just starting, leave the first element alone
        [array[index], array[partitionIndex]] = [
          array[partitionIndex],
          array[index],
        ]; // if lower than pivotValue, swap down
      }
      partitionIndex++; // increment the partitionIndex whenever we find an element that belongs in the left partition
    }
  }

  [array[partitionIndex], array[upperIndex]] = [
    array[upperIndex],
    array[partitionIndex],
  ]; // at the end, trade the element of the pivotValue with the element where the partitionIndex stopped
  return partitionIndex; // return where the partitionIndex stopped to define the upper and lower recursive sorts
}

module.exports = quickSort;
