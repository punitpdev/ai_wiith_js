const utils = {};

utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + '%';
}


utils.flaggedUsers = [1663882102141, 1663900040545, 16644855938220];

utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  const percent = utils.formatPercent(count / max);

  process.stdout.write(`${count}/${max}(${percent})`);
}



utils.groupBy = (objectArray, key) => {
  const groups = {};

  for (let obj of objectArray) {
    const val = obj[key];
    if (groups[val] == null) {
      groups[val] = [];
    }
    groups[val].push(obj);
  }

  return groups
}
utils.styles = {
  car: { color: 'gray', text: '🚗' },
  fish: { color: 'red', text: '🐠' },
  house: { color: 'yellow', text: '🏠' },
  tree: { color: 'green', text: '🌳' },
  bicycle: { color: 'cyan', text: '🚲' },
  guitar: { color: 'blue', text: '🎸' },
  pencil: { color: 'magenta', text: '✏️' },
  clock: { color: 'lightgray', text: '🕒' },
};
utils.styles["?"] = { color: 'red', text: '❓' };

if (typeof module !== 'undefined') {
  module.exports = utils;
}