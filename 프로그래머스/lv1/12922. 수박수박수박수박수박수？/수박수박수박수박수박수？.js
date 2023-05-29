function solution(n) {
  let str1 = '수';
  let str2 = '박';
  let result = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result += str1;
    } else {
      result += str2;
    }
  }

  return result;
}
