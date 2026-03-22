function solution(numbers, hand) {
  const pos = {
    1:[0,0],2:[0,1],3:[0,2],
    4:[1,0],5:[1,1],6:[1,2],
    7:[2,0],8:[2,1],9:[2,2],
    '*':[3,0],0:[3,1],'#':[3,2]
  };

  let L = pos['*'], R = pos['#'], ans = '';

  for (let n of numbers) {
    if ([1,4,7].includes(n)) {
      ans += 'L'; L = pos[n];
    } else if ([3,6,9].includes(n)) {
      ans += 'R'; R = pos[n];
    } else {
      const [x,y] = pos[n];
      const l = Math.abs(L[0]-x) + Math.abs(L[1]-y);
      const r = Math.abs(R[0]-x) + Math.abs(R[1]-y);

      if (l < r || (l === r && hand === 'left')) {
        ans += 'L'; L = pos[n];
      } else {
        ans += 'R'; R = pos[n];
      }
    }
  }

  return ans;
}