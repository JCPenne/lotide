//Takes an Array as a Parameter.
//Slices the first element off of the Parameter Array and returns the remainder of the Parameter Array.
const tail = arr => {
  return (arr = arr.slice(1));
};

module.exports = tail;
