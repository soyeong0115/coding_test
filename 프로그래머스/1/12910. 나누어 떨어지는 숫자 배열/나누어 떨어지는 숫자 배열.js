function solution(arr, divisor) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        const element = arr[i] % divisor
        
        if (element === 0) {
            answer.push(arr[i]);
        }
    }
        
    if (answer.length === 0) {
        answer.push(-1);
    } else
        answer.sort((a, b) => a - b);
    
    return answer;
}