module.exports = function repeater(str,
  {repeatTimes = 0, 
  separator = '+',
  addition = '',
  additionRepeatTimes = 0,
  additionSeparator = '|' }) {
  
  let add = [];
  addition = String(addition);
  for (let i = 0; i < additionRepeatTimes; i++) {
    add.push(addition);    
  };
  add = add.join(additionSeparator);
  if (additionRepeatTimes == 0) {
    add = addition;
  }
  str = str + add;
  let repeated = [];
  for (let i = 0; i < repeatTimes; i++){
    repeated.push(str);
  }
  if(repeatTimes == 0) {
    repeated = str;
    return str;
  }
  return repeated.join(separator);
};
  