function solution(A, B) {
  let answer = 0;
  const length = A.length;

      A.sort((a, b) => a - b);
      B.sort((a, b) => b - a);

  for (let i = 0; i < length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}