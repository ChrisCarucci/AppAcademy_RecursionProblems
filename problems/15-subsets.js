/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = arrnums => {
  const result = []

  const dfs = (i, arrnums, slate) => {
  
      //base case
      if (i === arrnums.length) {
        result.push(slate.slice());
        return;
      }

      // Include
      slate.push(arrnums[i]);
      dfs(i+1, arrnums, slate);
      slate.pop();

      // Exclude
      dfs(i+1, arrnums, slate);
  }
  dfs(0, arrnums, []);
  return result;

};

// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
