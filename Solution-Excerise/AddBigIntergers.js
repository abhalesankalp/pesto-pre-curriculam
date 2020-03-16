let AddBigIntegers = (inputString) =>
{
  let arr = inputString.split("\n");
  return arr.reduce((fnum,snum) => parseInt(fnum) + parseInt(snum), 0);
}