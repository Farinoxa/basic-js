module.exports = function countCats(backyard) {
  let counter = 0;
  for (let place of backyard) {
    place.map((item) => {
      if (item == ('^^')) {
        counter++;
      }
    });
  }
  return counter;
};
