function insertionSort(arr) {
    // Loop through each element in the array, starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // The current element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--;
        }
        arr[j + 1] = current; // Insert the current element into its correct position
    }
    return arr; // Return the sorted array
}

// Example usage
const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
