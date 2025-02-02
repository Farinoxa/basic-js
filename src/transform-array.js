module.exports = function transform(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i < arr.length) {
          newArr.push(undefined);
          i += 1;
        }
        break;
      case "--discard-prev":
        if (i > 0) {
          newArr.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0) {
          newArr.push(newArr[newArr.length - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr.filter((item) => item !== undefined);
};
