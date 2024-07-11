export default function cleanSet(set, startString ) {
  // let res;
  // if (!startString || typeof startString !== 'string') {
  //   return '';
  // }
  // res = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
  // res = res.map((word) => word.slice(startString.length));
  // return res.join('-');
  let ans = [];
  if (!startString  || typeof startString  !== 'string') {
    return '';
  }
  for (const s of set)
  {
    if (typeof s === 'string' && s.startsWith(startString))
    {
      ans.push(s.substring(startString.length));
    }
  }
  return ans.join('-');
}
