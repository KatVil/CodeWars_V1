//let s = "ZpglnRxqenU";
const accum = (s) => {
  let s1 = s.split('');
  let s2 = '';
  for(let i = 0; i<s.length; i++){
    s2 += s1[i].toUpperCase() + s1[i].toLowerCase().repeat(i) + '-';
  }
  return s2.slice(0,-1);
}
//console.log(accum(s));
//OR
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
