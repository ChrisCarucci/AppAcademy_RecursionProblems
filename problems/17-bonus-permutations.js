/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here

function permutations(arr) {
  var results = [],
      l = arr.length,
      used = Array(l), // Array of bools. Keeps track of used items
      data = Array(l); // Stores items of the current permutation
  (function backtracking(pos) {
    if(pos == l) return results.push(data.slice());
    for(var i=0; i<l; ++i) if(!used[i]) { // Iterate unused items
      used[i] = true;      // Mark item as used
      data[pos] = arr[i];  // Assign item at the current position
      backtracking(pos+1); // Recursive call
      used[i] = false;     // Mark item as not used
    }
  })(0);
  return results;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
