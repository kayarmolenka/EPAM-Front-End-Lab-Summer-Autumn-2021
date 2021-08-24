function permutations(str) {
  return (str.length <= 1) ? [str] :
  str.split('')
     .map((firstLetter, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(tail => firstLetter + tail))
     .flat()
  // .reduce((r, x) => r.concat(x), []) 
  // method flat even more cool than reduce in this situation 
}

export default permutations;