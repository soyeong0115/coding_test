function solution(n, lost, reserve) {
    const overlap = lost.filter(x => reserve.includes(x));
    
    lost = lost.filter(x => !overlap.includes(x));
    reserve = reserve.filter(x => !overlap.includes(x));
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for (let r of reserve) {
        if (lost.includes(r - 1)) {
            lost = lost.filter(x => x !== r - 1);
        } else if (lost.includes(r + 1)) {
            lost = lost.filter(x => x !== r + 1);
        }
    }
    
    return n - lost.length;
}