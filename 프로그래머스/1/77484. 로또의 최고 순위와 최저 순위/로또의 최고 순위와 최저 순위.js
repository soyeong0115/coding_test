function solution(lottos, win_nums) {
    let zeroCount = lottos.filter(x => x === 0).length;
    let matchCount = lottos.filter(x => win_nums.includes(x)).length;
    
    const getRank = (count) => {
        if (count >= 2) return 7 - count;
        return 6;
    };
    
    const maxRank = getRank(matchCount + zeroCount);
    const minRank = getRank(matchCount);
    
    return [maxRank, minRank];
}