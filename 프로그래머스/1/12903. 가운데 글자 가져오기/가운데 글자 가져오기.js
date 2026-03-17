function solution(s) {
    const len = s.length;
    const mid = Math.floor(len / 2);
    
    return len % 2 === 0
        ? s.slice(mid - 1, mid + 1) // 짝수인 경우
        : s[mid];
}