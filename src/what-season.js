module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch(e) {
    throw new Error(e);
  }

  let month = date.getMonth();
  let seasons = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  };
  for (let season in seasons) {
    if (seasons[season].includes(month)) {
      return season;
    }
  }
};
