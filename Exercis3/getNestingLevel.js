// Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.
function getNestingLevel(arr) {
  let maxDepth = 1;

  for (let item of arr) {
    if (Array.isArray(item)) {
      maxDepth = Math.max(maxDepth, 1 + getNestingLevel(item));
    }
  }

  return maxDepth;
}