/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here


function range(startNum, endNum) {
  if (startNum > endNum) {
    return [];

  } else if (startNum < endNum) { 
    console.log(range(startNum+1, endNum))
    var rangeArray = range(startNum+1, endNum);

    console.log(startNum + " <-- Start  End ---> " + endNum)
    rangeArray.unshift(startNum);
    return rangeArray;

  } else if (startNum = 5) {
    console.log("startNum is: " + startNum)
    return range(startNum+1, endNum)
  }
};



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
