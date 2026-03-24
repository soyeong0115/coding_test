function solution(numbers) {
    const set = new Set();
    
    function dfs(current, remaining) {
        if (current !== "") {
            set.add(Number(current));
        }
        
        for (let i = 0; i < remaining.length; i++) {
            dfs(
                current + remaining[i],
                remaining.slice(0, i) + remaining.slice(i + 1)
            );
        }
    }
    
    dfs("", numbers);
    
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    
    let count = 0;
    
    for (let num of set) {
        if (isPrime(num)) count++;
    }
    
    return count;
}