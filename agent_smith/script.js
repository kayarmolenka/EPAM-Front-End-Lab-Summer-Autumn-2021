function agent_smith(array) {
    return array.map((el, i, arr) => (arr[i - 1] || 0) + (arr[i + 1] || 0));
}

console.log(agent_smith([1, 2, 3, 4]));
console.log(agent_smith([3, 3, 3, 3]));

// Task *

function multidimensional_arrays(array) {
    if(typeof array[0] === 'number') {
        return array.map((el, i, arr) => (arr[i - 1] || 0) + (arr[i + 1] || 0));
    }
    return array.map((elementMainArray, indexMainArray, MainArray) => {
        return elementMainArray.map((el, i, arr) => {
            if(Array.isArray(el)) {
                return multidimensional_arrays(arr);
            }
            const top = MainArray[indexMainArray - 1]?.[i] || 0;
            const bottom = MainArray[indexMainArray + 1]?.[i] || 0;
            const left = arr[i - 1] || 0;
            const right = arr[i + 1] || 0;
            
            return top + bottom + left + right;            
        })
    })
}


const array = [
    [1, 2, 3, 4],
    [4, 3, 2, 1],
    [5, 6, 7, 8],
    [8, 7, 6, 5]
];

const array2 = [
    [
        [9, 2, 3, 4],
        [4, 3, 2, 1],
        [5, 6, 7, 8],
        [8, 7, 6, 5]
    ]
];

console.log('multidimensional_arrays :', multidimensional_arrays(array));
console.log(multidimensional_arrays([1, 2, 3, 4]));

console.log('multidimensional_arrays2 :', multidimensional_arrays(array2));
