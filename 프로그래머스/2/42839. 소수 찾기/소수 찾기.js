function solution(numbers) {
    const nums = numbers.split("");
    const set = new Set();
    
    // 순열 만들기
    function permute(arr, current) {
        // 지금까지 뽑은 것 먼저 저장
        if (current.length > 0) {
            set.add(Number(current.join("")));
        }
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            // 스프레드 연산자 사용 -> current 배열의 내용물만 꺼내서 넣기
            permute(rest, [...current, arr[i]]);
        }
    }
    
    permute(nums, []);
    
    // 소수 판별
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    return [...set].filter(isPrime).length;
}