function solution(participant, completion) {
    const map = {};
    
    for (let name of participant) {
        map[name] = (map[name] || 0) + 1;
    }
    
    for (let name of completion) {
        map[name]--;
    }
    
    return Object.entries(map).find(([k, v]) => v > 0)[0];
}