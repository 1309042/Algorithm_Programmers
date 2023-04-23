function solution(s) {
  let changeCount = 0;
  let deletedCount = 0;

  while (s !== '1') {
    const zeroCount = s.split('0').length - 1;
    const len = s.length - zeroCount;
    s = len.toString(2);
    changeCount++;
    deletedCount += zeroCount;
  }

  return [changeCount, deletedCount];
}