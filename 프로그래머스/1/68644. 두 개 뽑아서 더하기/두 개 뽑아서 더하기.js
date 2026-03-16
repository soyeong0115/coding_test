function solution(numbers) {
    var answer = new Set(); // 중복 제거용
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            answer.add(numbers[i] + numbers[j]);
        }
    }
    
    // Set을 배열로 바꾸고 오름차순 정렬
    return Array.from(answer).sort((a,b) => a-b);
}