function solution(s) {
    const map = new Map();
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (map.has(char)) {
            result.push(i - map.get(char));
        } else {
            result.push(-1);
        }
        
        map.set(char, i);
    }
    
    return result;
}