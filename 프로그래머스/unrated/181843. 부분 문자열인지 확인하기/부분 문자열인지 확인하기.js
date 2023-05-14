function solution(my_string, target) {
  const str = my_string.indexOf(target);
  if (str !== -1) {
    return 1;
  } else {
    return 0;
  }
}
