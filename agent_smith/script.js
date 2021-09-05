function agent_smith(array) {
    return array.map((el, i, arr) => (arr[i - 1] || 0) + (arr[i + 1] || 0));
}

console.log(agent_smith([1, 2, 3, 4]));
console.log(agent_smith([3, 3, 3, 3]));
