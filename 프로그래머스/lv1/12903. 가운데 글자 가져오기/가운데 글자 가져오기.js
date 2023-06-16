function solution(s) {
  let result = "";
  
  if (s.length % 2 === 0) {
    result = s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    result = s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
  }

  return result;
}
