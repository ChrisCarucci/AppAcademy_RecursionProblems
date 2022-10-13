/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },         // if parent = null create new obj
    { id: 'mammals', 'parent': 'animals' },    // if parent not exist create new obj within obj within prev obj.
    { id: 'cats', 'parent': 'mammals' },       // ^^^^
    { id: 'dogs', 'parent': 'mammals' },       // if parent exists create obj within parent
    { id: 'chihuahua', 'parent': 'dogs' },     // if parent not exist create new obj within  prev obj
    { id: 'labrador', 'parent': 'dogs' },      // ^^^^
    { id: 'persian', 'parent': 'cats' },       // if parent not exist create new obj within obj
    { id: 'siamese', 'parent': 'cats' }        // ^^^^
];

// array of objs
// animals - mammals - dogs/cats - breed/name



Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

const makeTree = (categories, parentId, Tree = {}) => {
  // your code here  
  let levelParent = parentId;

  for (let i = 0; i < categories.length; i++) {
    let el = categories[i];
    if (el.parent  === levelParent) { // found element with current parrent      
      let newArray = categories.slice();
      newArray.splice(i, 1) // removing element from array
      let newParent = el.id
      let newTree ={};
      Tree[el.id] = makeTree(newArray, newParent, newTree);      
    }
  }

  return Tree;
}





/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
