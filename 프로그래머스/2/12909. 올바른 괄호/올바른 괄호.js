function solution(s){
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }

    // === 비교 자체가 boolean을 만들어냄
    return stack.length === 0;
}