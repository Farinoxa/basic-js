module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let teamName = [];
  members.forEach(member => {
    if(typeof member === 'string') {
      member = member.trim();
      teamName.push(member[0].toUpperCase());
    }
  });
  return teamName.sort().join('');
};
