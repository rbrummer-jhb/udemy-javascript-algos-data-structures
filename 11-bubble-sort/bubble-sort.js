// BUBBLE SORT PSEUDO CODE
// * Start looping from a variable called `i` in the end of the array towards the beginning.
// * Start an inner loop with a variable called `j` from the beginning until i - 1.
// * If arr[j] is greater than arr[j+1], swap those 2 values!
// * Return the sorted array.

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function bubbleSort(arr) {
    let noSwaps = true;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));
